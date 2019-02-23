import Toast from './toast'
let oToast
export default {
    install(Vue, option) {
        Vue.prototype.$toast = function (message, propsData) {
            if (oToast) {
                console.log(oToast)
                oToast.Close()
            }
            oToast = createToast({
                Vue,
                message,
                propsData,
                onClose: () => {
                    oToast = null;
                }
            })
        }
    }
}

function createToast({
    Vue,
    message,
    propsData,
    onClose
}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose);
    document.body.appendChild(toast.$el)
    return toast;
}