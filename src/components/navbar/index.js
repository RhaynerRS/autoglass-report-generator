import './index.css';
import { faBars, faClock, faClipboard, faNewspaper, faCircleCheck, faCircleXmark, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IcBars, IcClock, IcClipboard } from '../icons/index'
import prettyMs from 'pretty-ms';
import { useState } from 'react';

export function NavBar(props) {
    return (
        <div id="report">
            <div id="navbar">
                <div class="item" id="navItems" >
                    <i onClick={props.menu} id="bars" class={props.active ? "opened bars" : "bars"} ></i>
                    <p class="navText title">GERA-EXCELL</p>
                </div>
                <div id="navItems">
                    <div class="item" title="Duração">
                        <FontAwesomeIcon icon={faClock} />
                        <p class="navText">{prettyMs(props.data.duration, { unitCount: 3, })}</p>
                    </div>
                    <div class="item" title="Testes">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <p class="navText">{props.data.tests}</p>
                    </div>
                    <div class="item" title="Suites">
                        <FontAwesomeIcon icon={faClipboard} />
                        <p class="navText">{props.data.suites}</p>
                    </div>
                    <div class="item" title="Sucessos">
                        <FontAwesomeIcon icon={faCircleCheck} />
                        <p class="navText">{props.data.passes}</p>
                    </div>
                    <div class="item" title="Falhas">
                        <FontAwesomeIcon icon={faCircleXmark} />
                        <p class="navText">{props.data.failures}</p>
                    </div>
                    {props.data.skipped > 0 ? <div class="item" title="Não Executados">
                        <FontAwesomeIcon icon={faCircleStop} />
                        <p class="navText">{props.data.skipped}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}