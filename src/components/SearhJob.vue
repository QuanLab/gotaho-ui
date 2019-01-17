<template>
    <Suggestions
    v-model="query"
    :options="options"
    :onInputChange="onInputChange">
    </Suggestions>
</template>

<script>
import axios from 'axios'
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'

let API_SEARCH_JOB = 'http://192.168.217.136:8080/api/v1/search/job?q={{q}}&limit=10'

export default {
    name: 'SearhJob',
    components: {
        Suggestions
    },
    data () {
      let jobs = []
      return {
        query: '',
        jobs: jobs,
        selectedCountry: null,
        options: {

        }
      }
    },
    methods: {
      onInputChange (query) {
        if (query.trim().length === 0) {
          return null
        }
        axios.get(API_SEARCH_JOB.replace('{{q}}', query))
          .then(response => {
            this.jobs = response.data.jobs
          });
        this.$emit('search-job', this.jobs)
        return [];
      },
      onJobSelected (item) {
        this.selectedJob = item
      },
      onSearchItemSelected (item) {
        this.selectedSearchItem = item
      }
    }
}
</script>