import './index.css';
import Accordion from 'react-bootstrap/Accordion'
import { TestContext } from '../context';
import React from 'react';
import {IcCheck, IcError, IcSkipped} from '../icons/index'

export function TestCard(props) {
    return (
        <div class="test-container" id={props.data.uuid}>
            <Accordion id="inner-accordion"  >
                <Accordion.Item eventKey={props.data.uuid} >
                    <Accordion.Header >{props.data.state=="passed"?<IcCheck />:(props.data.state=="failed"?<IcError/>:<IcSkipped />)}<a style={{marginLeft:"10px"}}>{props.data.title}</a></Accordion.Header>
                    <Accordion.Body >
                        {props.data.err.message!==undefined?<pre class="errorMsg"><code>{props.data.err.message}</code></pre>:null}
                        <pre ><code>{props.data.code}</code></pre>
                        <TestContext context={props.data.context} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}