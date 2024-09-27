import { MapPinLine, ShoppingCart } from "phosphor-react";

import logo from "./assets/logo-coffe-delivery.svg";
import main from "./assets/logo-main-coffe-delivery.svg";
// import background from "./assets/background-coffe-delivery.svg";

import cart from "./assets/main-content/cart.svg";
import box from "./assets/main-content/box.svg";
import timer from "./assets/main-content/timer.svg";
import coffe from "./assets/main-content/coffe.svg";

import expresstraditional from "./assets/products/coffe/express-traditional.png";

export function App() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div>
          <label>
            <ShoppingCart />
            Porto Alegre, RS
          </label>
          <nav>
            <MapPinLine />
          </nav>
        </div>
      </header>

      <main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div>
          <label>
            <img src={cart} alt="cart" />
            Compra simples e segura
          </label>
          <label>
            <img src={box} alt="box" />
            Embalagem mantém o café intacto
          </label>
          <label>
            <img src={timer} alt="timer" />
            Entrega rápida e rastreada
          </label>
          <label>
            <img src={coffe} alt="coffe" />O café chega fresquinho até você
          </label>
        </div>

        <img src={main} alt="main-logo"></img>

        <div>
          <h2>Nossos cafés</h2>

          <div>
            <img src={expresstraditional}></img>
            <span>TRADICIONAL</span>

            <div>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </div>

            <div>
              <label>R$ 9,90</label>
              <input />
              <button>
                <ShoppingCart />
              </button>
            </div>
          </div>

          <div>
            <img src={expresstraditional}></img>
            <span>TRADICIONAL</span>

            <div>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </div>

            <div>
              <label>R$ 9,90</label>
              <input />
              <button>
                <ShoppingCart />
              </button>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
