const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//sinon》》fake
//sinon-chai》》calledWith
//只能先将div先挂载到document中才能能执行vm.$mounted(el)
//异步throw new Error 捕捉不到
describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.ok
    })
    describe('props', () => {
        it('接受 name prop', () => {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    name: 'xxx'
                }
            }).$mount()
            expect(vm.$el.getAttribute('name')).to.equal('xxx')
            vm.$el.remove()
            vm.$destroy()
        })
        it('接受 disabled prop', () => {
            const Constructor = Vue.extend(TabsItem)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            console.log(vm.$el)
            expect(vm.$el.classList.contains('disabled')).to.be.true
            const callback = sinon.fake();
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
            vm.$el.remove()
            vm.$destroy()
        })
    })
})