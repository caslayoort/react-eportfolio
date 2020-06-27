import React from 'react';
import '../../bootstrap-3.4.1/css/bootstrap.css';

export class Eportfolio extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Title/>
                <br/>
                <div className='row'>
                    <Stripe />
                        <Beschrijving />
                    <Stripe />
                        <Links />
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
                    <h1>E-portfolio</h1>
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

class Beschrijving extends React.Component {
    render() {
        return (
            <div className='row'>
                        <div className='
                            col-xs-10 col-sm-10 col-md-10 col-lg-10
                            col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                        '>
                            <br/>
                            <h4><strong>Beschrijving</strong></h4>
                            <p>
                                Deze website is gemaakt in react met bootstrap met een beetje custom css.
                                De echte uitdaging in deze website was het design, dit had als reden dat
                                ik het een zakelijke uitstraling wilde geven zonder dat het saai werd.
                            </p>
                            <br/>
                        </div>
                    </div>
    );
    }
}

class Links extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className='row'>
                    <div className='
                        col-xs-10 col-sm-10 col-md-10 col-lg-10
                        col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1
                    '>
                        <h4><strong>Links:</strong></h4>
                            <h4><a href='https://caslayoort.nl'>Website</a></h4>
                            <h4><a href='https://github.com/caslayoort/react-eportfolio'>Github</a></h4>
                    </div>
                </div>
            </div>
    );
    }
}