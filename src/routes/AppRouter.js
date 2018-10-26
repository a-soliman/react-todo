import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import DashboardPage from '../components/Dashboard';
import CreateTodoPage from '../components/CreateTodo';
import EditTodoPage from '../components/EditTodo';
import NotFoundPage from '../components/NotFound';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <Switch>
                <Route path="/" exact={true} component={DashboardPage} />
                <Route path="/create" component={CreateTodoPage} />
                <Route path="/edit/:id" component={EditTodoPage} />
                <Route component={NotFoundPage} />
            </Switch>
            <FooterComponent />
        </div>
    </BrowserRouter>
);

export default AppRouter;