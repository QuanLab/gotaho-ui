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
                                    <select class="form-control">
                                        <option :selected="job.scheduler_type === 0">No Scheduling</option>
                                        <option :selected="job.scheduler_type === 1">Interval</option>
                                        <option :selected="job.scheduler_type === 2">Daily</option>
                                        <option :selected="job.scheduler_type === 3">Weekly</option>
                                        <option :selected="job.scheduler_type === 4">Monthly</option>
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
                                    <input type="text" class="form-control" :value="job.interval_minutes" disabled>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Hours</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.hours" disabled>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Minutes</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" :value="job.minutes" disabled>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label">Day of week</label>
                                <div class="col-sm-9">
                                    <select class="form-control">
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
                                    <input type="text" class="form-control" :value="job.day_of_month" disabled>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobDetailCard',
    props :['job'],
    data() {
        return {
            is_saved : false,
        }
    },
    methods: {
        disableEdit(scheduler_type, value_str) {
            if (scheduler_type ===  0) {
                return true;
            } else if (scheduler_type === 1) {
                if(value_str === "interval_seconds" || value_str === "interval_minutes") {
                    return false
                } else {
                    return true
                }
            }
            return false
        }
    }
}
</script>