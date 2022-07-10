import './index.css';
import Accordion from 'react-bootstrap/Accordion'
import { TestCard } from '../testCard';

export function Card(props) {
    return (
        <Accordion defaultActiveKey={props.data.uuid}>
            <Accordion.Item eventKey={props.data.uuid}>
                <Accordion.Header>
                    <p class="font-size-h3 titulo-card">{props.data.title}</p>
                </Accordion.Header>
                <Accordion.Body class="suite-body">
                    {props.data.tests.map(test => { return <TestCard data={test} /> })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}