import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';
import {Trigger2} from './popup'

export class Menu extends React.Component {
    render() {
        const stripe = {
            width: '7vh',
            height: '1vh',
            margin: '1.2vh 0',
            backgroundColor: '#000000',
        };
        const menu = <div><MenuContent /></div>
        
        return (
            <Trigger2 setContent={menu}>
                <div className='
                col-xs-12 col-sm-12 col-md-12 col-lg-12
                col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-sm-offset-0
                menu_height
                ' style={{cursor: 'pointer'}} >
                    <div id='hamburger' className='menu_height' style={{width: '10vh', float: 'right'}}>
                    <div style={stripe}/>
                    <div style={stripe}/>
                    <div style={stripe}/>
                    </div>
                </div>
            </Trigger2>
        );
    }
}

class Overlaybutton extends React.Component {
    render() {
        return (
        <div className='row'>
            <h2 className='overlay_button_text' style={{cursor: 'pointer'}} onClick={this.props.action}>
            {this.props.text}
            </h2>
        </div>
        );
    }
}

export class MenuContent extends React.Component {
    render() {  
        return (
            <div className='container-fluid'>
            
                <div className='
                    col-xs-12 col-sm-12 col-md-12 col-lg-12
                    landscape_content_height portrait_content_height
                    center
                '>
                    <div className='auto-margin text-center'>
                        <Overlaybutton
                        text='Home'
                        action={Home} />

                        <Overlaybutton
                        text='About'
                        action={About} />

                        <Overlaybutton 
                        text='Curriculum Vitae'
                        action={CV} />

                        <Overlaybutton 
                        text='Ervaring'
                        action={Ervaring} />
                    </div>
                </div>

            </div>
        );
    }
}

function destroyPopup() {
    document.getElementById("popup").onclick = function() {
        return false;
    }

    function fadeOut(Opacity) {
        if (typeof(document.getElementById('popup')) != 'undefined' && document.getElementById('popup') != null) {
            document.getElementById("popup").style.opacity = Opacity;
            if ( Opacity >= 0.1 ) {setTimeout(() => {  fadeOut(Opacity - 0.1); }, 20);}
            else {
                document.getElementById("popup").remove();
                return 0;
            }
        }
    }
    fadeOut(1);
}

function gotoPage() {
    destroyPopup();
    document.getElementById("Home").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("Cv").style.display = 'none';
    document.getElementById("Ervaring").style.display = 'none';
}

function Home() {
    gotoPage();
    document.getElementById('Home').style.display = 'block';
}

function About() {
    gotoPage();
    document.getElementById('About').style.display = 'block';
}

function CV() {
    gotoPage();
    document.getElementById('Cv').style.display = 'block';
}

function Ervaring() {
    gotoPage();
    document.getElementById('Ervaring').style.display = 'block';
}
