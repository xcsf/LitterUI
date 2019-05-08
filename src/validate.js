class Validator{
    constructor (){}
    validate(data, rules) {
        let errors = {}
        rules.forEach((rule) => {
            let value = data[rule.key]
            if (rule.required) {
                let error = this.required(value)
                if(error) {
                    ensureObj(errors, rule.key)
                    errors[rule.key].required = error
                    return 
                }
            }
            let validators = Object.keys(rule).filter(key => key !=='key' && key !== 'required')
            validators.forEach((validatorKey)=>{
                if(this[validatorKey]){
                    let error = this[validatorKey](value, rule[validatorKey])
                    if(error) {
                        ensureObj(errors, rule.key)
                        errors[rule.key][validatorKey] = error
                    }
                }else{
                    throw `不存在的校验器: ${validatorKey}`
                }
            })
        })
        return errors;
    }
    static add(name,fn){
        this.prototype[name] = fn;
    }
    required(value)  {
        if (value !== 0 && !value){
            return '必填'
        }
    }
    pattern(value, pattern) {
        if (pattern === 'email') {
            pattern = /^.+@.+$/
        }
        if(pattern.test(value) === false) {
            return '格式不正确'
        }
    }
    minLength (value, minLength){
        if(value.length < minLength){
            return '长度不够'
        }
    }
    maxLength (value, minLength) {
        if(value.length > minLength){
            return '长度限制'
        }
    }
}
function ensureObj (obj, key) {
    if (typeof obj[key] !== 'object'){
        obj[key] = {}
    }
}

export default Validator

// export default function validate(data, rules) {
//     let errors = {}
//     rules.forEach((rule) => {
//         let value = data[rule.key] 
//         if (rule.required) {
//             let error = validate.required(value)
//             if(error) {
//                 ensureObj(errors, rule.key)
//                 errors[rule.key].required = error
//                 return 
//             }
//         }
//         let validators = Object.keys(rule).filter(key => key !=='key' && key !== 'required')
//         validators.forEach((validatorKey)=>{
//             if(validate[validatorKey]){
//                 let error = validate[validatorKey](value, rule[validatorKey])
//                 if(error) {
//                     ensureObj(errors, rule.key)
//                     errors[rule.key][validatorKey] = error
//                 }
//             }else{
//                 throw `不存在的校验器: ${validatorKey}`
//             }
//         })
//     })
//     return errors;
// }

// validate.required = (value) => {
//     if (value !== 0 && !value){
//         return '必填'
//     }
// }
// validate.pattern = (value, pattern) => {
//     if (pattern === 'email') {
//         pattern = /^.+@.+$/
//     }
//     if(pattern.test(value) === false) {
//         return '格式不正确'
//     }
// }
// validate.minLength = (value, minLength) => {
//     if(value.length < minLength){
//         return '长度不够'
//     }
// }
// validate.maxLength = (value, minLength) => {
//     if(value.length > minLength){
//         return '长度限制'
//     }
// }
// function ensureObj (obj, key) {
//     if (typeof obj[key] !== 'object'){
//         obj[key] = {}
//     }
// }