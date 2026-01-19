// API Interna de Internalização do JavaScript
export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency', // formatar como moeda
  currency: 'BRL' // tipo de moeda
});