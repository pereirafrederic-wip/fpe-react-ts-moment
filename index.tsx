import React, { Component } from 'react';
import { render } from 'react-dom';
import EntreDeuxDate from './EntreDeuxDate';
import moment from 'moment'
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}
//https://momentjs.com/
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <EntreDeuxDate date1={moment()} date2={moment().add(10, 'days')} />
        <div className="colonne">
         {moment().format('MMMM Do YYYY, h:mm:ss a')}
{moment().format('dddd')}  
{moment().format("MMM Do YY")}            
{moment().format('YYYY [escaped] YYYY')}   
{moment().format()}                        
                                           
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
