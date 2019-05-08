import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/validate'
chai.use(sinonChai)

describe('Validate', () => {
    it('存在.', () => {
        expect(Validator).to.exist
    })
    it('required true pass', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.exist
    })
    it('required true pass', () => {
        let data = {
            email: 0
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })    
    it('pattern error', () => {
        let data = {
            email: '@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: /^.+@.+$/}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.exist
    })
    it('pattern pass', () => {
        let data = {
            email: '1@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: /^.+@.+$/}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('pattern: email error', () => {
        let data = {
            email: '@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: 'email'}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.pattern).to.exist
    })
    it('pattern: email pass', () => {
        let data = {
            email: '1@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: 'email'}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('required and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', pattern: 'email' , required: true }
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.required).to.exist
        expect(errors.email.pattern).to.not.exist
    })
    it('pattern and minLength', () => {
        let data = {
            email: ''
        }
        let rules = [
            {key: 'email', pattern: 'email' , minLength: 6}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.minLength).to.exist
        expect(errors.email.pattern).to.exist
    })
    it('maxLength', () => {
        let data = {
            email: '1234567'
        }
        let rules = [
            {key: 'email', pattern: 'email' , maxLength: 6}
        ]
        let validator = new Validator()
        let errors = validator.validate(data, rules)
        expect(errors.email.maxLength).to.exist
    })
    it('many keys', () => {
        let data = {
            email: '1234567'
        }
        let rules = [
            { key: 'email', required: true, minLength: 5, maxLength: 6,
              hasNumber: true, hasLowerCaseAndUpperCase: true, hasDot: true, hasUnderscore: true,
              hasFrank: true }
          ]
          let fn = () => {
            let validator = new Validator()
            validator.validate(data, rules)
          }
          expect(fn).to.throw()
    })
    it('自定义测试规则 hasNumber', () => {
        let data = {
          email: 'abcabcabcabc'
        }
        let validator = new Validator()
        validator.hasNumber = (value) => {
          if (!/\d/.test(value)) {
            return '必须含有数字'
          }
        }
        let rules = [{key: 'email', required: true, hasNumber: true}]
        let errors
        let fn = () => {
          errors = validator.validate(data, rules)
        }
        expect(fn).to.not.throw()
        expect(errors.email.hasNumber).to.eq('必须含有数字')
      })
      it('validator 对象相互独立', () => {
        let data = {
          email: 'abcabcabcabc'
        }
        let validator1 = new Validator()
        let validator2 = new Validator()
        validator1.hasNumber = (value) => {
          if (!/\d/.test(value)) {
            return '必须含有数字'
          }
        }
        let rules = [{key: 'email', required: true, hasNumber: true}]
        let errors
        let fn1 = () => {
          errors = validator1.validate(data, rules)
        }
        let fn2 = () => {
            errors = validator2.validate(data, rules)
          }
        expect(fn1).to.not.throw()
        expect(fn2).to.throw()
      })
      it('可以全局添加新规则 add', () => {
        let data = {
          email: 'aaaa'
        }
        let validator1 = new Validator()
        let validator2 = new Validator()
        Validator.add('hasNumber',(value)=>{
            if (!/\d/.test(value)) {
                return '必须含有数字'
            }
        })
        let rules = [{key: 'email', required: true, hasNumber: true}]
        let errors
        let fn1 = () => {
          errors = validator1.validate(data, rules)
        }
        let fn2 = () => {
            errors = validator2.validate(data, rules)
        }
        expect(fn1).to.not.throw()
        expect(fn2).to.not.throw()
      })
})