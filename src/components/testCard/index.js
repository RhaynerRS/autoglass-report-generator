import './index.css';
import Accordion from 'react-bootstrap/Accordion'

export function TestCard(props) {
    return (
        <div class="test-container">
            <Accordion id="inner-accordion" >
                <Accordion.Item eventKey={props.data.uuid}>
                    <Accordion.Header>{props.data.title}</Accordion.Header>
                    <Accordion.Body>
                        <code>{props.data.code}</code>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}