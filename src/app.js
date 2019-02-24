import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'

import Row from './row'
import Col from './col'

import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'
import Plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-layout', Layout);
Vue.component('g-toast', Toast);
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: "asd"
    },
    methods: {
        inputchange() {},
        showToast1() {
            this.showToast('top');
        },
        showToast2() {
            this.showToast('middle');
        },
        showToast3() {
            this.showToast('bottom');
        },
        showToast(position) {
            this.$toast('<p>html标签<a target="_blank" href="https://www.baidu.com">百度一</a></p><p>html标签<a target="_blank" href="https://www.baidu.com">百度一下</a></p>', {
                position,
                closeButton: {
                    text: '点击关闭',
                    callback() {
                        console.log('点击关闭回调');
                    }
                },
                enableHtml: false,
                autoClose: 1,
            });
        }
    },
    created() {}
})