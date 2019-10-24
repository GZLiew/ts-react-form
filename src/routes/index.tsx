import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { HomeView } from '../modules/home/HomeView'
import { ContactView } from '../modules/contact/ContactView'
import { ProfileView } from '../modules/profile/ProfileView'

const FC = () => {

  return (
    <Switch>
      <Route exact={true} path="/" component={HomeView} />
      <Route exact={true} path="/contact" component={ContactView} />
      <Route exact={true} path="/profile/:name" component={ProfileView} />
    </Switch>
  )

}

export { FC as Routes }
