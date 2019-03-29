<template>
    <Suggestions
    v-model="query"
    :options="options"
    :onInputChange="onInputChange">
    </Suggestions>
</template>

<script>

import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'


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
        this.$emit('search-job', 1)
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