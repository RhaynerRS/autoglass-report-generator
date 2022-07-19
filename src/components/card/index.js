import './index.css';
import Accordion from 'react-bootstrap/Accordion'
import { TestCard } from '../testCard';
import { faBars, faClock, faClipboard, faNewspaper, faCheck, faX, faSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import prettyMs from 'pretty-ms';

export function Card(props) {
    let tests=[]
    props.data.tests.map(test=>props.status!==null?(test.state==props.status?tests.push(test):null):tests.push(test))
    return (
        <>
            {tests.length!==0?        
            <Accordion defaultActiveKey={props.data.uuid} id={props.data.uuid}>
                <Accordion.Item eventKey={props.data.uuid}>
                    <Accordion.Header>
                        <div>
                            <p class="font-size-h3 titulo-card">{props.data.title}</p>
                            <div class="cardInfos">
                                <a class="cardItem"><FontAwesomeIcon icon={faClock} /><p class="cardText">{prettyMs(props.data.duration, { unitCount: 3, })}</p></a>
                                <a class="cardItem"><FontAwesomeIcon icon={faClipboard} /><p class="cardText">{props.data.tests.length}</p></a>   
                                {props.data.passes.length>0?<a class="cardItem"><FontAwesomeIcon icon={faCheck} /><p class="cardText">{props.data.passes.length}</p></a>:null}
                                {props.data.failures.length>0?<a class="cardItem"><FontAwesomeIcon icon={faX} /><p class="cardText">{props.data.failures.length}</p></a>:null} 
                                {props.data.skipped.length>0?<a class="cardItem"><FontAwesomeIcon icon={faSquare} /><p class="cardText">{props.data.skipped.length}</p></a>:null} 
                            </div>
                        </div>
                    </Accordion.Header>
                    <Accordion.Body class="suite-body">
                        {props.data.tests.map(test => { return props.status!==null?(test.state==props.status?<TestCard data={test} />:null):<TestCard data={test} />})}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            :
            null}
        </>
    )
}