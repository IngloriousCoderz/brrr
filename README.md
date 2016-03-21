# Redux + (React || Riot)

## What's this

Starting from the awesome https://github.com/brunch/with-redux skeleton, this project attempts a best practice for integrating Redux with Riot.

There are many other implementations, described in https://github.com/riot/riot/issues/1118, but I was looking for the most simple way for a tag to:

1. bind its properties to some path in the current state
2. easily call the dispatch method
3. all without having direct knowledge of the Redux store
4. nor polluting the tag with unreadable code.

The result looks like this:

```html
<my-tag>
  <button onclick={onClick}>{myProp}</button>

  <script>
    this.bind({myProp: 'path.to.state.prop'})
    // or
    this.bind('myProp') // if I don't need to traverse a path

    onClick() {
      this.dispatch({type: 'CLICK'})
    }
  </script>
</my-tag>
```

```js
import store from './store'
import IngloriousRedux from 'inglorious-redux'
import riot from 'riot'

riot.mixin(IngloriousRedux(store))
riot.mount('*')
```

That's it. I also tried to mimic the [connect()](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) method from [react-redux](https://github.com/reactjs/react-redux), but I find it too verbose for this context (you can see my attempt commented in the code).

The solution is very similar, but even simpler, than [this one](https://github.com/rhythnic/riot-redux). Problem is, I'm not 100% it's working so any feedback is welcome.

## Usage

You need Brunch to run this project. So:

```bash
npm install -g brunch
npm install
```

Then you can run it with the provided NPM scripts:

```bash
npm start
npm run prod
```
