<template>
  <div class="user-data py-4">
    <div class="mr-2">
      <img class="user-data__image" :src="user.avatar_url" :alt="`@${user.login}`" />
    </div>

    <div>
      <div class="d-flex">
        <div class="user-data__name">
          <a v-if="user.user.name" class="mr-1" :href="user.html_url" target="_blank" rel="noopener noreferrer">{{ user.user.name }}</a>

          <a :href="user.html_url" target="_blank" rel="noopener noreferrer" class="handle">{{ user.login }}</a>
        </div>

        <div class="d-flex flex-items-center flex-justify-end flex-shrink-0 flex-auto"></div>
      </div>

      <p v-if="user.user.bio" class="mb-1">{{ user.user.bio }}</p>

      <div class="d-flex flex-wrap text-small color-text-secondary">
        <span v-if="user.user.location" class="mr-3">{{ user.user.location }}</span>
        <span class="mr-3">
          Followers:
          <strong>{{ user.user.followers }}</strong>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-data {
  border-top: 1px solid #e1e4e8;
  display: flex;
  font-weight: 500;
  a {
    color: $blue;
    text-decoration: none;
    transition: all 0.4s;
    &:hover {
      text-decoration: underline;
    }
  }
  &__name {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 12px;
    .handle {
      font-weight: 600;
      color: rgba($color: $dark, $alpha: 0.8);
    }
  }
  .text-small {
    a {
      &:hover {
        text-decoration: underline;
        color: $blue !important;
      }
    }
  }
  &__image {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
