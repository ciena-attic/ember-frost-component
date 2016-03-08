
[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-component.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-component
[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-component.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-component
[npm-img]: https://img.shields.io/npm/v/ember-frost-component.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-component

# ember-frost-component <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

This project aims to make a better Ember  base component to extend.

## Installation

```bash
ember install ember-frost-component
```

## Usage

### Better Components

Below is an example of a component that extends the component from this addon:

```js
import FrostComponent, {PropTypes} from 'ember-frost-component'

export default FrostComponent.extend({
  propTypes: {
    foo: PropTypes.string,
    bar: PropTypes.number.isRequired,
    baz: PropTypes.oneOf([
      PropTypes.bool,
      PropTypes.string
    ])
  },

  getDefaultProps () {
    return {
      foo: 'This is going to be highly profitable'
    }
  }
})
```

#### Property Validation

The idea of *propTypes* comes from the world of React and is implemented to have an almost identical API in the Ember world. Below is a list of possible *propTypes* to validate against.

* array
* bool
* EmberObject
* func
* number
* object
* oneOf
* string

#### Default Property Values

In Ember you can set default property values on a component class itself but sometimes this bites you when you end up with a property containing an array of selected items or a state object, where all instances of the component end up sharing that same array or object. Uncovering this issue is not always an easy task and so *getDefaultProps* was also implemented (thanks to the React team for this concept as well).
