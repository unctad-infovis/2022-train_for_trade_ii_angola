import React from 'react';

import { createRoot } from 'react-dom/client';

import SidePanel from './jsx/SidePanel.jsx';
import Policies from './jsx/Policies.jsx';
import AngolaMap from './jsx/AngolaMap.jsx';

const side_panel = document.createElement('div');
side_panel.setAttribute('id', 'app-root-2022-train_for_trade_ii_angola_side_panel');
try {
  document.getElementsByClassName('sidebar-content--light-blue')[0].getElementsByClassName('block-header')[0].prepend(side_panel);
  const container_side_panel = document.getElementById('app-root-2022-train_for_trade_ii_angola_side_panel');
  if (container_side_panel) {
    const root_side_panel = createRoot(container_side_panel);
    root_side_panel.render(<SidePanel />);
  }
} catch {
  console.log('error');
}

const container_policies = document.getElementById('app-root-2022-train_for_trade_ii_angola_policies');
if (container_policies) {
  const root_policies = createRoot(container_policies);
  root_policies.render(<Policies />);
}

const container_angola_map = document.getElementById('app-root-2022-train_for_trade_ii_angola_map');
if (container_angola_map) {
  const root_angola_map = createRoot(container_angola_map);
  root_angola_map.render(<AngolaMap />);
}
