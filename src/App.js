import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './components/card';
import { NavBar } from './components/navbar';

function App() {
  let data = require('./full_report.json')
  console.log(data)
  return (
    <>
      <NavBar data={data.stats} />
      <div id="details" class="details container">
        {data.results[0].suites[0].tests.map(test=>{return <Card  data={test}/>})}
      </div>
    </>
  );
}

export default App;
