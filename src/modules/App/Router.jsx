import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import Filtered from '../Filtered'
import RecentlyAdded from '../RecentlyAdded'
import Dapps from '../Dapps'
import CreateDapp from '../CreateDapp'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categories" component={Filtered} />
    <Route path="/all" component={Dapps} />
    <Route path="/recently-added" component={RecentlyAdded} />
    <Route path="/create-dapp" component={CreateDapp} />
  </Switch>
)
