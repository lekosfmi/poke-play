// Import from main components / modules
import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react'
import { mount } from 'react-mounter'

// Import modules
import { title } from '../../imports/client/module'

// Import components
import App from '../../client/app/app.jsx'

// Import pages
import Index from '../../client/ui/pages/index/index.jsx'


/* Routes */
FlowRouter.route("/", { // Index
  action() {
    title('Poké Play')
    mount(App, { content: (<Index />) })
  }
})
