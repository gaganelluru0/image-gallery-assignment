import { shallowMount,createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import SelectedImage from './../../src/components/SelectedImage.vue'
const localVue=createLocalVue()
localVue.use(Vuex)

describe('Tests for SelectedImage.vue component',()=>{
let actions,mutations,getters
let store


beforeEach(()=>{
    actions={
        downloadImage:jest.fn(),
        getImageById:jest.fn()
     },
     mutations={
        deleteImage:jest.fn()
    },
    getters={
        getImage:()=>{
           return   {
              id: "0",
              author: "Alejandro Escamilla",
              width: 5616,
              height: 3744,
              url: "https://unsplash.com/photos/yC-Yzbqy7PY",
              download_url:"https://picsum.photos/id/0/5616/3744"
          }
       },
        getError:()=>{
            return null;
        }    
        
        }
      
   
 store=new Vuex.Store({
        actions,
        getters,
        mutations
    })
})

it('Tests the Download Image functionality',()=>{

    const wrapper=shallowMount(SelectedImage,{store,localVue,propsData:{id:1}})
   wrapper.find('button').trigger('click')
   console.log(wrapper.html())
    expect(actions.downloadImage).toHaveBeenCalled()
    
})

})