import React, {
  useRef, useState, useEffect, useCallback
} from 'react';
import '../styles/side_panel.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';
// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

// Load helpers.
import { getData } from './helpers/GetData.js';
import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

const appID = '#app-root-2022-train_for_trade_ii_angola_side_panel';

let width = 0;

function SidePanel() {
  let hasStarted = false;
  let barsDrawn = false;

  const appRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [publicCount, setPublicCount] = useState(0);
  const [privateCount, setPrivateCount] = useState(0);
  const [academiaCount, setAcademiaCount] = useState(0);
  const [ngoCount, setNGOCount] = useState(0);
  const [updated, setUpdated] = useState('');

  const defineCurrentAppWidth = () => Math.min(appRef.current.offsetWidth, 300) - 70;

  const easingFn = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  const publicTargetCount = 500;
  const privateTargetCount = 150;

  useEffect(() => {
    setBarWidth(defineCurrentAppWidth());
    getData().then(data => {
      const d = new Date(data[42].value);
      setMaleCount(parseInt(data[0].value, 10));
      setFemaleCount(parseInt(data[1].value, 10));
      setPublicCount(parseInt(data[3].value, 10));
      setPrivateCount(parseInt(data[4].value, 10));
      setAcademiaCount(parseInt(data[5].value, 10));
      setNGOCount(parseInt(data[6].value, 10));
      setUpdated(d.toDateString());
    });
  }, []);

  useEffect(() => {
    width = barWidth;
  }, [barWidth]);

  const showTargets = useCallback(() => {
    const barMax = Math.ceil(Math.max(publicCount, privateCount, academiaCount, ngoCount) / 10) * 10;
    document.querySelector(`${appID} .targets_container`).style.opacity = 1;

    document.querySelector(`${appID} .public .bar.goal`).style.width = `${(publicTargetCount / barMax) * width}px`;
    document.querySelector(`${appID} .public .bar.current`).style.width = `${(publicCount / barMax) * width}px`;

    document.querySelector(`${appID} .private .bar.goal`).style.width = `${(privateTargetCount / barMax) * width}px`;
    document.querySelector(`${appID} .private .bar.current`).style.width = `${(privateCount / barMax) * width}px`;

    document.querySelector(`${appID} .education .bar.current`).style.width = `${(academiaCount / barMax) * width}px`;

    document.querySelector(`${appID} .ngo .bar.current`).style.width = `${(ngoCount / barMax) * width}px`;

    if (barWidth > 180) {
      setTimeout(() => {
        document.querySelectorAll(`${appID} .change`).forEach(el => { el.style.opacity = 1; });
      }, 2000);
    }
  }, [privateCount, publicCount, academiaCount, ngoCount, barWidth]);

  const handleWindowResize = useCallback(() => {
    setBarWidth(defineCurrentAppWidth());
    if (barsDrawn === true) {
      showTargets();
    }
  }, [barsDrawn, showTargets]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  const showGenders = () => {
    document.querySelector(`${appID} .genders_container`).style.opacity = 1;
  };

  const onCoutUpEnd = () => {
    setTimeout(() => {
      showGenders();
    }, 200);
    setTimeout(() => {
      barsDrawn = true;
      showTargets();
    }, 1500);
  };

  const onCoutUpStart = () => {
    hasStarted = true;
  };

  return (
    <div className="app" ref={appRef}>
      <div className="total_container">
        <div className="value">
          <IsVisible once>
            {(isVisible) => (
              <div style={{ height: 55, display: 'inline-block', width: 182 }}>
                {(isVisible && hasStarted === false && femaleCount > 0) ? <CountUp delay={1} end={(femaleCount + maleCount)} start={0} duration={3} useEasing easingFn={easingFn} onEnd={() => onCoutUpEnd()} onStart={onCoutUpStart} formattingFn={formatNr} /> : null}
              </div>
            )}
          </IsVisible>
        </div>
        <div className="label">Trained people in total</div>
      </div>
      <div className="genders_container">
        <div className="gender_container">
          <span className="value">{maleCount.toLocaleString('en-EN')}</span>
          <span className="label">Male</span>
        </div>
        <div className="gender_container">
          <span className="value">{femaleCount.toLocaleString('en-EN')}</span>
          <span className="label">Female</span>
        </div>
      </div>
      <div className="targets_container">
        <div className="target_container public">
          <div className="title">Public sector</div>
          <div className="value_bar_wrapper">
            <div className="label">Goal</div>
            <div className="value goal">
              <div className="bar goal" data-width={publicTargetCount} />
              {publicTargetCount}
              {' '}
              <span className="value_meta">people</span>
            </div>
          </div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value current">
              <div className="bar current" data-width={publicCount}>
                <div className="change">
                  +
                  {parseInt((publicCount / publicTargetCount) * 100, 10)}
                  <span className="change_unit">%</span>
                </div>
              </div>
              {publicCount}
              {' '}
              <span className="value_meta">people</span>
            </div>
          </div>
        </div>
        <div className="target_container private">
          <div className="title">Private sector</div>
          <div className="value_bar_wrapper">
            <div className="label">Goal</div>
            <div className="value goal">
              <div className="bar goal" data-width={privateTargetCount} />
              {privateTargetCount}
            </div>
          </div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value current">
              <div className="bar current" data-width={privateCount}>
                <div className="change">
                  +
                  {parseInt((privateCount / privateTargetCount) * 100, 10)}
                  <span className="change_unit">%</span>
                </div>
              </div>
              {privateCount}
            </div>
          </div>
        </div>
        <div className="target_container education">
          <div className="title">Academia</div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value current">
              <div className="bar current" data-width={academiaCount} />
              {academiaCount}
            </div>
          </div>
        </div>
        <div className="target_container ngo">
          <div className="title">NGO</div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value current">
              <div className="bar current" data-width={ngoCount} />
              {ngoCount}
            </div>
          </div>
        </div>
      </div>
      <div className="updated">
        <span className="label">Data updated:</span>
        {' '}
        <span className="value">{updated}</span>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default SidePanel;
