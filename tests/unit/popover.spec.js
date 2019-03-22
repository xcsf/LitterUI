import chai, {
    expect
} from 'chai'
import {
    shallowMount,
    mount
} from '@vue/test-utils'
import Vue from 'vue'
import Popover from '@/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//如果测css  需要挂载到页面中否则没有css （创建div 将组件mount）
//只能先将div先挂载到document中才能能执行vm.$mounted(el)
describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('可以设置 position.', () => {
        const wrapper = mount(Popover, {
            propsData: {
                position: 'bottom'
            },
            slots: {
                default: '<button>点我</button>',
                content: '<div>内容</div>'
            }
        })
        wrapper.find('button').trigger('click')
        expect(wrapper.find('.content-wrapper').classes()).contain('position-bottom')

        //原始版 供学习
        // Vue.component('g-popover', Popover)
        // const div = document.createElement('div')
        // document.body.appendChild(div);
        // div.innerHTML = `
        //     <g-popover position="bottom">
        //         <template slot="content">
        //             <div>内容</div>
        //         </template>
        //         <button>点我</button>
        //     </g-popover>
        // `
        // const vm = new Vue({
        //     el: div
        // })
        // vm.$nextTick(() => {
        //     vm.$el.querySelector('button').click()
        //     vm.$nextTick(() => {
        //         let contentBox = document.body.lastChild;
        //         expect(contentBox.classList.contains('position-bottom')).to.be.true
        //         done()
        //     })
        // })
    })
    //不会了
    it('可以设置 trigger.', () => {
        const wrapper = mount(Popover, {
            propsData: {
                position: 'bottom',
                trigger: 'hover'
            },
            slots: {
                default: '<button>点我</button>',
                content: '<div>内容</div>'
            }
        })
        expect(wrapper.find('.content-wrapper').exists()).to.be.false
        wrapper.find('.popover').trigger('mouseenter')
        expect(wrapper.find('.content-wrapper').exists()).to.be.true
    })

})