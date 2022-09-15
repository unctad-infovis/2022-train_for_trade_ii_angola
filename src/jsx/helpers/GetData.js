import CSVtoJSON from './CSVtoJSON.js';

export const getData = () => fetch('./assets/data/train_for_trade_ii_angola - data.csv')
  .then(response => response.text())
  .then(body => CSVtoJSON(body));

export default getData;
