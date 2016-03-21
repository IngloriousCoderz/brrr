import { createStore } from 'redux';
import counterApp from 'reducers';

export default createStore(counterApp, window.devToolsExtension ? window.devToolsExtension() : undefined);
