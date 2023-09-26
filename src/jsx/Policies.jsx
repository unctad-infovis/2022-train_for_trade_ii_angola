import React, { useEffect, useState } from 'react';
import '../styles/policies.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// Load helpers.
import { getData } from './helpers/GetData.js';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-2022-train_for_trade_ii_angola_ii_angola_components';

function Policies() {
  const [data, setData] = useState(false);

  useEffect(() => {
    const percentages = [];
    getData().then(body => {
      for (let i = 9; i <= 22; i++) {
        percentages.push(body[i].value);
      }
      setData([{
        component_bgcolor: 'rgba(155, 56, 115, 0.3)',
        component_bordercolor: 'rgba(155, 56, 115, 0.8)',
        component_color: 'rgba(155, 56, 115, 1)',
        component_image: '2022-train_for_trade_ii_angola_commercial_diplomacy.png',
        component_name: 'Commercial Diplomacy',
        percentage: percentages[0],
        policy_desc: 'Support for Angola’s trade policy development and trade negotiations through the establishment of a robust analytical base, improved capacities to analyse the country’s economic fundaments and trade policy needs, as well as better negotiating skills.',
        policy_name: 'Trade policy strategy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(238, 154, 59, 0.3)',
        component_bordercolor: 'rgba(238, 154, 59, 0.8)',
        component_color: 'rgba(238, 154, 59, 1)',
        component_image: '2022-train_for_trade_ii_angola_creative_industries.png',
        component_name: 'Cultural and Creative Industries',
        percentage: percentages[1],
        policy_desc: 'Establishment of a robust analytical base to facilitate the assessment and development of cultural and creative industries in Angola.',
        policy_name: 'Cultural and creative industries strategy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(226, 75, 58, 0.3)',
        component_bordercolor: 'rgba(226, 75, 58, 0.8)',
        component_color: 'rgba(226, 75, 58, 1)',
        component_image: '2022-train_for_trade_ii_angola_empretec.png',
        component_name: 'EMPRETEC',
        percentage: percentages[2],
        policy_desc: 'Institutional and analytical support for the development of a national entrepreneurship policy for Working Group leads.',
        policy_name: 'National entrepreneurship strategy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(96, 173, 208, 0.3)',
        component_bordercolor: 'rgba(96, 173, 208, 0.8)',
        component_color: 'rgba(96, 173, 208, 1)',
        component_image: '2022-train_for_trade_ii_angola_investment.png',
        component_name: 'Investment (IPR)',
        percentage: percentages[3],
        policy_desc: 'Development of a guide to integrate sustainability and good governance to the SWF processes, and assistance to its practical application.',
        policy_name: 'Sustainability Strategy for the Sovereign Wealth Fund',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(96, 173, 208, 0.3)',
        component_bordercolor: 'rgba(96, 173, 208, 0.8)',
        component_color: 'rgba(96, 173, 208, 1)',
        component_image: '2022-train_for_trade_ii_angola_investment.png',
        component_name: 'Investment (IPR)',
        percentage: percentages[4],
        policy_desc: 'Support to promoting sustainable investment in agribusiness and development of an investment promotion strategy based on concrete tools and assistance in their utilization (pilot focus on the tropical fruit and fertilizer sectors).',
        policy_name: 'Sustainable investment promotion strategy for agriculture',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(96, 173, 208, 0.3)',
        component_bordercolor: 'rgba(96, 173, 208, 0.8)',
        component_color: 'rgba(96, 173, 208, 1)',
        component_image: '2022-train_for_trade_ii_angola_investment.png',
        component_name: 'Investment (IPR)',
        percentage: percentages[5],
        policy_desc: 'Comprehensive review of policies and legal frameworks relevant to investment in Angola, including detailed and concrete recommendations with a view to improving Angola’s business climate to attract sustainable investment.',
        policy_name: 'Investment policy review of Angola',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(96, 173, 208, 0.3)',
        component_bordercolor: 'rgba(96, 173, 208, 0.8)',
        component_color: 'rgba(96, 173, 208, 1)',
        component_image: '2022-train_for_trade_ii_angola_investment.png',
        component_name: 'Investment (IPR)',
        percentage: percentages[6],
        policy_desc: 'Comprehensive review of Angola\'s current bilateral and plurilateral investment treaties, including detailed and concrete recommendations with a view to improving future treaties and possibly reforming existing ones.',
        policy_name: 'Review of international investment agreements',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(125, 174, 88, 0.3)',
        component_bordercolor: 'rgba(125, 174, 88, 0.8)',
        component_color: 'rgba(125, 174, 88, 1)',
        component_image: '2022-train_for_trade_ii_angola_national_green_export_review.png',
        component_name: 'National Green Export Review (NGER)',
        percentage: percentages[7],
        policy_desc: 'Support to the development of a National Fisheries Export Strategy based on focused analysis of gaps and improvements needed to address them vis-à-vis target markets’ regulations and standards.',
        policy_name: 'Fisheries export strategy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(125, 174, 88, 0.3)',
        component_bordercolor: 'rgba(125, 174, 88, 0.8)',
        component_color: 'rgba(125, 174, 88, 1)',
        component_image: '2022-train_for_trade_ii_angola_national_green_export_review.png',
        component_name: 'National Green Export Review (NGER)',
        percentage: percentages[8],
        policy_desc: 'Development of a guide to assist in the drafting of the National Honey Policy.',
        policy_name: 'Honey policy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(125, 174, 88, 0.3)',
        component_bordercolor: 'rgba(125, 174, 88, 0.8)',
        component_color: 'rgba(125, 174, 88, 1)',
        component_image: '2022-train_for_trade_ii_angola_national_green_export_review.png',
        component_name: 'National Green Export Review (NGER)',
        percentage: percentages[9],
        policy_desc: 'Support national stakeholders with the elaboration of a National Honey Residues Monitoring Plan to enable Angola to meet international SPS and quality standards for honey and derived products.',
        policy_name: 'Honey residue monitoring plan',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(15, 110, 157, 0.3)',
        component_bordercolor: 'rgba(15, 110, 157, 0.8)',
        component_color: 'rgba(15, 110, 157, 1)',
        component_image: '2022-train_for_trade_ii_angola_trade_facilitation.png',
        component_name: 'Trade Facilitation',
        percentage: percentages[10],
        policy_desc: 'Support to the development of a National Trade Facilitation Strategy through a multiple-module training program, to promote more transparent and fluid trade.',
        policy_name: 'National trade facilitation strategy',
        text_color: '#fff'
      }, {
        component_bgcolor: 'rgba(252, 213, 50, 0.3)',
        component_bordercolor: 'rgba(252, 213, 50, 0.8)',
        component_color: 'rgba(252, 213, 50, 1)',
        component_image: '2022-train_for_trade_ii_angola_transport_logistics.png',
        component_name: 'Transport & Logistics',
        percentage: percentages[11],
        policy_desc: 'Comprehensive review assessing the performance of key transport corridors in Angola.',
        policy_name: 'Sustainable freight transport (SFT) rapid assessment',
        text_color: '#000'
      }, {
        component_bgcolor: 'rgba(252, 213, 50, 0.3)',
        component_bordercolor: 'rgba(252, 213, 50, 0.8)',
        component_color: 'rgba(252, 213, 50, 1)',
        component_image: '2022-train_for_trade_ii_angola_transport_logistics.png',
        component_name: 'Transport & Logistics',
        percentage: percentages[12],
        policy_desc: 'Technical support to the development of the PPP law.',
        policy_name: 'Public-private partnership (PPP) law',
        text_color: '#000'
      }, {
        component_bgcolor: 'rgba(252, 213, 50, 0.3)',
        component_bordercolor: 'rgba(252, 213, 50, 0.8)',
        component_color: 'rgba(252, 213, 50, 1)',
        component_image: '2022-train_for_trade_ii_angola_transport_logistics.png',
        component_name: 'Transport & Logistics',
        percentage: percentages[13],
        policy_desc: 'Technical support to the development of the PPP Decree.',
        policy_name: 'Public-private partnership (PPP) decree',
        text_color: '#000'
      }]);
    });
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
                    <span className="component_indicator"><img src={(window.location.href.includes('unctad.org')) ? `https://storage.unctad.org/2022-train_for_trade_ii_angola/assets/img/${el.component_image}` : `./assets/img/${el.component_image}`} alt="" /></span>
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
