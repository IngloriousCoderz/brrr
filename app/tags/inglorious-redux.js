var deepValue = function(obj, path) {
  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    obj = obj[path[i]]
  }
  return obj
}

export default function(store) {
  return {
    bind: function(bindings) {
      this.on('update', () => {
        var state = store.getState()

        if (typeof bindings === 'string') {
          this[bindings] = state
          return
        }

        for (let key in bindings) {
          var path = bindings[key]
          this[key] = path !== undefined ? deepValue(state, path) : state
        }
      })
    },

    dispatch: function(action) {
      store.dispatch(action)
    }

    // TODO: trying to conform to react-redux, but seems too verbose
    // connect: function(mapStateToProps, mapDispatchToProps) {
    //   return function(context) {
    //     if (mapStateToProps) {
    //       var state = mapStateToProps(store.getState())
    //       for (let key in state) {
    //         context.opts[key] = state[key]
    //       }
    //     }
    //     if (mapDispatchToProps) {
    //       var dispatch = mapDispatchToProps(store.dispatch)
    //       for (let key in dispatch) {
    //         context.opts[key] = dispatch[key]
    //       }
    //     }
    //   }
    // }
    //
    // const mapStateToProps = state => {
    //   return { count: state }
    // }
    //
    // const mapDispatchToProps = dispatch => {
    //   return {
    //     onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    //     onMinusClick: () => dispatch({ type: 'DECREMENT' })
    //   }
    // }
    //
    // this.connect(mapStateToProps, mapDispatchToProps)(this)
  }
}
