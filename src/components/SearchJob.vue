<template>
  <div class="col-12 grid-margin">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Detail Information</h4>
        <form class="form-sample">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row"><label class="col-sm-3 col-form-label">Search</label>
                <div class="col-md-6">
                  <suggestions v-model="query" :options="options" :onInputChange="onInputChange" :onItemSelected="onSearchItemSelected"></suggestions>
                </div>
              </div>
            </div>
            <div class="col-md-6">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Scheduler Type</label>
                <div class="col-sm-9">
                  <select v-model="query_wrapper.schedulerType" class="form-control" id="schedulerType">
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
              <div class="form-group row"><label class="col-sm-3 col-form-label">Status</label>
                <div class="col-sm-9">
                  <select id="jobStatus" v-model="query_wrapper.status" class="form-control">
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
              <div class="form-group row"><label class="col-sm-3 col-form-label">From Date</label>
                <div class="col-sm-9"><input type="date" class="form-control" v-model="query_wrapper.from"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group row"><label class="col-sm-3 col-form-label">To Date</label>
                <div class="col-sm-9"><input type="date" class="form-control" v-model="query_wrapper.to"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button type="submit" v-on:click="submitSearch" class="btn btn-success mr-2">Search</button>
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
      options: {},
      query_wrapper: {
        status: '',
        schedulerType: '',
        query: '',
        from: '',
        to: ''
      }
    }
  },
  methods: {
    onInputChange(query) {
      if (query.trim().length === 0) {
        return null
      }
      this.query_wrapper.query = this.query
      // alert(JSON.stringify(this.query_wrapper))
      this.$emit('search', this.query_wrapper)
      return []
    },
    onSearchItemSelected(item) {
      this.selectedSearchItem = item
    },
    submitSearch() {
      this.query_wrapper.query = this.query
      this.$emit('search', this.query_wrapper)
    }
  }
}
</script>