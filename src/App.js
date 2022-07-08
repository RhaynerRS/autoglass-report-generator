import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './components/card';
import { NavBar } from './components/navbar';
import '@ds/core/src/assets/style.bundle.css'

function App() {
  let data = require('./full_report.json')
  console.log(data)
  return (
    <>
      <NavBar data={data.stats} />
      <div id="details" class="details container">
      <div class="card card-custom gutter-b">
            <div class="card-body d-flex align-items-center py-5 py-lg-10">
                <div class="d-flex flex-center position-relative ml-5 mr-15 ml-lg-9 mr-lg-15">

                </div>
                <div class="m-0 text-dark-50 font-weight-bold font-size-lg">O Design System utiliza o componente de 
                <code>Card do Bootstrap</code>para criar accordions. 
                <br />Para mais informações, acesse: 
                <a class="font-weight-bold" href="https://getbootstrap.com/docs/4.6/components/collapse/#accordion-example" target="_blank">Documentação</a>.</div>
            </div>
        </div>
        {data.results[0].suites.map(suite=>{return <Card  data={suite}/>})}
      </div>
    </>
  );
}

export default App;
