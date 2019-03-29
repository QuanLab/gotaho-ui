<template>
    <div class="footer-paginaton">
        <ul class="pagination justify-content-center">
            <li class="page-item disabled" v-if="offset == 0">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item" v-else>
                <a class="page-link" tabindex="-1" v-on:click="$emit('change-offset', -1)">Previous</a>
            </li>
            <li class="page-item"><a class="page-link">{{ offset/limit + 1 }}</a></li>
            <li class="page-item" v-if="has_next == true" v-on:click="$emit('change-offset', 1)">
                <a class="page-link">{{ offset/limit + 2}}</a>
            </li>
            <li class="page-item"><a class="page-link">...</a></li>
            <li class="page-item" v-if="has_next == true">
                <a class="page-link" v-on:click="$emit('change-offset', 1)">Next</a>
            </li>
            <li class="page-item disabled" v-else>
                <a class="page-link" tabindex="-1">Next</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['limit', 'offset', "has_next"],
}
</script>