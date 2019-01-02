<template>
    <div class="container-scroller" id="app">
        <!-- partial:../../partials/_navbar.html -->
        <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <a class="navbar-brand brand-logo" href="#">
                    <img src="image/logo_five9.png" alt="logo">
                </a>
                <a class="navbar-brand brand-logo-mini" href="#">
                    <img src="image/logo-mini.svg" alt="logo">
                </a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center">
                <ul class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Schedule<span class="badge badge-primary ml-1">New</span></a>
                    </li>
                    <li class="nav-item active">
                        <a href="#" class="nav-link"><i class="mdi mdi-elevation-rise"></i>Reports</a>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link"><i class="mdi mdi-bookmark-plus-outline"></i>Score</a>
                    </li>
                </ul>
                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item dropdown">
                        <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown"
                           href="#" data-toggle="dropdown">
                            <i class="mdi mdi-bell"></i><span class="count">{{ notifications.length }}</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                             aria-labelledby="notificationDropdown">
                            <a class="dropdown-item">
                                <p class="mb-0 font-weight-normal float-left">
                                    You have {{ notifications.length }} new notifications
                                </p>
                                <span class="badge badge-pill badge-warning float-right">View all</span>
                            </a>

                            <div v-for="item in notifications" :key="item.id">
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                        <div class="preview-icon bg-success">
                                            <i class="mdi mdi-email-outline mx-0"></i>
                                        </div>
                                    </div>
                                    <div class="preview-item-content">
                                        <h6 class="preview-subject font-weight-medium text-dark">{{ item.message }}</h6>
                                        <p class="font-weight-light small-text">
                                            Just now
                                        </p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </li>
                    <li class="nav-item dropdown d-none d-xl-inline-block">
                        <a class="nav-link dropdown-toggle" id="UserDropdown"
                           href="#" data-toggle="dropdown" aria-expanded="false">
                            <span class="profile-text">Hello, {{ user.firstname }}!</span>
                            <img class="img-xs rounded-circle" src="image/face1.jpg" alt="Profile image"></a>
                        <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                            <a class="dropdown-item p-0">
                                <div class="d-flex border-bottom">
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                                        <i class="mdi mdi-bookmark-plus-outline mr-0 text-gray"></i>
                                    </div>
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                                        <i class="mdi mdi-account-outline mr-0 text-gray"></i>
                                    </div>
                                    <div class="py-3 px-4 d-flex align-items-center justify-content-center">
                                        <i class="mdi mdi-alarm-check mr-0 text-gray"></i>
                                    </div>
                                </div>
                            </a>
                            <a class="dropdown-item mt-2">Manage Accounts</a>
                            <a class="dropdown-item">Change Password</a>
                            <a class="dropdown-item">Check Inbox</a>
                            <a class="dropdown-item">Sign Out</a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                    <span class="icon-menu"></span>
                </button>
            </div>
        </nav>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:../../partials/_sidebar.html -->
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                        <div class="nav-link">
                            <div class="user-wrapper">
                                <div class="profile-image">
                                    <img src="image/face1.jpg" alt="profile image">
                                </div>
                                <div class="text-wrapper">
                                    <p class="profile-name">{{ user.fullname}}</p>
                                    <div>
                                        <small class="designation text-muted">Engineer</small>
                                        <span class="status-indicator online"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i class="menu-icon mdi mdi-television"></i>
                            <span class="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="menu-icon mdi mdi-sticker"></i><span
                                class="menu-title">Icons</span></a>
                    </li>
                </ul>
            </nav>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <input class="form-control" type="text" placeholder="Search" aria-label="Search">
                            </div>
                        </div>
                        <div class="col-lg-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">ETL Job</h4>
                                    <div class="table-responsive">
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th># Job ID</th>
                                                <th>Job name</th>
                                                <th>Scheduler Type</th>
                                                <th>Repeat</th>
                                                <th>Created Date</th>
                                                <th>Modified Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            <tr v-for="job in jobs" :key="job.id">
                                                <td>{{ job.id }}</td>
                                                <td>{{ job.name }}</td>
                                                <td v-if="job.scheduler_type == 0">None</td>
                                                <td v-else-if="job.scheduler_type == 1">Interval</td>
                                                <td v-else-if="job.scheduler_type == 2">Daily</td>
                                                <td v-else-if="job.scheduler_type == 3">Weekly</td>
                                                <td v-else-if="job.scheduler_type == 4">Monthly</td>
                                                <td>{{ job.is_repeat }}</td>
                                                <td>{{ job.created_date}}</td>
                                                <td>{{ job.modified_date}}</td>
                                                <td>
                                                    <label class="badge badge-warning"
                                                           v-if="job.status == 0">Wait</label>
                                                    <label class="badge badge-success"
                                                           v-else-if="job.status == 1">Running</label>
                                                    <label class="badge badge-danger"
                                                           v-else-if="job.status == 2">Error</label>
                                                </td>
                                                <td v-on:click="runJob(job)" style="cursor: pointer;">
                                                    <a v-if="job.status == 0"><img src="image/start.png"></a>
                                                    <a v-else-if="job.status == 1"><img src="image/stop.png"></a>
                                                    <a v-else><img src="image/start.png"></a>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-paginaton">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled" v-if="offset == 0">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item" v-else>
                                    <a class="page-link" tabindex="-1" v-on:click="changeOffset(-1)">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link">{{ offsetPlus(1) }}</a></li>
                                <li class="page-item" v-if="has_next == true" v-on:click="changeOffset(1)">
                                    <a class="page-link">{{ offsetPlus(2)}}</a>
                                </li>
                                <li class="page-item"><a class="page-link">...</a></li>
                                <li class="page-item" v-if="has_next == true">
                                    <a class="page-link" v-on:click="changeOffset(1)">Next</a>
                                </li>
                                <li class="page-item disabled" v-else>
                                    <a class="page-link" tabindex="-1">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- content-wrapper ends -->
                <!-- partial:../../partials/_footer.html -->
                <footer class="footer">
                    <div class="container-fluid clearfix">
                        <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2018
              <a href="http://www.five9.vn/" target="_blank">five9.vn</a>. All rights reserved.</span>
                        <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Hand-crafted &amp; made with
              <i class="mdi mdi-heart text-danger"></i>
            </span>
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
    // import HelloWorld from './components/HelloWorld.vue'
    import axios from 'axios';

    let HOST_NAME = 'http://localhost:9000/api/v1/';
    let API_GET_JOB = HOST_NAME + 'jobs?limit={{limit}}&offset={{offset}}';
    let API_START_JOB = HOST_NAME + 'startJob';
    let API_STOP_JOB = HOST_NAME + 'stopJob';
    // let API_SEARCH_JOB = HOST_NAME + 'search/jobs?q={{q}}&limit={{limit}}';

    const configCORS = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                user: {
                    fullname: 'Quan Pham Van',
                    firstname: 'Quan'
                },
                limit: 10,
                offset: 0,
                notifications: [
                    {
                        id: 1,
                        message: 'ETL job KOL_FOLLOWER_CUBE error',
                        time: new Date()
                    },
                    {
                        id: 2,
                        message: 'Application 2 error',
                        time: new Date()
                    }
                ],
                jobs: null,
                has_next: null,
                action: null
            }
        },
        methods: {
            runJob(job) {
                let message = 'Do you want to run this ETL';
                let url = API_START_JOB;
                if (job.status === 1) {
                    url = API_STOP_JOB;
                    message = 'Do you want to stop this ETL job'
                }
                if (confirm(message)) {
                    axios.post(url, job, configCORS)
                        .then(res => {
                            if (res.status === 200) {
                                if (job.status === 1) {
                                    alert("Stop job success")
                                } else {
                                    alert("Start job success")
                                }
                            } else {
                                alert("Error " + res.status)
                            }
                        })
                        .catch(err => {
                            alert(err)
                        });

                } else {
                    // console.log('Clicked on cancel')
                }
            },
            updateData() {
                let url = API_GET_JOB.replace('{{limit}}', this.limit).replace('{{offset}}', this.offset);
                axios.get(url, configCORS)
                    .then(response => {
                        this.jobs = response.data.jobs;
                        this.has_next = response.data.has_next
                    });
                this.$forceUpdate();
            },
            // searchJobs(query, done) {
            //     axios.get(API_SEARCH_JOB.replace('{{q}}', query).replace('{{offset}}', this.offset))
            //         .then(response => {
            //             console.log(response.data)
            //         });
            //     app.$forceUpdate();
            // },
            changeOffset(i) {
                this.offset = this.offset + i * this.limit;
                this.updateData();
            },
            offsetPlus(i) {
                return this.offset / this.limit + i
            }
        },
        mounted() {
            axios.get(API_GET_JOB.replace('{{limit}}', this.limit).replace('{{offset}}', this.offset))
                .then(response => {
                    this.jobs = response.data.jobs;
                    this.has_next = response.data.has_next
                })
        }
    }
</script>