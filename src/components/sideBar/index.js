import React, { useState } from 'react';
import './index.css';
import { ReactComponent as Logo } from '../../assets/media/logo-Autoglass-RGB.svg';
import { faBars, faClock, faClipboard, faNewspaper, faCircleCheck, faCircleXmark, faCircleStop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IcBars, IcClock, IcClipboard,IcCheck, IcError } from '../icons/index'
import { scroller } from "react-scroll";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export function SideBar(props) {
    let tests = []
    props.data.map(suite => suite.tests.map(test => tests.push(test)))
    const refs = tests.reduce((acc, value) => {
        acc[value.uuid] = React.createRef();
        return acc;
    }, {});

    function scrollToElement(id){
        scroller.scrollTo(id, {
            duration: 0,
            offset: -150,
            delay: 0,
            smooth: "false",
        });
    }

    return (
        <>
            <div class={props.active ? "sidebar" : "sidebar collapsed"}  >
                <div class="kt-brand" s>
                    <a style={props.active ? { display: 'block' } : { display: 'none' }}><Logo style={{ width: 72, paddingTop: 10 }} /></a>
                    <i onClick={props.menu} id="bars" class={props.active ? "opened bars-menu" : "bars-menu"} ><svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="26px" height="26px" viewBox="0 0 26 26" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M22 11.5C22 12.3284 21.3284 13 20.5 13H3.5C2.6716 13 2 12.3284 2 11.5C2 10.6716 2.6716 10 3.5 10H20.5C21.3284 10 22 10.6716 22 11.5Z" fill="#b5b5c3"></path><path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17H3.5C2.6716 17 2 17.6716 2 18.5C2 19.3284 2.6716 20 3.5 20H14.5ZM8.5 6C9.3284 6 10 5.32843 10 4.5C10 3.67157 9.3284 3 8.5 3H3.5C2.6716 3 2 3.67157 2 4.5C2 5.32843 2.6716 6 3.5 6H8.5Z" fill="#b5b5c3"></path></g></svg></i>
                </div>
                <div class="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper"  style={{height: `calc((100vh - 72px) - 2rem)`}}>
                    <div id="kt_aside_menu" class="aside-menu my-4 scroll ps ps--active-y "  data-menu-vertical="1" data-menu-scroll="1" data-menu-dropdown-timeout="500" style={{ height: "100%",overflow:props.active?"auto":"hidden", marginRight:"4px"}} >
                        <ul class="menu-nav" >
                            {props.data.map(suite=>{ return  (<li  class="menu-item" aria-haspopup="true">
                                <a class="menu-link" style={props.active ? { display: 'flex' } : { display: 'none' }} onClick={() => scrollToElement(suite.uuid)}>
                                    <span class="svg-icon menu-icon" >{suite.failures=="" && suite.skipped=="" ? <IcCheck />:<IcError/>}</span>
                                    <span   class="menu-text">{suite.title}</span>
                                </a>
                                </li>)})}
                        </ul>       
                    </div>
                </div>
            </div>
        </>
    )
}