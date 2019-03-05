const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

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
    it('可以设置 position.', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div);
        div.innerHTML = `
            <g-popover position="bottom">
                <template slot="content">
                    <div>内容</div>
                </template>
                <button>点我</button>
            </g-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                let contentBox = document.body.lastChild;
                expect(contentBox.classList.contains('position-bottom')).to.be.true
                done()
            })
        })
        // const useElement = vm.$el.querySelector('.content-wrapper')
        // expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        // vm.$el.remove()
        // vm.$destroy()
    })
})