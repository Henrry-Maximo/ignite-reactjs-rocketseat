import { Coffee } from "phosphor-react";

export function CheckOut() {
  return (
    <div>
      <div>
        <h3>Complete seu pedido</h3>

        <section style={{ background: "#F3F2F2", margin: "2rem" }}>
          <div>
            <img src="" alt="location" />
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <input placeholder="90250-440" />
            </div>

            <div>
              <input placeholder="Rua João Daniel Martinelli" />
            </div>

            <div>
              <input placeholder="102" />
            </div>

            <div>
              <input placeholder="Complemento" />
            </div>
            <div>
              <input placeholder="Ferrapos" />
            </div>
            <div>
              <input placeholder="Porto Alegre" />
            </div>
            <div>
              <input placeholder="RS" />
            </div>
          </form>
        </section>

        <footer style={{ background: "#F3F2F2", margin: "2rem" }}>
          <div>
            <img src="" alt="price" />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div>
            <button>CARTÃO DE CRÉDITO</button>
            <button>CARTÃO DE DÉBITO</button>
            <button>DINHEIRO</button>
          </div>
        </footer>
      </div>

      <div>
        <h3>Cafés selecionados</h3>

        <aside style={{ background: "#F3F2F2", margin: "2rem" }}>
          <div>
            <Coffee />

            <div>
              <span>Expresso Traficional</span>
              <span>R$ 9,90</span>
            </div>

            <div>
              <input type="number"></input>
              <button>REMOVER</button>
            </div>
          </div>

          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>

            <button>CONFIRMAR</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
