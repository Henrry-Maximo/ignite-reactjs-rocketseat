import { render } from '@testing-library/react';

import { OrderStatus } from './order-status';

// test('1 + 1 equals 2', () => {
//   expect(1 + 1).toEqual(2);
// });

describe('Order Status', () => {
  // it('should display the right text based on order status', () => {
  //   const wrapper = render(<OrderStatus status="pending" />);

  //   wrapper.debug(); // display the html generate by render

  //   const statusText = wrapper.getByText('Pendente');
  //   const badgeElement = wrapper.getByTestId('badge');

  //   console.log(badgeElement.outerHTML);
  //   console.log(statusText.outerHTML); // display the element find

  //   expect(statusText).toBeInTheDocument();
  //   expect(badgeElement).toHaveClass('bg-slate-400');
  // });

  it('should display the right text when order status is pending', () => {
    /* Pending */
    const wrapper = render(<OrderStatus status="pending" />);

    const statusText = wrapper.getByText('Pendente');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-slate-400');
  });

  it('should display the right text when order status is canceled', () => {
    /* Canceled */
    const wrapper = render(<OrderStatus status="canceled" />);

    const statusText = wrapper.getByText('Cancelado');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-rose-500');
  });

  it('should display the right text when order status is delivered', () => {
    /* Entregue */
    const wrapper = render(<OrderStatus status="delivered" />);

    const statusText = wrapper.getByText('Entregue');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-emerald-500');
  });

  it('should display the right text when order status is delivering', () => {
    /* Em Entrega */
    const wrapper = render(<OrderStatus status="delivering" />);

    const statusText = wrapper.getByText('Em entrega');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-400');
  });

  it('should display the right text when order status is processing', () => {
    /* Processing */
    const wrapper = render(<OrderStatus status="processing" />);

    const statusText = wrapper.getByText('Em preparo');
    const badgeElement = wrapper.getByTestId('badge');

    expect(statusText).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-amber-400');
  });
});

/*
test('should ', () => {})

*/
