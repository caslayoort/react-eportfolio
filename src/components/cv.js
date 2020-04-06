import React from "react";
import '../bootstrap-3.4.1/css/bootstrap.css';
import image from'../images/me.jpg';

export class CV extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Title/>
                <br/>
                <Container title='Personalia'>
                    <Personalia />
                </Container>
                
                <Container title='Opleidingen'>
                    <Opleiding
                        school='Hogeschool Rotterdam'
                        opleiding='Informatica'
                        datum='2018 - heden'
                    />
                    <Opleiding
                        school='Krimpenerwaard College'
                        opleiding='Havo'
                        datum='2013 - 2018'
                        extra='Diploma behaald.'
                    />
                </Container>

                <Container title='Werkervaring'>
                    <Werkervaring 
                        bedrijf='Initworks B.V.'
                        functie='Systeembeheerder'
                        datum='02/2019 - heden'
                    />
                    <Werkervaring 
                        bedrijf='Studentaanhuis'
                        functie='Student'
                        datum='07/2018 - 02/2019'
                    />
                    <Werkervaring 
                        bedrijf='VANAD Enovation'
                        functie='Implementatie medewerker'
                        functieExtra='(Via Studentaanhuis)'
                        datum='08/2018 - 10/2018'
                    />
                </Container>

                <Container title='Taalkennis'>
                    <Taalkennis />
                </Container>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
                <div className='row'>
                    <div className='
                        col-xs-12 col-sm-12 col-md-10 col-lg-10
                        col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-1
                        text-center
                    '>
                        <h1>Curriculum Vitae</h1>
                    </div>
                </div>
        );
    }
}

class Container extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='
                        col-xs-10 col-sm-10 col-md-10 col-lg-10
                        col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                        text-center cv_item-head
                    '>
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='
                        col-xs-10 col-sm-10 col-md-10 col-lg-10
                        col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                    '>
                        {this.props.children}
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

class Personalia extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <h4><strong>Naam:</strong> Caslay Oort</h4>
                    <h4><strong>Geboortedatum:</strong> 03/06/2001</h4>
                    <h4><strong>Nationaliteit:</strong> Nederlandse</h4>
                    <h4><strong>Regio:</strong> Rotterdam</h4>
                </div>
            </div>
        );
    }
}

class Opleiding extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <h4><strong>{this.props.opleiding}</strong></h4>
                    <h4>{this.props.school}</h4>
                    <h4>{this.props.datum}</h4>
                    <h4>{this.props.extra}</h4>
                </div>
            </div>
        );
    }
}

class Werkervaring extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <h4><strong>Bedrijf:</strong> {this.props.bedrijf}</h4>
                    <h4><strong>Functie:</strong> {this.props.functie}</h4>
                    <h4><strong>{this.props.functieExtra}</strong></h4>
                    <h4><strong>{this.props.datum}</strong></h4>
                </div>
            </div>
        );
    }
}

class Taalkennis extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <h4><strong>Nederlands</strong> (moedertaal)</h4>
                    <h4><strong>Engels</strong> (goed, verbaal en schriftelijk)</h4>
                </div>
            </div>
        );
    }
}