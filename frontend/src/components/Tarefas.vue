<template>
  <div class="hello mt-2">
    <div>
      <b-button href="/tarefas/novo" variant="success">Adicionar nova tarefa</b-button>
      <v-client-table :columns="columns" v-model="data" :options="options"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data () {
    return {
      columns: ['id', 'name', 'createdAt', 'updatedAt'],
      data: [],
      options: {
        perPage: 5,
        headings: {
          name: 'Tarefa',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em'
        },
        templates: {
          createdAt (h, row) {
            return moment(row.created_at).format('DD/MM/YYYY HH:mm:ss')
          },
          updatedAt (h, row) {
            return moment(row.updated_at).format('DD/MM/YYYY HH:mm:ss')
          }
        }
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      return axios.get('http://localhost:3333/')
        .then((response) => {
          this.data = response.data
        })
    }
  }
}
</script>
