import React from 'react';
import '../bootstrap-3.4.1/css/bootstrap.css';
import {Trigger} from './popup';
import {Opendag} from './ervaring/opendag.js';
import {Ovnotifier} from './ervaring/ovnotifier.js';
import {Eportfolio} from './ervaring/eportfolio.js';
import {PublicScripts} from './ervaring/publicscripts.js';
import {Webhosting} from './ervaring/webhosting.js';

export class Ervaring extends React.Component {
    render() {
        return (
            <div className='container' style={{overflow: 'hidden'}}>
                <Title/>
                <br/>
                <div className='row'>
                            <Container
                                title='Open dag'
                                shortDescription='Een android app voor de open dag van Hogeschool Rotterdam.'
                            >
                                <Opendag />
                            </Container>

                            <Container
                                title='Ov notifier'
                                shortDescription='De "ov notifier" is een android app die via een bash service die je vertrektijd in de gaten houd op basis van je aankomsttijd en een notificatie stuurt hoe laat je weg moet om de bus/metro/trein/tram te halen.'
                            >
                                <Ovnotifier />
                            </Container>

                            <Container
                                title='E-portfolio'
                                shortDescription='Dit is mijn e-portfolio.'
                            >
                                <Eportfolio />
                            </Container>

                            <Container
                                title='Public scripts'
                                shortDescription='In deze git repository staan scripts die taken gemakkelijker en/of sneler maken.'
                            >
                                <PublicScripts />
                            </Container>

                            <Container
                                title='Web en applicatie beheer'
                                shortDescription='Het beheren van de infrastructuren en applicaties van klanten.'
                            >
                                <Webhosting />
                            </Container>
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
                    <h1>Ervaring</h1>
                    <br/>
                    <h3>Hieronder staan een aantal projecten en andere ervaringen die ik heb opgedaan. Voor meer informatie kunt u op het item klikken.</h3>
                    <br/>
                </div>
            </div>
    );
    }
}

class Container extends React.Component {
    render() {
        const content = <div>{this.props.children}</div>;
        return (
            <div className='
            col-xs-8 col-sm-8 col-md-8 col-lg-8
            col-xs-offset-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2
            '>
                <Trigger setContent={content}>
                    <div className='row'>
                        <div className='
                            col-xs-12 col-sm-12 col-md-12 col-lg-12
                            ervaring_component_head text-center
                        '>
                            <h4><strong>{this.props.title}</strong></h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='
                            col-xs-12 col-sm-12 col-md-12 col-lg-12
                            ervaring_component_body
                        '>
                            <p>{this.props.shortDescription}</p>
                        </div>
                    </div>
                </Trigger>
                <br/>

            </div>
        );
    }
}
