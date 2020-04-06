import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';
import image from'../images/me.jpg';

export class About extends React.Component {
    render() {

        const about = `In 2018 ben ik afgestudeerd aan de havo en ben ik Informatica gaan studeren op Hogeschool Rotterdam.
        Sinds een lange tijd heb ik al interesse in de wereld van de ICT, zo ben ik in de 3e van de havo begonnen met kleine
        projecten op een arduino uno. Toen ik Informatica ging studeren ben ik ook op zoek gegaan naar werk richting mijn studie
        met de reden dat het mij erg interessant leek om te zien hoe het in de praktijk er aan toe gaat. Na meer dan een jaar
        bij Initworks B.V. te hebben gewerkt in het operations en het stand-by team heb ik veel ervaring opgedaan in de wereld
        van webhosting. Momenteel onderhoud ik systemen van diverse klanten en heb ik 2 andere collega's getraind zodat ze
        ook mee konden draaien in het operations team. In de toekomst lijkt het mij erg interessant om richting DevOps te gaan
        omdat ik de combinatie van het ontwikkelen van applicaties en het onderhouden ervan erg leuk vind.`;

        return (
            <div className='container-fluid'>
                <div className='home_orientation' >
                    <Image />
                    <Text text={about}/>
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
                    <h1>About</h1>
                    <p className='about-text'>{this.props.text}</p>
                </div>
            </div>
        );
    }
}