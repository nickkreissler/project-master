import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home';
import Test from './components/test';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Routes = (
    <BrowserRouter>
        <div>
            <Route path="" component={Home} exact={true}/>
            <Route path="/home" component={Test} exact = {true}/>
        </div>
    </BrowserRouter>
)
  
 
  
  
  
  
ReactDOM.render(Routes, document.getElementById('app'));
  