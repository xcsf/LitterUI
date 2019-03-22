import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//sinon》》fake
//sinon-chai》》calledWith
describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })
    describe('props', function () {
        it('接受autoClose', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constuctor = Vue.extend(Toast)
            const vm = new Constuctor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton', (done) => {
            const Constuctor = Vue.extend(Toast)
            const callback = sinon.fake();
            const vm = new Constuctor({
                propsData: {
                    closeButton: {
                        text: 'close',
                        callback
                    }
                }
            }).$mount()
            const closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('close')
            //防止toast组件下nextTick方法在读取$refs.line前click关闭
            //导致$refs.line为undefined
            //添加200ms时间延长执行
            setTimeout(() => {
                closeButton.click();
                expect(callback).to.have.been.called
                done()
            }, 200)
        })
        it('接受 closeButton', () => {
            const Constuctor = Vue.extend(Toast)
            const vm = new Constuctor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">test<strong>']
            vm.$mount()
            //如果能选择到strong  他就是标签 否则是文本
            const strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接受 position', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constuctor = Vue.extend(Toast)
            const vm = new Constuctor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
        it('接受 position', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constuctor = Vue.extend(Toast)
            const vm = new Constuctor({
                propsData: {
                    position: 'top'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
        })
        it('接受 middle', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constuctor = Vue.extend(Toast)
            const vm = new Constuctor({
                propsData: {
                    position: 'middle'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })
})