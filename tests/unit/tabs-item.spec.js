import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
// import Vue from 'vue'
import Tabs from '@/tabs'
import TabsHead from '@/tabs-head'
import TabsBody from '@/tabs-body'
import TabsItem from '@/tabs-item'
import TabsPane from '@/tabs-pane'
chai.use(sinonChai)
// Vue.component('g-tabs', Tabs);
// Vue.component('g-tabs-head', TabsHead);
// Vue.component('g-tabs-body', TabsBody);
// Vue.component('g-tabs-item', TabsItem);
// Vue.component('g-tabs-pane', TabsPane);
// Vue.config.productionTip = false
// Vue.config.devtools = false

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
            // const Constructor = Vue.extend(TabsItem)
            // const vm = new Constructor({
            //     propsData: {
            //         name: 'xxx'
            //     }
            // }).$mount()
            const wrapper = mount(TabsItem, {
                propsData: {
                    name: 'xxx'
                }
            })
            expect(wrapper.attributes('name')).to.equal('xxx')
            wrapper.destroy()
        })
        it('接受 disabled prop', () => {
            // const Constructor = Vue.extend(TabsItem)
            // const vm = new Constructor({
            //     propsData: {
            //         disabled: true
            //     }
            // }).$mount()
            const wrapper = mount(TabsItem, {
                propsData: {
                    disabled: true
                }
            })
            expect(wrapper.contains('.disabled')).to.be.true
            const callback = sinon.fake();
            wrapper.vm.$on('click', callback)
            wrapper.trigger('click')
            expect(callback).to.have.not.been.called
            wrapper.destroy()
        })
    })
})