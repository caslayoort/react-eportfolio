import React from 'react';
import {Content} from './components/body';
import './bootstrap-3.4.1/css/bootstrap.css';

export class App extends React.Component {
    componentWillMount() {
      this.getData()
    }
  
    getData() {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.open("GET", "https://www.caslayoort.nl/api", true);
    xhttp.send();
    }

    render() {
        return (
            <div className='page' style={{overflowX: 'hidden', overflowY: 'auto'}}>
              <Content/>
            </div>
        );
    }
}
