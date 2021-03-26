<template>
  <div class="pagination">
    <div role="navigation" aria-label="Pagination" class="d-flex d-md-inline-block pagination__container">
      <span v-if="page <= 1" class="previous_page disabled">Previous</span>
      <nuxt-link v-else class="previous_page" :to="`/?search=${$route.query.search}&page=${page - 1}`">Previous</nuxt-link>
      <em class="current">{{ page }}</em>
      <nuxt-link v-if="pages != page" class="next_page" :to="`/?search=${$route.query.search}&page=${page + 1}`">Next</nuxt-link>
      <span v-else class="next_page disabled">Next</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  },
  computed: {
    gapsPresent() {
      if (this.pages > 7) {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;
  &__container {
    text-align: center;
    justify-content: center;
  }
  a,
  em,
  span {
    text-decoration: none;
    display: inline-block;
    color: $dark;
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    color: var(--color-text-primary);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  }
  a:focus,
  a:hover {
    text-decoration: none;
    border-color: #e1e4e8;
    outline: 0;
    transition-duration: 0.1s;
  }
  .current {
    color: white;
    background-color: $blue;
  }
  .next_page,
  .previous_page {
    color: $blue;
  }

  .next_page:after,
  .previous_page:before {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
    content: '';
    background-color: currentColor;
  }
  .previous_page:before {
    margin-right: 4px;
    -webkit-clip-path: polygon(9.8px 12.8px, 8.7px 12.8px, 4.5px 8.5px, 4.5px 7.5px, 8.7px 3.2px, 9.8px 4.3px, 6.1px 8px, 9.8px 11.7px, 9.8px 12.8px);
    clip-path: polygon(9.8px 12.8px, 8.7px 12.8px, 4.5px 8.5px, 4.5px 7.5px, 8.7px 3.2px, 9.8px 4.3px, 6.1px 8px, 9.8px 11.7px, 9.8px 12.8px);
  }

  .next_page:after {
    margin-left: 4px;
    -webkit-clip-path: polygon(6.2px 3.2px, 7.3px 3.2px, 11.5px 7.5px, 11.5px 8.5px, 7.3px 12.8px, 6.2px 11.7px, 9.9px 8px, 6.2px 4.3px, 6.2px 3.2px);
    clip-path: polygon(6.2px 3.2px, 7.3px 3.2px, 11.5px 7.5px, 11.5px 8.5px, 7.3px 12.8px, 6.2px 11.7px, 9.9px 8px, 6.2px 4.3px, 6.2px 3.2px);
  }
  .disabled,
  .disabled:hover,
  .gap,
  .gap:hover,
  [aria-disabled='true'],
  [aria-disabled='true']:hover {
    color: #959da5;
  }
}
</style>
