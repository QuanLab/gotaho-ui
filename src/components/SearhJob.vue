<template>
	<Suggestions
    v-model="query"
    :options="options"
    :onInputChange="onCountryInputChange">
    </Suggestions>
</template>

<script>

import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'

// let API_SEARCH_JOB = HOST_NAME + 'search/jobs?q={{q}}&limit={{limit}}';

export default {
    name: 'SearhJob',
    components: {
        Suggestions
    },
    data () {
      let countries = ['Heard Island and Mcdonald Islands', 'Holy See (Vatican City State)', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Vietnam']
      return {
        query: '',
        countries: countries,
        selectedCountry: null,
        options: {}
      }
    },
    methods: {
      onCountryInputChange (query) {
        if (query.trim().length === 0) {
          return null
        }
        // return the matching countries as an array
        return this.countries.filter((country) => {
          return country.toLowerCase().includes(query.toLowerCase())
        })
      },
      onCountrySelected (item) {
        this.selectedCountry = item
      },
      onSearchItemSelected (item) {
        this.selectedSearchItem = item
      }
    }
}
</script>