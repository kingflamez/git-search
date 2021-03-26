<template>
  <div>
    <Header />
    <main class="container">
      <transition name="fade-slide-up" mode="out-in">
        <SearchResult v-if="$route.query.search" />
        <SearchForm v-else />
      </transition>
      <Footer />
    </main>
  </div>
</template>

<script>
export default {}
</script>
