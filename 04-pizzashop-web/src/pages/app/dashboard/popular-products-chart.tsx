import { useQuery } from '@tanstack/react-query';
import { BarChart } from 'lucide-react';
import { Pie, PieChart, ResponsiveContainer, Sector } from 'recharts';
import colors from 'tailwindcss/colors';

import { getPopularProducts } from '@/api/get-popular-products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { product: 'Pizza Pepperoni', amount: 40 },
  { product: 'Mussarela', amount: 30 },
  { product: 'Marguerita', amount: 50 },
  { product: '4 Queijos', amount: 16 },
  { product: 'Frango frito', amount: 26 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryFn: getPopularProducts,
    queryKey: ['metrics', 'popular-products'],
  });

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        {popularProducts && (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart data={data} style={{ fontSize: 12 }}>
              <Pie
                data={popularProducts}
                dataKey="amount"
                nameKey="product"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                strokeWidth={8}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle = 0,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = 12 + innerRadius + (outerRadius - innerRadius);
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {popularProducts[index].product.length > 12
                        ? popularProducts[index].product
                            .substring(0, 12)
                            .concat('...')
                        : popularProducts[index].product}{' '}
                      ({value})
                    </text>
                  );
                }}
                shape={(props) => {
                  const index = props.index;
                  return (
                    <Sector
                      {...props}
                      fill={COLORS[index % COLORS.length]}
                      className="stroke-background hover:opacity-80"
                    />
                  );
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
