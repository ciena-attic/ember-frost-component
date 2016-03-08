# ember-frost-component

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
