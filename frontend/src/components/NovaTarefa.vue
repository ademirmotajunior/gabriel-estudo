<template>
  <div class="hello mt-2">
    <div>
      <b-card
      header="Cadastrar nova tarefas"
      header-tag="header"
      footer-tag="footer"
    >
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Tarefa:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Nome da Tarefa"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button type="reset" variant="danger">Resetar</b-button>
    </b-form>
    </b-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        form: {
          name: ''
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault()
        axios.post('http://localhost:3333', this.form)
          .then((response) => {
            console.log(response)
          })
          .error(
            alert('Falha ao salvar a tarefa')
          )
      },
      onReset (evt) {
        evt.preventDefault()
        this.form.name = ''
      }
    }
  }
</script>
