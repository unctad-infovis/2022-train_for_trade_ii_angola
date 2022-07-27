import React from 'react';

import { createRoot } from 'react-dom/client';

import App from './jsx/App.jsx';

const element = document.createElement('div');
element.setAttribute('id', 'app-root-2022-train_for_trade_ii_angola');
document.getElementsByClassName('col-sm-3')[0].prepend(element);

const container = document.getElementById('app-root-2022-train_for_trade_ii_angola');
const root = createRoot(container);
root.render(<App />);
