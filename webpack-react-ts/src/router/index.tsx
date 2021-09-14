import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import App from '@/pages/app/app'
import LayoutPage from '@/pages/layout/index'
import Index from '@/pages/index'
import Layout from '@/layout/index'

export default () => {
    return (
        <HashRouter>
            <Layout />
            <Switch>
                <Route path="/aa"  component={Index} />
                <Route path="/bb" component={App} />
                <Route path="/layout" component={LayoutPage} />
                <Redirect to="/layout" />
            </Switch>
        </HashRouter>
    )
}