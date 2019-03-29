<template>
    <div class="container-scroller" id="app">
        <!-- partial:../../partials/_navbar.html -->
        <Navbar v-bind:user="user" v-bind:notifications="notifications"></Navbar>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:../../partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <SideBar v-bind:user="user" v-on:update-data="goToHomePage"></SideBar>
            </nav>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div v-if="renderList" class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <SearhJob @search-job="updateJobs" ></SearhJob>
                            </div>
                        </div>
                        <JobListCard v-if="renderList" v-bind:jobs="jobs" v-on:emit-run-job="runJob" v-on:emit-detail-job="detailJob"></JobListCard>
                        <Pagination v-if="renderList" v-bind:limit="limit" v-bind:offset="offset" v-bind:has_next="has_next" 
                                    v-on:change-offset="changeOffset"></Pagination>
                        <JobDetailCard v-else v-bind:job="job_detail"></JobDetailCard>
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
import SearhJob from './components/SearhJob.vue'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
import JobListCard from './components/JobListCard.vue'
import JobDetailCard from './components/JobDetailCard.vue'
import Pagination from './components/Pagination.vue'

import axios from 'axios';

const HOST_NAME = 'http://192.168.106.60:8080/api/v1/'
let API_GET_JOB = HOST_NAME + 'jobs?limit={{limit}}&offset={{offset}}'
let API_START_JOB = HOST_NAME + 'startJob?name={{name}}'
let API_STOP_JOB = HOST_NAME + 'stopJob?name={{name}}&id={{id}}'
// let API_SEARCH_JOB = HOST_NAME + 'search?q={{q}}&limit=10'

const configCORS = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
}

export default {
    name: 'app',
    components: {
        SearhJob,
        Navbar,
        SideBar,
        JobListCard,
        JobDetailCard,
        Pagination
    },
    data() {
        return {
            renderList: true,
            user: {
                fullname: 'Quan Pham Van',
                firstname: 'Quan'
            },
            notifications: [{
                    id: 1,
                    message: 'ETL job KOL_FOLLOWER_CUBE error',
                    time: new Date()
                },
            ],
            jobs: null,
            has_next: null,
            limit: 10,
            offset : 0,
            action: null,
            job_detail: null
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
        runJob(job) {
            let message = 'Do you want to {{action}} ' + job.name;
            let url = API_START_JOB.replace('{{name}}', job.name)

            if (job.status === "Running") {
                url = API_STOP_JOB.replace('{{name}}', job.name).replace('{{id}}', job.id)
                message = message.replace('{{action}}', 'stop')
            } else {
                message = message.replace('{{action}}', 'start')
            }

            if (confirm(message)) {
                axios.post(url, job, configCORS)
                    .then(res => {
                        if (res.status === 200) {
                            if (job.status === 1) {
                                alert("Stop job success");
                            } else {
                                alert("Start job success");
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
        },
        updateData() {
            this.getJobList();
            this.$forceUpdate();
        },
        goToHomePage() {
            this.renderList = true;
        }
    },
    mounted() {
        this.getJobList();
    }
}
</script>