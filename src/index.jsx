import React from 'react';
import { render } from 'react-dom';
import PieChart from './PieChartsComponent.jsx'


class App extends React.Component {
  render() {
    return (
      <div>
        <p>welcome to react</p>

        <PieChart />
      </div>
    )

  }
}

render(<App />, document.getElementById('app'));