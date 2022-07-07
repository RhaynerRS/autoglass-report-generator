import './index.css';
import { faBars, faClock, faClipboard, faNewspaper, faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function NavBar(props) {
    console.log(props)
    return (
        <div id="report">
            <div id="navbar">
                <div class="item" id="navItems" >
                    <FontAwesomeIcon icon={faBars}/>
                    <p class="navText">GERA-EXCELL</p>
                </div>
                <div id="navItems">
                    <div class="item">
                        <FontAwesomeIcon icon={faClock}/>
                        <p class="navText">{props.data.duration}</p>
                    </div>
                    <div class="item">
                        <FontAwesomeIcon icon={faNewspaper}/>
                        <p class="navText">{props.data.tests}</p>
                    </div>
                    <div class="item" >
                        <FontAwesomeIcon icon={faClipboard}/>
                        <p class="navText">{props.data.suites}</p>
                    </div>
                    <div class="item" title="Passed">
                        <FontAwesomeIcon icon={faCircleCheck}/>
                        <p class="navText">{props.data.passes}</p>
                    </div>
                    <div class="item" title="Failled">
                        <FontAwesomeIcon icon={faCircleXmark} />
                        <p class="navText">{props.data.failures}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}