<template>
  <section class="home__content">
    <h1 class="home__title">
      <img class="home__title__icon" src="@/assets/svgs/icons/search.svg" svg-inline />
      <span>
        Search more than
        <strong>68M</strong>
        users
      </span>
    </h1>

    <form action="/" method="get" class="home__search my-3">
      <input type="text" name="search" class="input-control" />
      <button class="btn ml-2">Search</button>
    </form>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home {
  &__content {
    margin-top: 100px;
    @include media-breakpoint-up(sm) {
      padding: 0 100px;
    }
  }
  &__search {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
    &__icon {
      margin-right: 15px;
    }
  }
}
</style>
