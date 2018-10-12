import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

/* PAGES */
import DashboardPage from '../pages/Dashboard';
import CreateTodoPage from '../pages/CreateTodo';
import EditTodoPage from '../pages/EditTodo';
import NotFoundPage from '../pages/NotFound';


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