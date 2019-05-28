import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Uploader from '@/upload/uploader.vue'
import Vue from 'vue'
import ajax from "../../src/http";
import http from '../../src/http';

chai.use(sinonChai)

describe('Uploader.vue', () => {
    it('存在.', () => {
        expect(Uploader).to.exist
    })
    it('可以上传文件', (done) => {
        let stub = sinon.stub(ajax, 'post').callsFake((url, options) => {
            setTimeout(function () {
                options.success('{"id":"123123"}')
                expect(wrapper.find('use').exists()).to.equal(false)
                expect(wrapper.props().fileList[0].url).to.equal('/preview/123123')
                stub.restore()
                done()
            }, 500)
        })
        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/xxx',
                methon: 'post',
                fileList: [],
                parseResponse: (response) => {
                    let obj = JSON.parse(response)
                    return `/preview/${obj.id}`
                }
            },
            slots: {
                default: `<button id="x">click me</button>`
            },
            listeners: {
                'update:fileList': (fileList) => {
                    wrapper.setProps({ fileList })
                }
            }
        });
        wrapper.find('#x').trigger('click')
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        let file1 = new File(['xxxxxxxxxxx'], 'xxx.txt')
        let file2 = new File(['xxxxxxxxxxx'], 'yyy.txt')
        const data = new DataTransfer()
        data.items.add(file1)
        // data.items.add(file2)
        input.files = data.files
        inputWrapper.trigger('change')
        expect(wrapper.find('use').attributes('href')).to.equal('#i-loading')
    })
})