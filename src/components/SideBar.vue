<template id="sidebar-component">
    <ul class="nav">
        <li class="nav-item nav-profile">
            <div class="nav-link">
                <div class="user-wrapper">
                    <div class="profile-image">
                        <img src="image/face1.jpg" alt="profile image">
                    </div>
                    <div class="text-wrapper">
                        <p class="profile-name">{{ user.fullname }}</p>
                        <div>
                            <small class="designation text-muted">Data Engineer</small>
                            <span class="status-indicator online"></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="$emit('update-data')" >
                <i class="menu-icon mdi mdi-television"></i>
                <span class="menu-title">Dashboard</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="$emit('enable-search')">
                <i class="menu-icon mdi-file-find"></i><span class="menu-title">Search</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="menu-icon mdi mdi-logout"></i><span class="menu-title">Logout</span></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideBar',
    props: ['user'],
}
</script>