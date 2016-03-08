const expect = chai.expect

import {afterEach, beforeEach, describe, it} from 'mocha'
import FrostComponent, {helpers, PropTypes} from 'ember-frost-component/components/frost-component'

describe('frost-component', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()

    sandbox.stub(Ember, 'getOwner').returns({
      __container__: {
        lookupFactory () {
          return {
            environment: 'tests'
          }
        }
      }
    })
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('propTypes not defined', function () {
    beforeEach(function () {
      sandbox.spy(helpers, 'validateProperty')
      const Component = FrostComponent.extend()
      Component.create()
    })

    it('does not call validateProperty', function () {
      expect(helpers.validateProperty.called).to.be.false
    })
  })

  describe('propTypes defined but empty', function () {
    beforeEach(function () {
      sandbox.spy(helpers, 'validateProperty')
      const Component = FrostComponent.extend({
        propTypes: {}
      })
      Component.create()
    })

    it('does not call validateProperty', function () {
      expect(helpers.validateProperty.called).to.be.false
    })
  })

  describe('propTypes defined but unknown type', function () {
    beforeEach(function () {
      sandbox.spy(Ember.Logger, 'warn')
      sandbox.spy(helpers, 'validateProperty')
      const Component = FrostComponent.extend({
        propTypes: {
          foo: PropTypes.doesNotExist
        }
      })
      Component.create()
    })

    it('does not call validateProperty', function () {
      expect(helpers.validateProperty.called).to.be.false
    })

    it('logs warning message', function () {
      expect(Ember.Logger.warn.called).to.be.true
    })
  })

  describe('propTypes defined with validations present', function () {
    beforeEach(function () {
      sandbox.spy(helpers, 'validateProperty')
      const Component = FrostComponent.extend({
        propTypes: {
          foo: PropTypes.string,
          bar: PropTypes.number
        }
      })
      Component.create()
    })

    it('calls validateProperty for each propType', function () {
      expect(helpers.validateProperty.called).to.be.true
    })
  })
})
