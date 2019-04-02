<template>
  <div class="col-12 grid-margin">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Detail Information</h4>
        <form class="form-sample">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row"><label class="col-sm-3 col-form-label">Search</label>
                <div class="col-sm-9">
                  <suggestions v-model="query" :options="options" :onInputChange="onCountryInputChange" :onItemSelected="onSearchItemSelected"></suggestions>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row"><label class="col-sm-3 col-form-label">Status</label>
                <div class="col-sm-9">
                  <select id="jobStatus" class="form-control">
                    <option>All</option>
                    <option>Running</option>
                    <option>Finished</option>
                    <option>Stopped</option>
                    <option>Halt</option>
                    <option>Stopped(with errors)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Scheduler Type</label>
                <div class="col-sm-9">
                  <select class="form-control" id="schedulerType">
                    <option value="-1">All</option>
                    <option value="0">No Scheduling</option>
                    <option value="1">Interval</option>
                    <option value="2">Daily</option>
                    <option value="3">Weekly</option>
                    <option value="4">Monthly</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row"><label class="col-sm-3 col-form-label">Created Date</label>
                <div class="col-sm-9"><input type="date" max="30" class="form-control" id=""></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button type="submit" v-on:click="onCountryInputChange" class="btn btn-success mr-2">Search</button>
  </div>
</template>
<script>
import Suggestions from 'v-suggestions'
import 'v-suggestions/dist/v-suggestions.css'

export default {
  components: {
    Suggestions
  },
  data() {
    let jobs = []
    return {
      query: '',
      jobs: jobs,
      selectedCountry: null,
      options: {}
    }
  },
  methods: {
    onCountryInputChange(query) {
      if (query.trim().length === 0) {
        return null
      }
      this.$emit('search', this.query)
      return []
    },
    onSearchItemSelected(item) {
      this.selectedSearchItem = item
    }
  }
}
</script>