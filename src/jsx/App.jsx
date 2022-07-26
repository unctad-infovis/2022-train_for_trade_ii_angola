import React, { /* useState, */useEffect } from 'react';
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

function App() {
  useEffect(() => {
  }, []);

  const showGenders = () => {
    document.querySelector('.genders_container').style.opacity = 1;
  };
  const showTargets = () => {
    document.querySelector('.targets_container').style.opacity = 1;
    document.querySelector('.public .bar.goal').style.width = `${(500 / 1000) * 240}px`;
    document.querySelector('.public .bar.current').style.width = `${(974 / 1000) * 240}px`;

    document.querySelector('.private .bar.goal').style.width = `${(150 / 800) * 240}px`;
    document.querySelector('.private .bar.current').style.width = `${(792 / 800) * 240}px`;
    setTimeout(() => {
      document.querySelectorAll('.change').forEach(el => { el.style.opacity = 1; });
    }, 2000);
  };

  const onCoutUpEnd = () => {
    setTimeout(() => {
      showGenders();
    }, 200);
    setTimeout(() => {
      showTargets();
    }, 1500);
  };

  return (
    <div className="app">
      <div className="total_container">
        <div className="value">
          <VisibilitySensor>
            {({ isVisible }) => (
              <span style={{ height: 71, display: 'inline-block', width: 182 }}>
                {isVisible ? <CountUp delay={1} end={2016} start={0} duration={3} useEasing easingFn={easingFn} onEnd={onCoutUpEnd} formattingFn={formatNr} /> : null}
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
          <div>
            <div className="label">Goal</div>
            <div className="value">
              <div className="bar goal" data-width="500" />
              500 people
            </div>
          </div>
          <div>
            <div className="label">Current</div>
            <div className="value">
              <div className="bar current" data-width="500" />
              974 people
              <div className="change">+195%</div>
            </div>
          </div>
        </div>
        <div className="target_container private">
          <div className="title">Private sector</div>
          <div>
            <div className="label">Goal</div>
            <div className="value">
              <div className="bar goal" data-width="500" />
              150
            </div>
          </div>
          <div>
            <div className="label">Current</div>
            <div className="value">
              <div className="bar current" data-width="500" />
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
