const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

//karma》》 karmaj.conf.js 》》打开浏览器
//BDD 行为驱动测试 Mocha》》describe、it
//chai》》expect。。。。
//sinon》》fake
//sinon-chai》》calledWith
describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接受gutter属性', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            console.log(vm.$el.outerHTML)
            const cols = vm.$el.querySelectorAll('.col')
            const rows = vm.$el.querySelector('.row')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            expect(getComputedStyle(rows).marginRight).to.eq('-10px')
            expect(getComputedStyle(rows).marginLeft).to.eq('-10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
    it('接受align属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constuctor = Vue.extend(Row)
        const vm = new Constuctor({
            propsData: {
                align: "right"
            }
        }).$mount(div)
        expect(getComputedStyle(vm.$el).justifyContent).to.be.eq('flex-end')
        div.remove()
        vm.$destroy()
    })
})