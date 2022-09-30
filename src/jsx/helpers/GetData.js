import CSVtoJSON from './CSVtoJSON.js';

export const getData = () => fetch((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-train_for_trade_ii_angola/assets/data/train_for_trade_ii_angola - data.csv' : './assets/data/train_for_trade_ii_angola - data.csv')
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.text();
  })
  .then(body => CSVtoJSON(body));

export default getData;
