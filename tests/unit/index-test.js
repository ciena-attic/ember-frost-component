const expect = chai.expect

import {describe, it} from 'mocha'
import FrostComponent, {PropTypes} from 'ember-frost-component/components/frost-component'
import FrostComponent2, {PropTypes as PropTypes2} from 'ember-frost-component'

describe('ember-frost-component', function () {
  it('exports FrostComponent as default', function () {
    expect(FrostComponent).to.equal(FrostComponent2)
  })

  it('exports PropTypes', function () {
    expect(PropTypes).to.equal(PropTypes2)
  })
})
