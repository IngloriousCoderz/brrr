import store from '../configure-store'
import ReduxMixin from './redux-mixin'
import riot from 'riot'
import app from 'tags/app'
import counter from 'tags/counter'

riot.mixin(ReduxMixin(store))

riot.mount('*')
