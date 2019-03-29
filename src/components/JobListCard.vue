<template id="job-table">
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
                                <td v-on:click="$emit('emit-detail-job', job)" style="cursor: pointer; color: blue"><a>{{ job.name }}</a></td>
                                <td v-if="job.scheduler_type == 0">None</td>
                                <td v-else-if="job.scheduler_type == 1">Interval</td>
                                <td v-else-if="job.scheduler_type == 2">Daily</td>
                                <td v-else-if="job.scheduler_type == 3">Weekly</td>
                                <td v-else-if="job.scheduler_type == 4">Monthly</td>
                                <td>{{ job.is_repeat }}</td>
                                <td>{{ job.created_date}}</td>
                                <td>{{ job.modified_date}}</td>
                                <td>
                                    <label class="badge badge-success">{{ job.status }}</label>
                                </td>
                                <td v-on:click="$emit('emit-run-job', job)" style="cursor: pointer;">
                                    <a v-if="job.status == 'Running'"><img src="image/stop.png"></a>
                                    <a v-else><img src="image/start.png"></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobCard',
    props: ['jobs', 'has_next', 'limit', 'offset'],
}
</script>