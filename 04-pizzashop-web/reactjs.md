## 📋 Índice

- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Roteamento e Navegação](#roteamento-e-navegação)
- [HTTP State e Cache](#http-state-e-cache)
- [Formulários e Validação](#formulários-e-validação)
- [Interceptadores HTTP](#interceptadores-http)
- [Temas e Context API](#temas-e-context-api)
- [Paginação](#paginação)
- [Filtros e URL State](#filtros-e-url-state)
- [Validação de Ambiente](#validação-de-ambiente)
- [Componentes Reutilizáveis](#componentes-reutilizáveis)
- [Padrões de Código](#padrões-de-código)

---

## Gerenciamento de Estado

### Local State (useState)
Usado para estados específicos de componentes individuais.

```tsx
// Controle de modal/dialog
const [isDetailsOpen, setIsDetailsOpen] = useState(false);

// Estado de loading em formulários
const { formState: { isSubmitting } } = useForm();
```

### HTTP State (TanStack Query)
Gerenciamento de estado de requisições HTTP com cache automático.

```tsx
// Query básica
const { data: result } = useQuery({
  queryKey: ['orders', pageIndex, orderId, customerName, status],
  queryFn: () => getOrders({ pageIndex, orderId, customerName, status }),
});

// Mutation para ações
const { mutateAsync: authenticate } = useMutation({
  mutationFn: signIn,
});
```

### Global State (Context API)
Para estados que precisam ser compartilhados entre componentes.

```tsx
// Provider pattern
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children, defaultTheme = 'system' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Hook customizado
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

---

## Roteamento e Navegação

### Estrutura de Rotas Aninhadas
Organização hierárquica com layouts compartilhados.

```tsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
]);
```

### Navegação Programática
```tsx
const navigate = useNavigate();

// Redirecionamento com replace
navigate('sign-in', { replace: true });
```

---

## HTTP State e Cache

### Configuração do Cliente HTTP
```tsx
// Axios com configurações globais
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

// Interceptador para delay em desenvolvimento
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return config;
  });
}
```

### Cache Otimista com TanStack Query
Atualização do cache local antes da confirmação do servidor.

```tsx
function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
  const orderListCache = queryClient.getQueriesData<GetOrdersResponse>({
    queryKey: ['orders'],
  });

  orderListCache.forEach(([cacheKey, cacheData]) => {
    if (!cacheData) return;

    queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
      ...cacheData,
      orders: cacheData.orders.map((order) => {
        if (order.orderId === orderId) {
          return { ...order, status };
        }
        return order;
      }),
    });
  });
}
```

---

## Formulários e Validação

### React Hook Form + Zod
Combinação para formulários tipados e validados.

```tsx
const signInForm = z.object({
  email: z.email(),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });
      toast.success('Link enviado para seu e-mail');
    } catch {
      toast.error('Credenciais inválidas');
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <Input {...register('email')} />
      <Button type="submit" disabled={isSubmitting}>
        Entrar
      </Button>
    </form>
  );
}
```

### Controller para Componentes Customizados
```tsx
<Controller
  name="status"
  control={control}
  render={({ field: { name, onChange, value, disabled } }) => (
    <Select name={name} onValueChange={onChange} value={value} disabled={disabled}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos</SelectItem>
        <SelectItem value="pending">Pendente</SelectItem>
      </SelectContent>
    </Select>
  )}
/>
```

---

## Interceptadores HTTP

### Interceptador de Resposta para Autenticação
```tsx
useEffect(() => {
  const interceptorId = api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        const code = error.response?.data.code;

        if (status === 401 && code === 'UNAUTHORIZED') {
          navigate('sign-in', { replace: true });
        }
      }
    },
  );

  return () => {
    api.interceptors.response.eject(interceptorId);
  };
}, [navigate]);
```

---

## Temas e Context API

### Sistema de Temas Completo
```tsx
type Theme = 'dark' | 'light' | 'system';

export function ThemeProvider({ children, defaultTheme = 'system', storageKey = 'theme' }) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
```

---

## Paginação

### Componente de Paginação Reutilizável
```tsx
export interface PaginationProps {
  pageIndex: number; // página atual (começa em 0)
  totalCount: number; // número total de registros
  perPage: number; // registros por página
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({ pageIndex, perPage, totalCount, onPageChange }: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span>Total de {totalCount} item(s)</span>
      
      <div className="flex items-center gap-2">
        <span>Página {pageIndex + 1} de {pages}</span>
        
        <Button onClick={() => onPageChange(0)} disabled={pageIndex === 0}>
          Primeira
        </Button>
        <Button onClick={() => onPageChange(pageIndex - 1)} disabled={pageIndex === 0}>
          Anterior
        </Button>
        <Button onClick={() => onPageChange(pageIndex + 1)} disabled={pages <= pageIndex + 1}>
          Próxima
        </Button>
        <Button onClick={() => onPageChange(pages - 1)} disabled={pages <= pageIndex + 1}>
          Última
        </Button>
      </div>
    </div>
  );
}
```

---

## Filtros e URL State

### Sincronização de Filtros com URL
```tsx
export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Leitura dos parâmetros da URL
  const orderId = searchParams.get('orderId') ?? '';
  const customerName = searchParams.get('customerName') ?? '';
  const status = searchParams.get('status') ?? 'all';

  function handleFilter({ orderId, customerName, status }: FilterSchema) {
    setSearchParams((state) => {
      // Adiciona ou remove parâmetros condicionalmente
      if (orderId) {
        state.set('orderId', orderId);
      } else {
        state.delete('orderId');
      }

      if (customerName) {
        state.set('customerName', customerName);
      } else {
        state.delete('customerName');
      }

      if (status) {
        state.set('status', status);
      } else {
        state.delete('status');
      }

      state.set('page', '1'); // Reset da paginação
      return state;
    });
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('orderId');
      state.delete('customerName');
      state.delete('status');
      state.set('page', '1');
      return state;
    });

    reset({ orderId: '', customerName: '', status: 'all' });
  }
}
```

### Transformação de Parâmetros URL
```tsx
// Conversão e validação de parâmetros
const pageIndex = z.coerce
  .number()
  .transform((page) => page - 1) // UI usa 1-based, API usa 0-based
  .parse(searchParams.get('page') ?? '1');
```

---

## Validação de Ambiente

### Schema de Validação com Zod
```tsx
const envSchema = z.object({
  VITE_API_URL: z.url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
});

export const env = envSchema.parse(import.meta.env);
```

---

## Componentes Reutilizáveis

### Componente de Status com Mapeamento
```tsx
export type OrderStatus = 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
};

export function OrderStatus({ status }: { status: OrderStatus }) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && <span className="h-2 w-2 rounded-full bg-slate-400" />}
      {status === 'canceled' && <span className="h-2 w-2 rounded-full bg-rose-500" />}
      {status === 'delivered' && <span className="h-2 w-2 rounded-full bg-emerald-500" />}
      {['processing', 'delivering'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-400" />
      )}
      
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
```

---

## Padrões de Código

### High Order Function Pattern
```tsx
// Padrão para handlers de formulário
<form onSubmit={handleSubmit(handleSignIn)}>
```

### Conditional Rendering Patterns
```tsx
// Renderização condicional com dados
{result && result.orders.map((order) => (
  <OrderTableRow key={order.orderId} order={order} />
))}

// Renderização condicional com loading states
{monthRevenue && (
  <>
    <span>{monthRevenue.receipt}</span>
    <p>{monthRevenue.diffFromLastMonth}%</p>
  </>
)}
```

### Error Handling Pattern
```tsx
try {
  await authenticate({ email: data.email });
  .success('Sucesso!');
} catch {
  toast.error('Erro!');
}
```

### Cleanup Pattern
```tsx
useEffect(() => {
  const interceptorId = api.interceptors.response.use(/* ... */);
  
  return () => {
    api.interceptors.response.eject(interceptorId);
  };
}, []);
```
