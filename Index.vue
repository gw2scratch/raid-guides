<template>
  <div class="columns">
    <div class="column is-half">
      <div class="content">
        <b-notification type="is-warning" has-icon>
          This is the raid guide core.
        </b-notification>
      </div>
      <div>
        <router-link :to="{name: 'vale-guardian'}">Vale Guardian Guide</router-link>
      </div>
      <div>
        <router-link :to="{name: 'gorseval'}">Gorseval Guide</router-link>
      </div>
    </div>
    <div class="column is-half">
      <div class="content">
        <b-notification type="is-warning" has-icon>
          This is the raid guide core.
        </b-notification>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RaidGuideIndex"
}
</script>

<style scoped>

</style>