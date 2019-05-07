import chai, { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validate from '../../src/validate'
chai.use(sinonChai)

describe('Validate', () => {
    it('存在.', () => {
        expect(validate).to.exist
    })
    it('required true pass', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let errors = validate(data, rules)
        expect(errors.email.required).to.exist
    })
    it('required true pass', () => {
        let data = {
            email: 0
        }
        let rules = [
            { key: 'email', required: true }
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })    
    it('pattern error', () => {
        let data = {
            email: '@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.exist
    })
    it('pattern pass', () => {
        let data = {
            email: '1@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: /^.+@.+$/}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('pattern: email error', () => {
        let data = {
            email: '@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email.pattern).to.exist
    })
    it('pattern: email pass', () => {
        let data = {
            email: '1@frank.co,'
        }
        let rules = [
            { key: 'email', pattern: 'email'}
        ]
        let errors = validate(data, rules)
        expect(errors.email).to.not.exist
    })
    it('required and pattern', () => {
        let data = {
            email: ''
        }
        let rules = [
            { key: 'email', pattern: 'email' , required: true }
        ]
        let errors = validate(data, rules)
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
        let errors = validate(data, rules)
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
        let errors = validate(data, rules)
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
})