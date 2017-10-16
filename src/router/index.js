import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/Layout/Layout'
import Home from '@/containers/Home/Home'
import Notice from '@/containers/Notice/Notice'
import IncidentManagement from '@/containers/IncidentManagement/IncidentManagement'
import IncidentManagementPush from '@/containers/IncidentManagement/IncidentManagementPush'
import WaitEvent from '@/containers/WaitEvent/WaitEvent'

import Zinformation from '@/containers/Zinformation/Zinformation'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/',
      // name: 'layout',
      component: Layout,
      children: [
        { path: '/', redirect: '/home' },
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/zinformation',
          name: 'zinformation',
          component: Zinformation
        }
      ]
     },
     {
      path: '/notice',
      name: 'Notice',
      component: Notice
     }, {
      path: '/incidentManagement',
      name: 'IncidentManagement',
      component: IncidentManagement
     }, {
      path: '/incidentManagementPush',
      name: 'IncidentManagementPush',
      component: IncidentManagementPush
     },{
      path: '/waitEvent',
      name: 'WaitEvent',
      component: WaitEvent
     }

     
     
     
  ]
})
