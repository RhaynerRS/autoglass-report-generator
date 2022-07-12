import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from './components/card';
import { NavBar } from './components/navbar';
import '@ds/core/src/assets/style.bundle.css'
import { useState } from 'react';
import { SideBar } from './components/sideBar';


function App() {

  const [isActive, setIsActive] = useState(false);

function openMenu() {
  setIsActive(current => !current);
}
  let data = require('./full_report.json')
  let suites=[]
  data.results.map(result=>result.suites.map(suite=>suites.push(suite)))
  return (
    <>
      <NavBar data={data.stats} menu={openMenu} active={isActive}/>
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
        {suites.map(suite=>{return <Card data={suite}/>})}
      </div>
      <footer class="footer-report"><div class="container"><p>©2022 Autoglass Report Generator</p></div></footer>
      <SideBar active={isActive}  menu={openMenu} data={suites}/>
    </>
  );
}

export default App;
