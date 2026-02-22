import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string,
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { isFallback } = useRouter();
  // const router = useRouter(); // utilizado para rota interna

  // carregar produtos que não foram carregados pelo path
  if (isFallback) {
    return <p>Loading...</p>
  }

  // function handleBuyProduct() {
  //   console.log(product.defaultPriceId);
  // }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      // router.push('/checkout') // rota interna
      window.location.href = checkoutUrl; // rota externa
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);

      alert('Falha ao redirecionar ao checkout!');
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isCreatingCheckoutSession} onClick={handleBuyProduct}>
            Comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // buscar os produtos mais vendidos / mais acessados

  return {
    paths: [
      { params: { id: 'prod_TzBTxBCn8AXAUL' } }
    ], // criado estaticamente no momento da build (manter enxuto)
    fallback: true,
    // fallback: 'blocking' tela em branco até ter algo pra mostrar (experiência visual para o usuário)
  }
}

// getStaticProps: GetStaticProps - depois de 1 hora, será atualizado o conteúdo
// - npm run build: gera todas as funções que são static (método)
// getServerSideProps: GetServerSideProps - 1 Milhão de requisições: será executado um milhão de vezes
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  // const productId = String(params.id);
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}