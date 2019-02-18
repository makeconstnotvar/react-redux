import {ReduceStore} from 'flux/utils';
import {dispatcher} from "../actions/dispatcher";
import {ActionTypes} from '../actions/types';

const state = {
  regions: [],
  cities: [],
  items: [{id: 1, name: 'Вася'}, {id: 2, name: 'Петя'}, {id: 3, name: 'Миша'}, {id: 4, name: 'Коля'}, {id: 5, name: 'Толя'}, {id: 6, name: 'Богдан'}],
  banks: [],
  progress: false,
  error: false,
  done: false,
  ready: false,
  name: 'Вася',
  serverErrors: []
};

class Store extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return state;
  }

  reduce(state, action) {
    let {data, type} = action;
    switch (type) {
      case ActionTypes.DeleteItem:
        //state.items.splice(data,1);
        return {...state, items: state.items.filter(item => item.id != data)};
      case ActionTypes.ChangeName:
        return {...state, name: data};
      case ActionTypes.LoadDataStart:
      case ActionTypes.LoadDataSuccess:
      case ActionTypes.LoadDataError:
        return {...state, ...data};
      default:
        return state;
    }
  }
}

let store = new Store();

export {store};