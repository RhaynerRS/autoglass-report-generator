import './index.css';
import Accordion from 'react-bootstrap/Accordion'
import { TestContext } from '../context';
import React from 'react';

export function TestCard(props) {
    console.log(props.data.err)
    return (
        <div class="test-container" id={props.data.uuid}>
            <Accordion id="inner-accordion"  >
                <Accordion.Item eventKey={props.data.uuid} >
                    <Accordion.Header >{props.data.title}</Accordion.Header>
                    <Accordion.Body >
                        {props.data.err.message!==undefined?<pre ><code>{props.data.err.message}</code></pre>:null}
                        <pre ><code>{props.data.code}</code></pre>
                        <TestContext context={props.data.context} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}