import React, {
  /* useRef, useCallback, */ useEffect, useState
} from 'react';
import '../styles/components.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-train_for_trade_ii_angola_components';

function Components() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setData([{
      color: 'rgba(252, 213, 50, 0.5)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Honey policy'
    }, {
      color: 'rgba(252, 213, 50, 0.5)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Honey residue monitoring plans'
    }, {
      color: 'rgba(252, 213, 50, 0.5)',
      component_name: 'National Green Export Review (NGER)',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Fisheries Export strategy'
    }, {
      color: 'rgba(238, 154, 59, 0.5)',
      component_name: 'Trade Facilitation',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'National Trade Facilitation Strategy'
    }, {
      color: 'rgba(226 ,75, 58, 0.5)',
      component_name: 'Transport & Logistics',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Public-Private Partnership Law'
    }, {
      color: 'rgba(226 ,75, 58, 0.5)',
      component_name: 'Transport & Logistics',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Public-Private Partnership decree'
    }, {
      color: 'rgba(226 ,75, 58, 0.5)',
      component_name: 'Transport & Logistics',
      percentage: 10,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Corridor review'
    }, {
      color: 'rgba(155, 56, 115, 0.5)',
      component_name: 'Investment (IPR)',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Invesment Policy Review of Angola'
    }, {
      color: 'rgba(155, 56, 115, 0.5)',
      component_name: 'Investment (IPR)',
      percentage: 100,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Review of International Investment Agreements'
    }, {
      color: 'rgba(155, 56, 115, 0.5)',
      component_name: 'Investment (IPR)',
      percentage: 50,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Sustainable investment promotion strategy for agriculture'
    }, {
      color: 'rgba(155, 56, 115, 0.5)',
      component_name: 'Investment (IPR)',
      percentage: 10,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Institutional investment facilitation strategy'
    }, {
      color: 'rgba(15, 110, 157, 0.5)',
      component_name: 'EMPRETEC',
      percentage: 40,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'National Entrepreneurship Strategy'
    }, {
      color: 'rgba(96, 173, 208, 0.5)',
      component_name: 'Commercial Diplomacy',
      percentage: 60,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Trade Policy Strategy'
    }, {
      color: 'rgba(125, 174, 88, 0.5)',
      component_name: 'Creative Industries',
      percentage: 60,
      policy_desc: 'Short description of the policy so people understand quickly what it is about',
      policy_name: 'Creative Economy Strategy'
    }]);
  }, []);

  return (
    <div className="app">
      <h2>Policies</h2>
      <div className="policies_container">
        {
          data && data.map(el => (
            <div key={el.policy_name} className="policy_container">
              <div className="policy_content" style={{ backgroundColor: el.color, boxShadow: `2px 2px 6px ${el.color}` }}>
                <h3>{el.policy_name}</h3>
                <p>{el.policy_desc}</p>
                <div className="policy_complete_container">
                  <h4>Status</h4>
                  <IsVisible once>
                    {(isVisible) => (
                      <div>
                        <div className="bar" style={(isVisible === true) ? { width: `${el.percentage}%` } : { width: 0 }}>
                          <span className="value">{el.percentage}</span>
                          <span className="unit">%</span>
                        </div>
                      </div>
                    )}
                  </IsVisible>
                </div>
                <div className="component_container">
                  <h4>
                    <span className="component_label">Component</span>
                    <span className="component_name">{el.policy_name}</span>
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

export default Components;
