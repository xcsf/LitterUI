import Toast from './toast'
let oToast
export default {
    install(Vue, option) {
        Vue.prototype.$toast = function (message, propsData) {
            if (oToast) {
                oToast.Close()
            }
            oToast = createToast({Vue, message, propsData })
        }
    }
}

function createToast({Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast;
}