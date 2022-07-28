import React from 'react';

import { createRoot } from 'react-dom/client';

import SidePanel from './jsx/SidePanel.jsx';
import Policies from './jsx/Policies.jsx';

const side_panel = document.createElement('div');
side_panel.setAttribute('id', 'app-root-2022-train_for_trade_ii_angola_side_panel');
document.getElementsByClassName('col-sm-3')[0].prepend(side_panel);

const container_side_panel = document.getElementById('app-root-2022-train_for_trade_ii_angola_side_panel');
const root_side_panel = createRoot(container_side_panel);
root_side_panel.render(<SidePanel />);

const container_components = document.getElementById('app-root-2022-train_for_trade_ii_angola_components');
const root_components = createRoot(container_components);
root_components.render(<Policies />);
