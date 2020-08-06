<template>
  <div class="layout-container">
    <header class="page-header bg-primary">
      <span class="page-title">VUE CRYPTO DASHBOARD</span>
    </header>
    <div class="page-container">
      <div class="content-box">
        <div class="menu-bar">
          <v-select id="base" placeholder="Select Token"></v-select>
          <span class="slash">/</span>
          <v-select id="quote" style="width: 100px"></v-select>
          <button class="add-btn"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>