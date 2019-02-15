const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//sinon》》fake
//sinon-chai》》calledWith
describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接受value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.value).to.equal('1234')
        })

        it('接受disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.disabled).to.equal(true)
        })
        it('接受readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const InputElement = vm.$el.querySelector('input')
            expect(InputElement.readOnly).to.equal(true)
        })
        it('接受error', () => {
            vm = new Constructor({
                propsData: {
                    error: '1234'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.errormessage')
            expect(errorMessage.innerText).to.equal('1234')
        })
    })
    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach(item => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(item, callback)
                let event = new Event(item);
                Object.defineProperty(
                    event, 'target', {
                        value: {
                            value: 'hi'
                        },
                        enumerable: true
                    }
                )
                let InputElement = vm.$el.querySelector('input')
                InputElement.dispatchEvent(event);
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })
})