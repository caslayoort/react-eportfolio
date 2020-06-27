import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';

import {Menu} from './menu';

import {Home} from './home';
import {About} from './about';
import {CV} from './cv';
import {Ervaring} from './ervaring';

export class Content extends React.Component {
    render() {
        return (
            <div className='content_container'>
                <div className='row'><Menu /></div>
                <div>
                    <div  id='Home'><Home/></div>
                    <div id='About' style={{display: 'none'}}><About/></div>
                    <div id='Cv' style={{display: 'none'}}><CV/></div>
                    <div id='Ervaring' style={{display: 'none'}}><Ervaring/></div>
                    <br />
                </div>
            </div>
        );
    }
}