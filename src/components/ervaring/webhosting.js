import React from 'react';
import '../../bootstrap-3.4.1/css/bootstrap.css';

export class Webhosting extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <Title/>
                <br/>
                <div className='row'>
                    <Stripe />
                        <Beschrijving />
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
                    <h1>Web en applicatie beheer</h1>
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
                            Sinds februari 2019 werk ik bij Initworks B.V. als systeembeheerder. Tijdens deze periode heb ik veel geleerd
			    over webhosting en wat daarbij komt kijken. Als teamlid van het operations team ben ik vooral bezig met het
			    opzetten en het beheren van de infrastructuren en applicaties van klanten. Ook draai ik mee in het stand-by team
			    wat inhoud dat ik ook buiten werktijd kritieke systemen online houd.
                            </p>
                            <br/>
                        </div>
                    </div>
    );
    }
}

