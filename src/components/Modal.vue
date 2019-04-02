<template>
  <div class="modal" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Instance information</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <pre>{{ item.logging_string }}</pre>
          <p><img v-bind:src="'data:image/jpeg;base64,'+ item.job_image" /></p>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: ['item'],
}
</script>