import {mount, RouterLinkStub} from '@vue/test-utils'
import axios from 'axios'
import users from '@/assets/data/users.sample.json'
import Pagination from '@/components/Search/Pagination.vue'
import MockAdapter from 'axios-mock-adapter'

describe('Search Form', () => {
  test('previous page disabled on page 1', () => {
    const search = 'oluwole'

    const mock = new MockAdapter(axios)
    mock.onGet(`https://api.github.com/search/users?q=${search}&per_page=${10}&page=${1}`).reply(200, {total_count: 110, incomplete_results: false, items: users})
    mock.onGet(`https://api.github.com/users/kingflamez`).reply(200, users[0].user)

    const wrapper = mount(Pagination, {
      mocks: {
        $route: {
          query: {search}
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        pages: 3,
        page: 1
      }
    })

    const previousPageButton = wrapper.find('.previous_page')
    expect(previousPageButton.attributes().class).toBe('previous_page disabled')
  })

  test('next page enabled on first page', () => {
    const search = 'oluwole'

    const mock = new MockAdapter(axios)
    mock.onGet(`https://api.github.com/search/users?q=${search}&per_page=${10}&page=${1}`).reply(200, {total_count: 110, incomplete_results: false, items: users})
    mock.onGet(`https://api.github.com/users/kingflamez`).reply(200, users[0].user)

    const wrapper = mount(Pagination, {
      mocks: {
        $route: {
          query: {search}
        }
      },
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: {
        pages: 3,
        page: 1
      }
    })

    const nextPageButton = wrapper.find('.next_page')
    expect(nextPageButton.attributes().class).toBe('next_page')
  })
})
