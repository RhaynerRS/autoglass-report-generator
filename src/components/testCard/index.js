import './index.css';
import Accordion from 'react-bootstrap/Accordion'
import { TestContext } from '../context';

export function TestCard(props) {
    return (
        <div class="test-container">
            <Accordion id="inner-accordion" >
                <Accordion.Item eventKey={props.data.uuid}>
                    <Accordion.Header>{props.data.title}</Accordion.Header>
                    <Accordion.Body>
                        <pre><code>{props.data.code}</code></pre>
                        <TestContext context={props.data.context} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}