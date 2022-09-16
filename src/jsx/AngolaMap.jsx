import React, {
  useEffect, useCallback, useMemo, useState
} from 'react';
import '../styles/angola_map.less';

// https://www.npmjs.com/package/react-is-visible
// import 'intersection-observer';
// import IsVisible from 'react-is-visible';

// https://d3js.org/
import * as d3 from 'd3';

// https://github.com/d3/d3-geo-projection/
import { geoRobinson } from 'd3-geo-projection';

// https://www.npmjs.com/package/topojson
import * as topojson from 'topojson-client';

// Load helpers.
import { getData } from './helpers/GetData.js';
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-train_for_trade_ii_angola_components';

function AngolaMap() {
  const names = useMemo(() => ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Kuando-Kubango', 'Kwanza-Norte', 'Kwanza-Sul', 'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda-Norte', 'Lunda-Sul', 'Malanje', 'Moxico', 'Namibe', 'Uíge', 'Zaire'], []);

  const componentMetaData = useMemo(() => ({
    'Commercial Diplomacy': {
      color: 'rgba(155, 56, 115, 1)',
      component_image: 'Train_for_trade_commercial_diplomacy.png'
    },
    'Creative Economy': {
      color: 'rgba(238, 154, 59, 1)',
      component_image: 'Train_for_trade_creative_industries.png'
    },
    EMPRETEC: {
      color: 'rgba(226, 75, 58, 1)',
      component_image: 'Train_for_trade_empretec.png'
    },
    'Investment (IPR)': {
      color: 'rgba(96, 173, 208, 1)',
      component_image: 'Train_for_trade_investment.png'
    },
    'National Green Export Review (NGER)': {
      color: 'rgba(125, 174, 88, 1)',
      component_image: 'Train_for_trade_national_green_export_review.png'
    },
    'Trade Facilitation': {
      color: 'rgba(15, 110, 157, 1)',
      component_image: 'Train_for_trade_trade_facilitation.png'
    },
    'Transport & Logistics': {
      color: 'rgba(252, 213, 50, 1)',
      component_image: 'Train_for_trade_transport_logistics.png'
    }
  }), []);

  const componentData = useMemo(() => [], []);

  useEffect(() => {
    getData().then(data => {
      for (let i = 23; i <= 40; i++) {
        componentData.push({
          components: data[i].components.split(';'),
          name: data[i].name,
          total_count: parseInt(data[i].value, 10)
        });
      }
    });
  }, [componentData]);

  const [selectedArea, setSelectedArea] = useState('');
  const [areaComponentCount, setAreaComponentCount] = useState('');
  const [areaComponents, setAreaComponents] = useState([]);
  const showData = useCallback((event) => {
    const area_name = names[event.target.id];
    setSelectedArea(area_name);
    setAreaComponentCount(componentData[event.target.id].total_count);
    setAreaComponents(componentData[event.target.id].components);
    document.querySelector('.hint').style.visibility = 'hidden';
    document.querySelector('.area_information_container').style.display = 'inline-block';
    document.querySelector('.area_information_container').style.opacity = 1;
  }, [names, componentData]);

  const hideData = () => {
    document.querySelector('.area_information_container').style.display = 'none';
    document.querySelector('.area_information_container').style.opacity = 0;
  };

  const drawMap = useCallback((data) => {
    const svg = d3.select('.map_container')
      .append('svg')
      .attr('height', 500)
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .classed('svg-content', true)
      .attr('width', 400);

    const map_data = topojson.feature(data, data.objects.collection);
    // https://observablehq.com/@d3/robinson
    const projection = geoRobinson().fitExtent([[0, 0], [400, 500]], map_data);
    const path = d3.geoPath().projection(projection);

    const centroids = map_data.features.map((feature) => path.centroid(feature));

    svg.append('g')
      .attr('class', 'countries')
      .selectAll('path')
      .data(map_data.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('id', (d, i) => i)
      .attr('class', 'path')
      // https://stackoverflow.com/questions/63693132/unable-to-get-node-datum-on-mouseover-in-d3-v6
      // .on('mouseover', (event, d) => {
      //   showData(event, d);
      // })
      .on('click', (event, d) => {
        showData(event, d);
      });

    svg.append('g')
      .attr('class', 'names')
      .selectAll('text')
      .data(centroids)
      .enter()
      .append('foreignObject')
      .attr('x', (d, i) => {
        if (names[i] === 'Luanda') {
          return d[0] - 60;
        } if (names[i] === 'Bengo') {
          return d[0] - 40;
        }
        return d[0] - 40;
      })
      .attr('y', (d, i) => {
        if (names[i] === 'Luanda') {
          return d[1] - 20;
        }
        if (names[i] === 'Bengo') {
          return d[1] - 50;
        }
        return d[1] - 25;
      })
      .attr('height', 50)
      .attr('width', 80)
      .append('xhtml:body')
      .attr('xmlns', 'http://www.w3.org/1999/xhtml')
      .append('xhtml:div')
      .html((d, i) => names[i]);
  }, [showData, names]);

  const loadMapData = useCallback(() => {
    // https://cartographyvectors.com/map/1412-angola-with-regions
    // https://observablehq.com/@saneef/fix-geojson
    d3.json((window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-train_for_trade_ii_angola/assets/data/angola_map.topojson' : './assets/data/angola_map.topojson').then(data => {
      drawMap(data);
    });
  }, [drawMap]);

  useEffect(() => {
    loadMapData();
  }, [loadMapData]);

  return (
    <div className="app">
      <h2>Programme reach per province</h2>
      <div className="map_container">
        <div className="area_information_container">
          <div className="area_information_content">
            <h3>{selectedArea}</h3>
            <div className="total_count" style={areaComponentCount > 0 ? { display: 'block' } : { display: 'none' }}>
              <span className="value">{areaComponentCount}</span>
              <span className="label">{areaComponentCount > 1 ? 'beneficaries' : 'beneficary'}</span>
            </div>
            <h4 className="label" style={areaComponents.length > 0 ? { display: 'block' } : { display: 'none' }}>Components</h4>
            <div className="components_container">
              {areaComponents.length > 0 && areaComponents.map((el) => (
                <div className="component_container" key={el}>
                  <span className="component_indicator"><img src={(window.location.href.includes('unctad.org')) ? `https://storage.unctad.org/2022-train_for_trade_ii_angola/assets/img/${componentMetaData[el].component_image}` : `./assets/img/${componentMetaData[el].component_image}`} alt="" /></span>
                  <span className="component_name">{el}</span>

                </div>
              ))}
            </div>
            <div className="close_container"><button type="button" onClick={() => hideData()}>Close</button></div>
          </div>
        </div>
      </div>
      <h3 className="hint">Select province of interest from the map above</h3>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default AngolaMap;
