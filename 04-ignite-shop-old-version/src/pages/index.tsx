import { GetStaticProps } from "next";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';
import camiseta3 from '../assets/camisetas/3.png';

import 'keen-slider/keen-slider.min.css';
import Stripe from "stripe";

interface HomeProps {
  products: {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
  }[]
}


export default function Home({ products }: HomeProps) {
  // const [list, setList] = useState<number[]>([]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });
  console.log(products);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([1, 2, 3])
  //   }, 2000);
  // }, [])

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {/* <pre>{JSON.stringify(list)}</pre> */}
      {/* <pre>{JSON.stringify(products)}</pre> */}

      {
        products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="Uma camisa bonita e suave, em cores fortes." />

              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          )
        })
      }

      {/* <Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="Uma camisa bonita e suave, em cores fortes." />

        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="Uma camisa bonita e suave, em cores fortes." />

        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="Uma camisa bonita e suave, em cores fortes." />

        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product> */}

    </HomeContainer>
  )
};

// getServerSideProps -> getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  // console.log(response.data);
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  });

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // console.log("rodou");

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas - criação das páginas estáticas
  }
}

/* 
* File-system Routing: Roteamento baseado em arquivos físicos
* Encontrar produto para exibição: via parâmetro na URL - ...3000/product/1

- Botão de exemplo
const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: 8,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }

});
*/