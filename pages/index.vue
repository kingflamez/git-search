<template>
  <div>
    <Header />
    <main class="container">
      <SearchResult v-if="$route.query.search" />
      <SearchForm v-else />
      <Footer />
    </main>
  </div>
</template>

<script>
export default {}
</script>
