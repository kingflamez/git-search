import { mount } from '@vue/test-utils'
import SearchForm from '@/components/SearchForm.vue'

describe('Search Form', () => {
  test('form exists', () => {
    const wrapper = mount(SearchForm)
    const form = wrapper.find('form')

    expect(form).toBeTruthy()
  })

  test('form is a get request', () => {
    const wrapper = mount(SearchForm)
    const form = wrapper.find('form')
    expect(form.attributes().method).toBe('get')
  })

  test('form submits to the index page', () => {
    const wrapper = mount(SearchForm)
    const form = wrapper.find('form')
    expect(form.attributes().action).toBe('/')
  })

  test('input field exists', () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input')
    expect(input).toBeTruthy()
  })

  test('input field has the name property', () => {
    const wrapper = mount(SearchForm)
    const input = wrapper.find('input')
    expect(input.attributes().name).toBe('search')
  })

  test('button exists', () => {
    const wrapper = mount(SearchForm)
    const button = wrapper.find('button')
    expect(button).toBeTruthy()
  })
})
