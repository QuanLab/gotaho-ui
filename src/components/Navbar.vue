<template>
    <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
            <a class="navbar-brand brand-logo" href="#" v-on:click="$emit('update-data')">
                    <img src="image/logo_five9.png" alt="logo">
                </a>
            <a class="navbar-brand brand-logo-mini" href="#">
                    <img src="image/logo-mini.svg" alt="logo">
                </a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center">
            <ul class="navbar-nav navbar-nav-left header-links d-none d-md-flex">
<!--                 <li class="nav-item">
                    <a href="#" class="nav-link">Dashboard<span class="badge badge-primary ml-1">New</span></a>
                </li> -->
<!--                 <li class="nav-item active">
                    <a href="#" class="nav-link"><i class="mdi mdi-elevation-rise"></i>Reports</a>
                </li> -->
<!--                 <li class="nav-item">
                    <a href="#" class="nav-link" v-on:click="$emit('enable-search')"><i class="mdi mdi-bookmark-plus-outline"></i>Search</a>
                </li> -->
            </ul>
            <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item dropdown">
                    <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown"
                           href="#" data-toggle="dropdown">
                            <i class="mdi mdi-bell"></i><span class="count">{{ notifications.length }}</span>
                        </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                        <a class="dropdown-item">
                                <p class="mb-0 font-weight-normal float-left">
                                    You have {{ notifications.length }} new notifications
                                </p>
                                <span class="badge badge-pill badge-warning float-right" v-on:click="$emit('view-notifications')">View all</span>
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
                        <a class="dropdown-item">Sign Out</a>
                    </div>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props :['user', 'notifications'],
}
</script>