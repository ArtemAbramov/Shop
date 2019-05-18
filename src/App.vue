<template>
  <div class="wrapper">
    <!-- Header -->

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Vue-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for='link in links' :key="link.title">
                <router-link class="navbar-link" :title='link.title' :to='link.url'>{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- Footer -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {title: 'Home', url: '/'},
        {title: 'Shop', url: '/shop'}
      ]
    }
  }
};
</script>

<style lang='scss'>
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
