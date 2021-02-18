<template>
  <div id="app">
    <b-navbar type="is-light">
      <template slot="brand">
        <b-navbar-item>
          <router-link :to="{path: '/'}">
            <p class="title">GW2 Scratch</p>
          </router-link>
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{path: '/'}">
          Raid Guides
        </b-navbar-item>
      </template>
    </b-navbar>
    <section id="main-section" class="section">
      <router-view/>
    </section>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
</script>

<style>
/* Make sure the footer is the bottom of the page even if there isn't enough content */
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
#main-section {
  flex: 1;
}
</style>