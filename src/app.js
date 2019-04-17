import Button from './button/button'
import ButtonGroup from './button/button-group'
import Cascader from './cascader'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Icon from './icon'
import Input from './input'
import Layout from './layout'
import Plugin from './plugin'
import Popover from './popover'
import Row from './row'
import Sider from './sider'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Toast from './toast'
import Vue from 'vue'
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-button', Button);
Vue.component('g-cascader', Cascader)
Vue.component('g-col', Col);
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-collapse', Collapse)
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-header', Header);
Vue.component('g-icon', Icon);
Vue.component('g-input', Input);
Vue.component('g-layout', Layout);
Vue.component('g-popover', Popover)
Vue.component('g-row', Row);
Vue.component('g-sider', Sider);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-tabs', Tabs);
Vue.component('g-toast', Toast);
Vue.use(Plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: "asd",
        selectedTab: 'finance',
        selectedcoll: ['2', '3'],
        source: [{
            name: '浙江',
            children: [{
                    name: '杭州',
                    children: [{
                            name: '上城'
                        },
                        {
                            name: '下城'
                        },
                        {
                            name: '江干'
                        },
                    ]
                },
                {
                    name: '嘉兴',
                    children: [{
                            name: '南湖'
                        },
                        {
                            name: '秀洲'
                        },
                        {
                            name: '嘉善'
                        },
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [{
                name: '福州',
                children: [{
                        name: '鼓楼'
                    },
                    {
                        name: '台江'
                    },
                    {
                        name: '仓山'
                    },
                ]
            }, ]
        }, {
            name: '安徽',
            children: [{
                name: '合肥',
                children: [{
                    name: '瑶海'
                }, {
                    name: '庐阳'
                }]
            }]
        }]
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