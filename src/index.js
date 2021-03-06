import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
//import { getCountries } from './actions/actions-countries.js';
import routes from './routes';
import DevTools from './DevTools';
import './css/style.css'


render(
    <Provider store={store}>        
        <Router history={hashHistory} routes={routes}/>

    </Provider>,
    document.getElementById('root')
);

/*render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());*/




/*import React from 'react';
import { render } from 'react-dom';

render(
    <h1>Inicjalizacja projektu</h1>,
    document.getElementById('root')
);*/