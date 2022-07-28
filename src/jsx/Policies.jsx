import React, { useEffect, useState } from 'react';
import '../styles/policies.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-train_for_trade_ii_angola_components';

function Policies() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData([{
      component_color: 'rgba(155, 56, 115, 1)',
      component_bgcolor: 'rgba(155, 56, 115, 0.3)',
      component_bordercolor: 'rgba(155, 56, 115, 0.8)',
      component_name: 'Commercial Diplomacy',
      percentage: 60,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Trade Policy Strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(238, 154, 59, 1)',
      component_bgcolor: 'rgba(238, 154, 59, 0.3)',
      component_bordercolor: 'rgba(238, 154, 59, 0.8)',
      component_name: 'Creative Industries',
      percentage: 60,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Creative Economy Strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(226, 75, 58, 1)',
      component_bgcolor: 'rgba(226, 75, 58, 0.3)',
      component_bordercolor: 'rgba(226, 75, 58, 0.8)',
      component_name: 'EMPRETEC',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'National Entrepreneurship Strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(96, 173, 208, 1)',
      component_bgcolor: 'rgba(96, 173, 208, 0.3)',
      component_bordercolor: 'rgba(96, 173, 208, 0.8)',
      component_name: 'Investment (IPR)',
      percentage: 10,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Institutional investment facilitation strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(96, 173, 208, 1)',
      component_bgcolor: 'rgba(96, 173, 208, 0.3)',
      component_bordercolor: 'rgba(96, 173, 208, 0.8)',
      component_name: 'Investment (IPR)',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Investment Policy Review of Angola',
      text_color: '#fff'
    }, {
      component_color: 'rgba(96, 173, 208, 1)',
      component_bgcolor: 'rgba(96, 173, 208, 0.3)',
      component_bordercolor: 'rgba(96, 173, 208, 0.8)',
      component_name: 'Investment (IPR)',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Review of International Investment Agreements',
      text_color: '#fff'
    }, {
      component_color: 'rgba(96, 173, 208, 1)',
      component_bgcolor: 'rgba(96, 173, 208, 0.3)',
      component_bordercolor: 'rgba(96, 173, 208, 0.8)',
      component_name: 'Investment (IPR)',
      percentage: 50,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Sustainable investment promotion strategy for agriculture',
      text_color: '#fff'
    }, {
      component_color: 'rgba(125, 174, 88, 1)',
      component_bgcolor: 'rgba(125, 174, 88, 0.3)',
      component_bordercolor: 'rgba(125, 174, 88, 0.8)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Fisheries Export strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(125, 174, 88, 1)',
      component_bgcolor: 'rgba(125, 174, 88, 0.3)',
      component_bordercolor: 'rgba(125, 174, 88, 0.8)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Honey policy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(125, 174, 88, 1)',
      component_bgcolor: 'rgba(125, 174, 88, 0.3)',
      component_bordercolor: 'rgba(125, 174, 88, 0.8)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Honey residue monitoring plans',
      text_color: '#fff'
    }, {
      component_color: 'rgba(15, 110, 157, 1)',
      component_bgcolor: 'rgba(15, 110, 157, 0.3)',
      component_bordercolor: 'rgba(15, 110, 157, 0.8)',
      component_name: 'Trade Facilitation',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'National Trade Facilitation Strategy',
      text_color: '#fff'
    }, {
      component_color: 'rgba(252, 213, 50, 1)',
      component_bgcolor: 'rgba(252, 213, 50, 0.3)',
      component_bordercolor: 'rgba(252, 213, 50, 0.8)',
      component_name: 'Transport & Logistics',
      percentage: 10,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Corridor review',
      text_color: '#000'
    }, {
      component_color: 'rgba(252, 213, 50, 1)',
      component_bgcolor: 'rgba(252, 213, 50, 0.3)',
      component_bordercolor: 'rgba(252, 213, 50, 0.8)',
      component_name: 'Transport & Logistics',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Public-Private Partnership Law',
      text_color: '#000'
    }, {
      component_color: 'rgba(252, 213, 50, 1)',
      component_bgcolor: 'rgba(252, 213, 50, 0.3)',
      component_bordercolor: 'rgba(252, 213, 50, 0.8)',
      component_name: 'Transport & Logistics',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Public-Private Partnership decree',
      text_color: '#000'
    }]);
  }, []);

  return (
    <div className="app">
      <h2>Policies</h2>
      <div className="policies_container">
        {
          data && data.map(el => (
            <div key={el.policy_name} className="policy_container">
              <div className="policy_content" style={{ backgroundColor: el.component_bgcolor, borderColor: el.component_bordercolor, boxShadow: `1px 1px 10px ${el.component_color}` }}>
                <h3>{el.policy_name}</h3>
                <p>{el.policy_desc}</p>
                <div className="policy_complete_container">
                  <h4>Status</h4>
                  <IsVisible once>
                    {(isVisible) => (
                      <div>
                        <div
                          className="bar"
                          style={(isVisible === true) ? {
                            backgroundColor: el.component_color,
                            color: el.text_color,
                            textShadow: `1px 1px 1px ${el.component_color}`,
                            width: `${el.percentage}%`
                          } : { width: 0 }}
                        >
                          <span className="value">{el.percentage}</span>
                          <span className="unit">%</span>
                        </div>
                      </div>
                    )}
                  </IsVisible>
                </div>
                <div className="component_container">
                  <h4>
                    <span className="component_indicator" style={{ backgroundColor: el.component_color }} />
                    <span className="component_label">Component</span>
                    <span className="component_name">{el.component_name}</span>
                  </h4>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Policies;
