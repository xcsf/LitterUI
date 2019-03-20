let onClickDoc = e => {
    callbacks.forEach(element => {
        let {
            el
        } = element;
        if (e.target === el || el.contains(e.target)) {
            return
        }
        element.callback()
    });
}
document.addEventListener('click', onClickDoc);
let callbacks = []
export default {
    bind: function (el, binding, vnode) {
        callbacks.push({
            el,
            callback: binding.value
        })
    }
}
let removeListener = () => {
    document.removeEventListener('click', onClickDoc)
}
export { removeListener }