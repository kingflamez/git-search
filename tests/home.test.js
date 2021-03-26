import {get, setupTest} from '@nuxt/test-utils'

describe('ssr', () => {
  setupTest({server: false})

  it('renders the index page', async () => {
    const {body} = await get('/')

    expect(body).toContain('Search more than')
  })
})
