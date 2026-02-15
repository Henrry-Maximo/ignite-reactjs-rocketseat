import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';
import camiseta3 from '../assets/camisetas/3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">

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