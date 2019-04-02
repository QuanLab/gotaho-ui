<template>
    <div class="col-12 grid-margin">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Detail Information</h4>
                <form class="form-sample">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">ID</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.id" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.name" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Description</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.description" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Scheduler Type</label>
                                <div class="col-sm-9">
                                    <select class="form-control" @change="onChangeSchedulerType">
                                        <option :selected="job.scheduler_type === 0" value="0">No Scheduling</option>
                                        <option :selected="job.scheduler_type === 1" value="1">Interval</option>
                                        <option :selected="job.scheduler_type === 2" value="2">Daily</option>
                                        <option :selected="job.scheduler_type === 3" value="3">Weekly</option>
                                        <option :selected="job.scheduler_type === 4" value="4">Monthly</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Repeat</label>
                                <div class="col-sm-4">
                                    <div class="form-radio">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="isRepeat" id="isRepeat1" value="option1" :checked="job.is_repeat==='Y'"> Yes
                                            <i class="input-helper"></i></label>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="form-radio">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" name="isRepeat" id="isRepeat2" value="option2" :checked="job.is_repeat==='N'"> No
                                            <i class="input-helper"></i></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Interval Of Seconds</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.interval_seconds" :disabled="disableEdit(job.scheduler_type, 'interval_seconds')">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Interval Of Minutes</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.interval_minutes" :disabled="disableEdit(job.scheduler_type, 'interval_minutes')">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Hours</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" max="23" :value="job.hours" :disabled="disableEdit(job.scheduler_type, 'hours')">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Minutes</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" max="59" :value="job.minutes" :disabled="disableEdit(job.scheduler_type, 'minutes')">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Day of week</label>
                                <div class="col-sm-9">
                                    <select class="form-control" :disabled="disableEdit(job.scheduler_type, 'week_day')">
                                        <option :selected="job.week_day === 1">Sunday</option>
                                        <option :selected="job.week_day === 2">Monday</option>
                                        <option :selected="job.week_day === 3">Tuesday</option>
                                        <option :selected="job.week_day === 4">Wednesday</option>
                                        <option :selected="job.week_day === 5">Thursday</option>
                                        <option :selected="job.week_day === 6">Friday</option>
                                        <option :selected="job.week_day === 7">Saturday</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Day of month</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" max="30" :value="job.day_of_month" :disabled="disableEdit(job.scheduler_type, 'day_of_month')">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Instances</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th># Instance ID</th>
                                <th>Log Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in instances" :key="item.id">
                                <td style="cursor: pointer;">
                                    <a data-toggle="modal" data-target="#myModal" @click="openModal(item)">{{ item.id }}</a>
                                </td>
                                <!-- Modal Box show log and image of instance -->
                                <!-- end of Modal Box show -->
                                <td>{{ item.log_date}}</td>
                                <td>
                                    <label class="badge badge-success">{{ item.status_desc }}</label>
                                </td>
                                <td style="cursor: pointer;">
                                    <a v-if="item.status_desc === 'Running'" v-on:click="stopJob(item)"><img src="image/stop.png"></a>
                                    <a v-else v-on:click="startJob(item)"><img src="image/start.png"></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Modal v-bind:item="instance"></Modal>
        <button type="submit" v-on:click="$emit('update', job)" class="btn btn-success mr-2">Save</button>
    </div>
</template>
<script>

import Modal from './Modal'
import axios from 'axios';

export default {
    name: 'JobDetailCard',
    props: ['job', 'instances'],
    components: {
        Modal
    },
    data() {
        return {
            instance: null,
        }
    },
    methods: {
        startJob(item) {
            this.job['instanceid'] = item.id;
            this.$emit('start', this.job)
        },
        stopJob(item) {
            this.job['instanceid'] = item.id;
            this.$emit('stop', this.job)
        },
        getJobStatus(item) {
            alert(item)
        },
        openModal: function(item){
            axios.get('http://192.168.106.60:8080/api/v1/jobStatus?name=' + this.job.name + '&id=' + item.id)
                .then(response => {
                    this.instance = response.data;
                })
                .catch(error => {
                    alert(error)
            })
            this.showModal = true
        },
        onChangeSchedulerType(e) {
            this.job.scheduler_type = e.target.options.selectedIndex;
        },
        disableEdit(scheduler_type, value_str) {
            if (scheduler_type === 0) {
                return true;
            } else if (scheduler_type === 1) {
                if (value_str === "interval_seconds" || value_str === "interval_minutes") {
                    return false
                }
            } else if (scheduler_type === 2) {
                if (value_str === "hours" || value_str === "minutes") {
                    return false
                }
            } else if (scheduler_type === 3) {
                if (value_str === "hours" || value_str === "minutes" || value_str === "week_day") {
                    return false
                }
            } else if (scheduler_type === 4) {
                if (value_str === "hours" || value_str === "minutes" || value_str === "day_of_month") {
                    return false
                }
            }
            return true
        }
    }
}
</script>