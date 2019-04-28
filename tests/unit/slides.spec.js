import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

import Slides from '@/slides/slides.vue'
import SlidesItem from '@/slides/slides-item.vue'
import Vue from 'vue'
chai.use(sinonChai)

describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })

    it('接受 GuluSlidesItem 默认展示第一个', () => {
        Vue.component('g-slides-item', SlidesItem)
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.equal(true)
            wrapper.destroy()
        }, 0)
    })

    it('接受 selected', () => {
        Vue.component('g-slides-item', SlidesItem)
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: 'second'
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            wrapper.destroy()
        })
    })

    it('点击第二个span 展示第二个item', () => {
        Vue.component('g-slides-item', SlidesItem)
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            },
            listeners: {
                'update:selected': (val) => {
                    expect(val).to.eq('second')
                    wrapper.destroy()
                }
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
        })
    })

    it('自动播放', () => {
        Vue.component('g-slides-item', SlidesItem)
        const callback = sinon.fake()
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('second')
            wrapper.destroy()
        }, 21)
    })

    it('可以点击上一张', () => {
        Vue.component('g-slides-item', SlidesItem)
        const callback = sinon.fake()
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        wrapper.find('.slides-dots span:first-child').trigger('click')
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('third')
            wrapper.destroy()
        }, 21)
    })
    it('可以点击下一张', () => {
        Vue.component('g-slides-item', SlidesItem)
        const callback = sinon.fake()
        let wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
            },
            slots: {
                default: `
                    <g-slides-item name="first">
                        <div class="box1">0</div>
                    </g-slides-item>
                    <g-slides-item name="second">
                        <div class="box2">1</div>
                    </g-slides-item>
                    <g-slides-item name="third">
                        <div class="box3">2</div>
                    </g-slides-item>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        wrapper.find('.slides-dots >span:last-child').trigger('click')
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('second')
            wrapper.destroy()
        }, 21)
    })
})