function core(method, url, options) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
        options.success && options.success(xhr.response)
    }
    xhr.onerror = () => {
        options.fail && options.fail(xhr, xhr.response)
    }
    xhr.send(options.data)
}
const http = {
    get() { },
    post(url, options) {
        return core('post', url, options)
    },
    put() { },
    delete() { },
    patch() { }
}
export default http