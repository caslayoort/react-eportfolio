import React from 'react';
import '../../bootstrap-3.4.1/css/bootstrap.css';

export class Opendag extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Title/>
                <br/>
                <div className='row'>
                    <Stripe />
                    <div className='row'>
                        <div className='
                            col-xs-10 col-sm-10 col-md-10 col-lg-10
                            col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                        '>
                        <h4><strong>Links:</strong></h4>
                        <h4><a href='https://github.com/caslayoort/Project-B'>Github</a></h4>
                        <h4><a href='https://projectb.caslayoort.nl/api'>Api</a></h4>
                        <h4><a href='https://youtu.be/tvHCm6USQI8'>Video</a></h4>
                        </div>
                    </div>
                    <Stripe />
                    <div className='row'>
                        <div className='
                            col-xs-10 col-sm-10 col-md-10 col-lg-10
                            col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                        '>
                            <h4><strong>Beschrijving</strong></h4>
                            <p>
                                Dit project is gemaakt in opdracht van Hogeschool Rotterdam voor project b.
                                In dit project moest ik samen met mijn team een app maken die informatie bevat
                                van Hogeschool Rotterdam en haar open dagen. Mijn eerste taak was om de app zo goed
                                als mogelijk was te laten resizen op elke telefoon, om dit te doen berekende ik de
                                exacte afmetingen van de elementen in java door middel van de eigenschappen van het
                                beeldscherm. Ook heb ik een api gemaakt die een json file terug gaf die gegenereerd
                                was uit een mysql database.
                            </p>
                            <br/>
                        </div>
                    </div>

                    <Stripe />
                    <br/>
                </div>
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
                    <h1>Open dag</h1>
                    <br/>
                </div>
            </div>
    );
    }
}

class Stripe extends React.Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='
                        col-xs-10 col-sm-10 col-md-10 col-lg-10
                        col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                        text-center cv_item-head
                    '>
                        <h3> </h3>
                    </div>
                </div>
            </div>
        );
    }
}