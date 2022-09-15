import CSVtoJSON from './CSVtoJSON.js';

export const getData = () => fetch((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-train_for_trade_ii_angola/assets/data/train_for_trade_ii_angola - data.csv' : './assets/data/train_for_trade_ii_angola - data.csv')
  .then(response => response.text())
  .then(body => CSVtoJSON(body));

export default getData;
