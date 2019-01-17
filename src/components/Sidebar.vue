<template>
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
</template>

<script>
export default {
    name: 'Navbar',
    props: ['user'],
}
</script>