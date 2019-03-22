import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
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
describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    describe('props', () => {
        it('接受 selected prop', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
            <g-tabs selected="finance">
                <g-tabs-head>
                    <g-tabs-item name="woman"> 美女 </g-tabs-item>
                    <g-tabs-item name="finance"> 财经 </g-tabs-item>
                    <g-tabs-item name="sports"> 体育 </g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
                    <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
                    <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
            `
            let vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                let e = vm.$el.querySelector('.tabs-item[name="finance"]')
                expect(e.classList.contains('active')).to.be.true
                done()
            })
        })
        it('接受 direction', () => {
            
        })
    })
})