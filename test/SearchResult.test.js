import {shallowMount} from '@vue/test-utils'
import SearchResult from '@/components/SearchResult.vue'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import users from '@/assets/data/users.sample.json'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

describe('Search Result', () => {
  test('list shows when page loads', async () => {
    const search = 'oluwole'

    const mock = new MockAdapter(axios)
    mock.onGet(`https://api.github.com/search/users?q=${search}&per_page=${10}&page=${1}`).reply(200, {total_count: 110, incomplete_results: false, items: users})
    mock.onGet(`https://api.github.com/users/kingflamez`).reply(200, users[0].user)

    const wrapper = shallowMount(SearchResult, {
      mocks: {
        $route: {
          query: {search}
        }
      }
    })
    expect(wrapper.vm.$data.loading).toBe(true)
    expect(wrapper.vm.$data.users.length).toBe(0)
    await sleep(500)
    expect(wrapper.vm.$data.loading).toBe(false)
    expect(wrapper.vm.$data.users.length).toBeGreaterThan(0)
    expect(wrapper.find('.search__results').exists()).toBe(true)
  })

  test('shows error if API experiences error', async () => {
    const search = 'oluwole'
    const errorMessage = 'Something went wrong'

    const mock = new MockAdapter(axios)
    mock.onGet(`https://api.github.com/search/users?q=${search}&per_page=${10}&page=${1}`).reply(200, {total_count: 110, incomplete_results: false, items: users})
    mock.onGet(`https://api.github.com/users/kingflamez`).reply(500, {message: errorMessage})

    const wrapper = shallowMount(SearchResult, {
      mocks: {
        $route: {
          query: {search}
        }
      }
    })

    expect(wrapper.vm.$data.loading).toBe(true)
    expect(wrapper.vm.$data.users.length).toBe(0)
    expect(wrapper.vm.$data.error).toBe(false)
    expect(wrapper.vm.$data.errorMessage).toBe('')
    await sleep(500)
    expect(wrapper.vm.$data.loading).toBe(false)
    expect(wrapper.vm.$data.users.length).toBe(0)
    expect(wrapper.vm.$data.error).toBe(true)
    expect(wrapper.vm.$data.errorMessage).toBe(errorMessage)
    expect(wrapper.find('.search__error').exists()).toBe(true)
  })
})
