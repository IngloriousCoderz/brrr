import store from '../configure-store'
import IngloriousRedux from './inglorious-redux'
import riot from 'riot'
import app from 'tags/app'
import counter from 'tags/counter'

riot.mixin(IngloriousRedux(store))

riot.mount('*')
