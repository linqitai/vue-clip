import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upload from '@/components/Upload'
import UploadVue from '@/components/UploadVue'
import Croppa from '@/components/croppa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    },
    {
      path: '/uploadVue',
      name: 'UploadVue',
      component: UploadVue
    },
    {
      path: '/croppa',
      name: 'Croppa',
      component: Croppa
    }
  ]
})
