import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import App from '@/pages/app/app'
import Index from '@/pages/index'
import Layout from '@/layout/index'

export default () => {
    return (
        <HashRouter>
            <Layout />
            <Switch>
                <Route path="/" component={Index} />
                <Route path="/bb" component={App} />
            </Switch>
        </HashRouter>
    )
}