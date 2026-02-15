import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';
import camiseta3 from '../assets/camisetas/3.png';

import 'keen-slider/keen-slider.min.css';
import { useEffect, useState } from "react";

export default function Home(props) {
  // const [list, setList] = useState<number[]>([]);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  // useEffect(() => {
  //   setTimeout(() => {
  //     setList([1, 2, 3])
  //   }, 2000);
  // }, [])

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {/* <pre>{JSON.stringify(list)}</pre> */}
      <pre>{JSON.stringify(props.list)}</pre>

      <Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="Uma camisa bonita e suave, em cores fortes." />

        <footer>
          <strong>Camista X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
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
      </Product>
      
    </HomeContainer>
  )
};

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("rodou");

  return {
    props: {
      list: [1, 2, 3]
    }
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