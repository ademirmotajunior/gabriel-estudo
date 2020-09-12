import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Tarefas from '@/components/Tarefas'
import NovaTarefa from '@/components/NovaTarefa'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/tarefas',
      name: 'Tarefas',
      component: Tarefas
    },
    {
      path: '/tarefas/novo',
      name: 'Nova Tarefa',
      component: NovaTarefa
    }
  ]
})
