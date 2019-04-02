<template>
  <div class="container-scroller" id="app">
    <!-- partial:../../partials/_navbar.html -->
    <Navbar v-bind:user="user" v-bind:notifications="notifications" v-on:enable-search="enableSearch"></Navbar>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:../../partials/_sidebar.html -->
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <SideBar v-bind:user="user" v-on:update-data="updateData" v-on:enable-search="enableSearch"></SideBar>
      </nav>
      <!-- partial -->
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div v-if="showSearch" class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <SearchJob v-on:search="searchJob"></SearchJob>
              </div>
            </div>
            <JobListCard v-if="renderList" v-bind:jobs="jobs" v-on:start="startJob" v-on:stop="stopJob" v-on:detail="detailJob">
            </JobListCard>
            <Pagination v-if="renderList" v-bind:limit="limit" v-bind:offset="offset" v-bind:has_next="has_next" v-on:change-offset="changeOffset">
            </Pagination>
            <JobDetailCard v-else v-bind:job="job_detail" v-bind:instances="instances" v-on:stop="stopJob" v-on:start="startJob" v-on:update="updateJob">
            </JobDetailCard>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->
        <footer class="footer">
          <div class="container-fluid clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
              <a href="http://www.five9.vn/" target="_blank">Five9.Vn</a>. All rights reserved.</span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>
<script>
import SearchJob from './components/SearchJob.vue'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import JobListCard from './components/JobListCard.vue'
import JobDetailCard from './components/JobDetailCard.vue'
import Pagination from './components/Pagination.vue'
import axios from 'axios'

const HOST_NAME = 'http://192.168.106.60:8080/api/v1/'

let API_GET_JOB = HOST_NAME + 'jobs?limit={{limit}}&offset={{offset}}'
let API_START_JOB = HOST_NAME + 'startJob?name={{name}}'
let API_STOP_JOB = HOST_NAME + 'stopJob?name={{name}}'
let API_JOB_STATUS_LIST = HOST_NAME + 'jobStatusList?name={{name}}'
let API_SEARCH_JOB = HOST_NAME + 'search?q={{q}}&limit=10'
let API_UPDATE_JOB = HOST_NAME + 'job'


const configCORS = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
}

export default {
  name: 'app',
  components: {
    SearchJob,
    Navbar,
    SideBar,
    JobListCard,
    JobDetailCard,
    Pagination
  },
  data() {
    return {
      renderList: true,
      showSearch : false,
      user: {
        fullname: 'Quan Pham Van',
        firstname: 'Quan'
      },
      notifications: [{
        id: 1,
        message: 'ETL job KOL_FOLLOWER_CUBE error',
        time: new Date()
      }],
      jobs: null,
      has_next: null,
      limit: 10,
      offset: 0,
      job_detail: null,
      instances: null
    }
  },
  methods: {
    getJobList() {
      let url = API_GET_JOB.replace('{{limit}}', this.limit).replace('{{offset}}', this.offset);
      axios.get(url, configCORS)
        .then(response => {
          this.jobs = response.data.jobs;
          this.has_next = response.data.has_next
        });
    },
    enableSearch() {
        this.renderList = true;
        this.showSearch = true;
    },
    searchJob(query) {
      let url = API_SEARCH_JOB.replace('{{q}}', query);
      axios.get(url)
        .then(response => {
          this.jobs = response.data
          this.$forceUpdate();
        });
    },
    getJobStatusList() {
      let url = API_JOB_STATUS_LIST.replace('{{name}}', this.job_detail.name);
      axios.get(url, configCORS)
        .then(response => {
          this.instances = response.data;
        });
    },
    startJob(job) {
      let message = 'Do you want to start ' + job.name;
      let url = API_START_JOB.replace('{{name}}', job.name)
      if (job['instanceid'] !== 'undefined') {
        url = url + '&instanceId=' + job.instanceid
      }

      if (confirm(message)) {
        axios.post(url, { 'name': job.name, 'instanceid': job['instanceid'] }, configCORS)
          .then(res => {
            if (res.status === 200) {
              if (res.data.status === 1) {
                alert(res.data.message);
              } else {
                alert(res.data.message);
              }
              this.updateData();
            } else {
              alert("Error " + res.status)
            }
          })
          .catch(err => {
            alert(err)
          });
      }
    },
    stopJob(job) {
      let message = 'Do you want to stop ' + job.name;
      let url = API_STOP_JOB.replace('{{name}}', job.name)
      if (job['instanceid'] !== 'undefined') {
        url = url + '&instanceId=' + job['instanceid']
      }

      if (confirm(message)) {
        axios.post(url, { 'name': job.name, 'instanceid': job['instanceid'] }, configCORS)
          .then(res => {
            if (res.status === 200) {
              if (res.data.status === 1) {
                alert("Stop job success");
              } else {
                alert("Stop job error");
              }
              this.updateData();
            } else {
              alert("Error " + res.status)
            }
          })
          .catch(err => {
            alert(err)
          });
      }
    },
    updateJob(job) {
      axios.post(API_UPDATE_JOB, job, configCORS)
        .then(res => {
          if (res.status === 200) {
            if (res.data.status === 1) {
              alert("Update job success");
            } else {
              alert("Update job failed");
            }
          } else {
            alert("Error " + res.status)
          }
        })
        .catch(err => {
          alert(err)
        });
      this.$forceUpdate();
    },
    changeOffset(i) {
      this.offset = this.offset + i * this.limit;
      this.updateData();
    },
    offsetPlus(i) {
      return this.offset / this.limit + i
    },
    detailJob(job) {
      this.renderList = false;
      this.job_detail = job;
      this.instances = this.getJobStatusList();
    },
    updateData() {
      this.showSearch = false
      this.renderList = true;
      this.getJobList();
      this.$forceUpdate();
    }
  },
  mounted() {
    this.getJobList();
  }
}
</script>