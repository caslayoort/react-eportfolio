import React from 'react';
import '../../bootstrap-3.4.1/css/bootstrap.css';

export class Ovnotifier extends React.Component {
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
                            <h4><a href='https://github.com/caslayoort/ProjectC'>Github</a></h4>
                            <h4><a href='https://projectc.caslayoort.nl'>Api documentatie</a></h4>
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
                                Het is heel irritant als je per ongeluk de bus mist, daarvoor is dit project de oplossing. De
                                "ov notifier" is een android app die ik samen met mijn team heb ontwikkeld. In de frontend kun
                                je routes toevoegen en aan die routes kunnen tijdschema's worden gekoppeld waardoor je aangeeft
                                hoe laat je moet aankomen op je bestemming vanaf je bestemming. Mijn rol in dit project was
                                voornamelijk de vertrektijd uitrekenen en de gebruiker op de hoogte stellen welke vervoersmiddelen
                                hij of zij moet nemen op welke tijden om op tijd op zijn of haar bestemming te komen. Hiervoor heb ik
                                een bash service gemaakt die de api van <a href='https://1313.nl'>1313.nl</a> gebruikt om zo de route
                                op te vragen bij een bepaalde aankomsttijd en door middel van het manipuleren van data alle benodigde
                                gegevens te verzamelen om vervolgens een e-mail te genereren en die via de api van Sendgrid te versturen.
                                <br/><br/>
                                Dit project is gemaakt in opdracht van Hogeschool Rotterdam voor project c.
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
                    <h1>Ov notifier</h1>
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