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
import * as topojson from 'topojson';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-2022-train_for_trade_ii_angola_components';

function AngolaMap() {
  const names = useMemo(() => ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 'Cuanza Norte', 'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malanje', 'Moxico', 'Namibe', 'Uíge', 'Zaire'], []);

  const [selectedArea, setselectedArea] = useState('Select a area of interest from the map above');
  const showData = useCallback((event) => {
    setselectedArea(names[event.target.id]);
  }, [names]);

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
        return d[1] - 20;
      })
      .append('xhtml:div')
      .append('xhtml:p')
      .html((d, i) => names[i]);
  }, [showData, names]);

  const loadMapData = useCallback(() => {
    // https://cartographyvectors.com/map/1412-angola-with-regions
    // https://observablehq.com/@saneef/fix-geojson
    d3.json('./assets/data/angola_map.topojson').then(data => {
      drawMap(data);
    });
  }, [drawMap]);

  useEffect(() => {
    loadMapData();
  }, [loadMapData]);

  return (
    <div className="app">
      <h2>Program reach per province</h2>
      <div className="map_container" />
      <div className="metadata"><h3>{selectedArea}</h3></div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default AngolaMap;
