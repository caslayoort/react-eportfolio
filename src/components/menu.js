import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';

export class Menu extends React.Component {
    render() {
        const stripe = {
            width: '80%',
            height: '14%',
            backgroundColor: '#000000',
            margin: '10%'
        };
        
        return (
            <div className='menu_bar'>
                <div className='
                col-xs-3 col-sm-2 col-md-1 col-lg-1
                col-xs-offset-9 col-sm-offset-10 col-md-offset-0 col-sm-offset-0
                menu_height
                ' id='hamburger' style={{cursor: 'pointer'}} onClick={showOverlay}>
                    <div style={stripe}/>
                    <div style={stripe}/>
                    <div style={stripe}/>
                </div>
            </div>
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

export class Overlay extends React.Component {
    render() {  
      return (
        <div className='overlay' style={{display: 'none'}} id='overlay'>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='
                    col-xs-2 col-sm-1 col-md-1 col-lg-1
                    col-xs-offset-10 col-sm-offset-11 col-md-offset-0 col-sm-offset-0
                    menu_height
                    ' style={{cursor: 'pointer'}} onClick={hideOverlay}>
                    <h2 style={{color: '#5555FF'}}><strong>x</strong></h2>
                    </div>
                </div>

            
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
        </div>
      );
    }
  }
  



function showOverlay() {
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('hamburger').style.display = 'none';
    let opacity = 0;
    function fadeIn() {
        opacity = opacity + 0.1; 
        document.getElementById('overlay').style.opacity = opacity;
        if ( opacity <= 0.9 ) {setTimeout(() => {  fadeIn(); }, 20);}
        else { return 0; }
    }
    fadeIn();
}

function hideOverlay() {
    document.getElementById('overlay').style.opacity = 1;
    let opacity = 1;
    function fadeOut() {
        opacity = opacity - 0.1; 
        document.getElementById('overlay').style.opacity = opacity;
        if ( opacity >= 0.1 ) {setTimeout(() => {  fadeOut(); }, 20);}
        else {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('hamburger').style.display = 'block';
        return 0;
        }
    }
    fadeOut();
}

function HideAllWindows() {
    document.getElementById("Home").style.display = 'none';
    document.getElementById("About").style.display = 'none';
    document.getElementById("Cv").style.display = 'none';
    document.getElementById("Ervaring").style.display = 'none';
    hideOverlay();
}

function Home() {
    HideAllWindows();
    document.getElementById('Home').style.display = 'block';
}

function About() {
    HideAllWindows();
    document.getElementById('About').style.display = 'block';
}

function CV() {
    HideAllWindows();
    document.getElementById('Cv').style.display = 'block';
}

function Ervaring() {
    HideAllWindows();
    document.getElementById('Ervaring').style.display = 'block';
}