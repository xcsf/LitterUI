import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Row from '@/grid/row'
import Col from '@/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//sinon》》fake
//sinon-chai》》calledWith
//只能先将div先挂载到document中才能能执行vm.$mounted(el)
describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接受span属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)

        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 narrowPc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-narrow-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 widePc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-wide-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-wide-pc-2')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接受 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: {
                    span: 1,
                    offset: 2
                }
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-ipad-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-2')).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })
})