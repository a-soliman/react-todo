import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize-scss/sass/_normalize.scss';
import './styles/styles.scss';

const TodoDashBoardPage = () => (
    <div>
        Todo Dashboard.
    </div>
);

const AddTodoPage = () => (
    <div>
        AddTodoPage
    </div>
);

const routes = (
    <div>
        <BrowserRouter>
            <div>
                <Route path="/" component={TodoDashBoardPage} exact={true} />
                <Route path="/add" component={AddTodoPage} />
            </div>
        </BrowserRouter>
    </div>
);

const appContainer = document.querySelector('#app');
ReactDOM.render(routes, appContainer);