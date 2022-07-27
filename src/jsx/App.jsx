import React, {
  useRef, useState, useEffect, useCallback
} from 'react';
import '../styles/styles.less';

// https://github.com/joshwnj/react-visibility-sensor
import VisibilitySensor from 'react-visibility-sensor';
// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

// Load helpers.
import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

const easingFn = (t, b, c, d) => {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
};

const appID = '#app-root-2022-train_for_trade_ii_angola';

let width = 0;
function App() {
  let hasStarted = false;
  let barsDrawn = false;

  const appRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    setBarWidth(Math.min(appRef.current.offsetWidth - 20 - 60), 300);
  }, []);

  useEffect(() => {
    width = barWidth;
  }, [barWidth]);

  const showTargets = () => {
    document.querySelector(`${appID} .targets_container`).style.opacity = 1;
    document.querySelector(`${appID} .public .bar.goal`).style.width = `${(500 / 1000) * width}px`;
    document.querySelector(`${appID} .public .bar.current`).style.width = `${(974 / 1000) * width}px`;

    document.querySelector(`${appID} .private .bar.goal`).style.width = `${(150 / 800) * width}px`;
    document.querySelector(`${appID} .private .bar.current`).style.width = `${(792 / 800) * width}px`;
    setTimeout(() => {
      document.querySelectorAll(`${appID} .change`).forEach(el => { el.style.opacity = 1; });
    }, 2000);
  };
  const handleWindowResize = useCallback(() => {
    setBarWidth(Math.min(appRef.current.offsetWidth - 20 - 60), 300);
    if (barsDrawn === true) {
      showTargets();
    }
  }, [barsDrawn]);

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
          <VisibilitySensor>
            {({ isVisible }) => (
              <span style={{ height: 71, display: 'inline-block', width: 182 }}>
                {(isVisible && hasStarted === false) ? <CountUp delay={1} end={2016} start={0} duration={3} useEasing easingFn={easingFn} onEnd={() => onCoutUpEnd()} onStart={onCoutUpStart} formattingFn={formatNr} /> : null}
              </span>
            )}
          </VisibilitySensor>
        </div>
        <div className="label">Trained people in total</div>
      </div>
      <div className="genders_container">
        <div className="gender_container">
          <div className="value">{parseInt('1423', 10).toLocaleString('en-EN')}</div>
          <div className="label">Male</div>
        </div>
        <div className="gender_container">
          <div className="value">{parseInt('593', 10).toLocaleString('en-EN')}</div>
          <div className="label">Female</div>
        </div>
      </div>
      <div className="targets_container">
        <div className="target_container public">
          <div className="title">Public sector</div>
          <div className="value_bar_wrapper">
            <div className="label">Goal</div>
            <div className="value">
              <div className="bar goal" data-width="500" />
              500 people
            </div>
          </div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value">
              <div className="bar current" data-width="974" />
              974 people
              <div className="change">+195%</div>
            </div>
          </div>
        </div>
        <div className="target_container private">
          <div className="title">Private sector</div>
          <div className="value_bar_wrapper">
            <div className="label">Goal</div>
            <div className="value">
              <div className="bar goal" data-width="150" />
              150
            </div>
          </div>
          <div className="value_bar_wrapper">
            <div className="label">Current</div>
            <div className="value">
              <div className="bar current" data-width="792" />
              792
              <div className="change">+528%</div>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
