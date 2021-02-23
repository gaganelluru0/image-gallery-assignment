import { shallowMount,createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import ImageList from './../../src/components/ImageList.vue'

const localVue=createLocalVue()
localVue.use(Vuex)
describe("Test for ImageList.vue component",()=>{

    let actions,getters,mutations
    let store

beforeEach(()=>{
    mutations={
        changeUrlToNext:jest.fn(),
        changeUrlToPrevious:jest.fn(),
        changePageLimit:jest.fn()
    }
    getters={
       getPageNumber:()=>2,
       getPageUrl:()=>{ return 'https://picsum.photos/v2/list?page=1&limit=30'},
       getImages:()=>{
           return [{
            id: "0",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/0/5616/3744"
        },
        {
            id: "1",
            author: "Alejandro Escamilla",
            width: 5616,
            height: 3744,
            url: "https://unsplash.com/photos/yC-Yzbqy7PY",
            download_url:"https://picsum.photos/id/1/5616/3744"
        }]
       },
       getError:()=>{return null}
    }
    actions={
        getImagesData:jest.fn(),

    }
   
    store=new Vuex.Store({
        actions,
        mutations,
        getters
    })
})

it('Test for Next button in ImageList.vue component',()=>{
    const wrapper=shallowMount(ImageList,{store,localVue})
    wrapper.find('#next').trigger('click')
   expect(mutations.changeUrlToNext).toHaveBeenCalled()
    
})
it('Test for Previous button in ImageList.vue component',()=>{
    const wrapper=shallowMount(ImageList,{store,localVue})
    wrapper.find('#prev').trigger('click')
   expect(mutations.changeUrlToPrevious).toHaveBeenCalled()
    
})
it('Test for Limit input in ImageList.vue component',()=>{
    const wrapper=shallowMount(ImageList,{store,localVue})
    wrapper.setData({limit:30})
    console.log(wrapper.html())
     const input=wrapper.find('#limit').trigger('input')
     
     expect(mutations.changePageLimit).toHaveBeenCalled()
})
})