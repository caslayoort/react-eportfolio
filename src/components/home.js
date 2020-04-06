import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';
import image from'../images/me.jpg';

export class Home extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='home_orientation' >
                    <Image />
                    <Text />
                </div>
            </div>
        );
    }
}

class Image extends React.Component {
    render() {
        return (
            <div className='
            col-xs-12 col-sm-12 col-md-12 col-lg-12
            landscape_content_height center
            '>
                <img src={image} className='homepage_image auto-margin' alt="Me"/>
            </div>
        );
    }
}

class Text extends React.Component {
    render() {
        return (
            <div className='
            col-xs-12 col-sm-12 col-md-12 col-lg-12
            landscape_content_height center
            '>
                <div className='auto-margin text-center'>
                    <h1>Hey, ik ben Caslay Oort.</h1>
                    <p className='home-text'>Welkom op mijn e-portfolio! Heeft u vragen of wilt u om een andere reden contact met mij opnemen? Stuur mij dan een bericht via <a href="https://linkedin.com/in/caslay-oort">LinkedIn</a>!</p>
                </div>
            </div>
        );
    }
}