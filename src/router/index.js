import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/containers/Layout/Layout'
import Home from '@/containers/Home/Home'
import Zinformation from '@/containers/Zinformation/Zinformation'
import ZnoticeDetail from '@/containers/ZnoticeDetail/ZnoticeDetail'
import ZpubAd from '@/containers/ZpubAd/ZpubAd'
import Notice from '@/containers/Notice/Notice'
import IncidentManagement from '@/containers/IncidentManagement/IncidentManagement'
import IncidentManagementPush from '@/containers/IncidentManagement/IncidentManagementPush'
import WaitEvent from '@/containers/WaitEvent/WaitEvent'
import Zdate from '@/components/Zdate/Zdate'
import Zalert from '@/components/Zalert/Zalert'

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
     },{
      path: '/zinformation',
      name: 'Zinformation',
      component: Zinformation
     },{
      path: '/znoticeDetail',
      name: 'ZnoticeDetail',
      component: ZnoticeDetail
     },{
      path: '/zdate',
      name: 'Zdate',
      component: Zdate
     },{
      path: '/zalert',
      name: 'Zalert',
      component: Zalert
     }
     
     
  ]
})
