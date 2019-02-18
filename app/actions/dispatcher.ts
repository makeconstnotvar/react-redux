import {Dispatcher} from 'flux';
let dispatcher = new Dispatcher();
let dispatch = dispatcher.dispatch.bind(dispatcher);
function dispatch2(type,data){
  dispatch({type,data})
}

export {dispatcher, dispatch,dispatch2};