<template>
  <nav class="navbar">
    <nuxt-link to="/"><img class="navbar__logo" src="@/assets/svgs/logo/github.svg" svg-inline /></nuxt-link>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: $dark;
  padding: 12px 32px;
  text-align: center;
  &__logo {
    path {
      fill: white;
    }
  }
}
</style>
