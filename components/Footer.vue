<template>
  <footer class="footer">
    <nuxt-link to="/"><img class="footer__logo" src="@/assets/svgs/logo/github.svg" svg-inline /></nuxt-link>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 8px;
  border-top: 1px solid #eaecef;
  color: rgba($color: $dark, $alpha: 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @include media-breakpoint-up(sm) {
    margin-top: 100px;
  }
  &__logo {
    margin-bottom: 20px;
    height: 30px;
    path {
      fill: #d1d5da;
    }
  }
}
</style>
