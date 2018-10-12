import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

/* PAGES */
import DashboardPage from '../pages/Dashboard';
import CreateTodoPage from '../pages/CreateTodo';
import NotFoundPage from '../pages/NotFound';


const AppRouter = () => (
    <div>
        <HeaderComponent />
        <BrowserRouter>
                <Switch>
                    <Route path="/" component={DashboardPage} exact={true} />
                    <Route path="/create" component={CreateTodoPage} />
                    <Route component={NotFoundPage} />
                </Switch>
        </BrowserRouter>
        <FooterComponent />
    </div>
);

export default AppRouter;