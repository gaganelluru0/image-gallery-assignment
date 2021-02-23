import {shallowMount} from '@vue/test-utils'
import PageNotFound from './../../src/components/PageNotFound.vue'

describe('Test For PageNotFound.vue component',()=>{
    it('Test for the display text',()=>{
        const wrapper=shallowMount(PageNotFound)
        expect(wrapper.html()).toContain('Page Not Found')
    })
})