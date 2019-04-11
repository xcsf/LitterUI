import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Toast from '@/toast'
chai.use(sinonChai)

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
            //原始版
            // const div = document.createElement('div')
            // document.body.appendChild(div)
            // const Constuctor = Vue.extend(Toast)
            // const vm = new Constuctor({
            //     propsData: {
            //         autoClose: 1
            //     }
            // }).$mount(div)
            // vm.$on('close', () => {
            //     expect(document.body.contains(vm.$el)).to.eq(false)
            //     done()
            // })

            const wrapper = mount(Toast, {
                propsData: {
                    autoClose: 0.01
                }
            })
            const callback = sinon.fake()
            wrapper.vm.$on('close', () => {
                callback()
            })
            setTimeout(() => {
                expect(callback).to.have.been.called;
                wrapper.destroy()
                done()
            }, 11)
        })
        it('接受 closeButton', () => {
            // const Constuctor = Vue.extend(Toast)
            // const callback = sinon.fake();
            // const vm = new Constuctor({
            //     propsData: {
            //         closeButton: {
            //             text: 'close',
            //             callback
            //         }
            //     }
            // }).$mount()
            // const closeButton = vm.$el.querySelector('.close')
            // expect(closeButton.textContent.trim()).to.eq('close')
            // //防止toast组件下nextTick方法在读取$refs.line前click关闭
            // //导致$refs.line为undefined
            // //添加200ms时间延长执行
            // setTimeout(() => {
            //     closeButton.click();
            //     expect(callback).to.have.been.called
            //     done()
            // }, 200)

            const callback = sinon.fake()
            const wrapper = mount(Toast, {
                propsData: {
                    closeButton: {
                        text: 'close',
                        callback
                    }
                }
            })
            const closeButton = wrapper.find('.close')
            expect(closeButton.element.textContent.trim()).to.eq('close')
            closeButton.trigger('click')
            expect(callback).to.have.been.called
            wrapper.destroy()
        })
        xit('接受 enableHtml', () => {
            // const Constuctor = Vue.extend(Toast)
            // const vm = new Constuctor({
            //     propsData: {
            //         enableHtml: true
            //     }
            // })
            // vm.$slots.default = ['<strong id="test">test</strong>']
            // vm.$mount()
            // //如果能选择到strong  他就是标签 否则是文本
            // const strong = vm.$el.querySelector('#test')
            // expect(strong).to.exist


            const wrapper = mount(Toast, {
                propsData: {
                    enableHtml: true
                },
                slots: {
                    default: [`<strong id="test">hi</strong>`],
                }
            })
            console.log('插件不会测')
            console.log(wrapper.vm.$slots.default)
            let strong = wrapper.vm.$el.querySelector('#test')
            expect(strong).to.exist
            // expect(wrapper.find('strong')).to.exist
            wrapper.destroy()
        })
        it('接受 position bottom', () => {
            // const div = document.createElement('div')
            // document.body.appendChild(div)
            // const Constuctor = Vue.extend(Toast)
            // const vm = new Constuctor({
            //     propsData: {
            //         position: 'bottom'
            //     }
            // }).$mount(div)
            // expect(vm.$el.classList.contains('position-bottom')).to.eq(true)

            const wrapper = mount(Toast, {
                propsData: {
                    position: 'bottom'
                }
            })
            expect(wrapper.contains('.position-bottom')).to.eq(true)
            wrapper.destroy()
        })
        it('接受 position top', () => {
            // const div = document.createElement('div')
            // document.body.appendChild(div)
            // const Constuctor = Vue.extend(Toast)
            // const vm = new Constuctor({
            //     propsData: {
            //         position: 'top'
            //     }
            // }).$mount(div)
            // expect(vm.$el.classList.contains('position-top')).to.eq(true)

            const wrapper = mount(Toast, {
                propsData: {
                    position: 'top'
                }
            })
            expect(wrapper.contains('.position-top')).to.eq(true)
            wrapper.destroy()
        })
        it('接受 position middle', () => {
            // const div = document.createElement('div')
            // document.body.appendChild(div)
            // const Constuctor = Vue.extend(Toast)
            // const vm = new Constuctor({
            //     propsData: {
            //         position: 'middle'
            //     }
            // }).$mount(div)
            // expect(vm.$el.classList.contains('position-middle')).to.eq(true)

            const wrapper = mount(Toast, {
                propsData: {
                    position: 'middle'
                }
            })
            expect(wrapper.contains('.position-middle')).to.eq(true)
            wrapper.destroy()
        })
    })
})