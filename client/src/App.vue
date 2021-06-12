<template>
  <div>
    <nav
      class="
        navbar navbar-dark
        bg-success
        justify-content-between
        flex-nowarp flex-row
      "
    >
      <div class="container justify-content-between">
        <router-link to="/" class="navbar-brand">MEVN</router-link>
        <ul class="nav navbar-nav flex-row">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Create Student</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link">View Student</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>