import React from 'react';
import '../../bootstrap-3.4.1/css/bootstrap.css';

export class PublicScripts extends React.Component {
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
                            <h4><a href='https://github.com/caslayoort/scrips'>Github</a></h4>
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
                                In deze github repository verzamel ik scripts die ik gemaakt heb om bepaalde taken te automatiseren.
                            </p>
                            <br/>
                        </div>
                    </div>

                    <Stripe />
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