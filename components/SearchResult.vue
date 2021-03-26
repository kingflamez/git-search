<template>
  <section class="search">
    <loader v-if="loading" />
    <div v-else-if="error" class="search__error">
      <img src="https://cdn.dribbble.com/users/983676/screenshots/5253029/puddle-mona.png?compress=1&resize=800x600" alt="Rate Limiting Error" />
      <h1 class="mt-4">Opps</h1>
      <p class="color-text-secondary mt-3">{{ errorMessage }}</p>
    </div>
    <div v-else>
      <h1 class="search__results">
        Search Results: {{ totalCount }}
        {{ totalCount === 1 ? 'User' : 'Users' }}
      </h1>
      <user-data v-for="user in users" :key="user.id" :user="user" />
      <pagination v-if="pages > 1" :page="page" :pages="pages" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Loader from './Loader.vue'
import Pagination from './Search/Pagination.vue'
import UserData from './Search/UserData.vue'

export default {
  components: {UserData, Pagination, Loader},
  data() {
    return {
      loading: true,
      totalCount: 0,
      page: 1,
      pages: 1,
      error: false,
      errorMessage: '',
      users: []
    }
  },
  watch: {
    $route(to, from) {
      // watches for change in query changes and calls the search method
      this.search()
    }
  },
  async mounted() {
    await this.search()
  },
  methods: {
    async search() {
      try {
        this.loading = true
        const search = this.$route.query.search
        const page = this.$route.query.page ? parseInt(this.$route.query.page) : 1
        const perPage = 10

        const {data} = await axios.get(`https://api.github.com/search/users?q=${search}&per_page=${perPage}&page=${page}`)

        // the data does not come with the full user details, this fetches all the full user details
        const items = await Promise.all(
          data.items.map(async item => {
            const user = await axios.get(item.url)

            item.user = user.data
            return item
          })
        )

        this.totalCount = data.total_count
        this.users = items
        this.page = page
        this.loading = false
        // get the total number of pages with the total count provided
        this.pages = Math.ceil(this.totalCount / perPage)
      } catch (error) {
        // incase of rate limiting, give a good error feedback
        this.error = true
        this.loading = false
        this.errorMessage = error.response.data.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  margin-top: 30px;
  @include media-breakpoint-up(sm) {
    padding: 0 100px;
  }
  &__results {
    margin-bottom: 20px;
  }
  &__error {
    text-align: center;
    img {
      display: block;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
