import {ActionTypes} from './types';
import axios from 'axios';
import {dispatch2} from './dispatcher'

const actions = {
  changeName(name) {
    dispatch2(ActionTypes.ChangeName, name)
  },
  deleteItem(itemId) {
    dispatch2(ActionTypes.DeleteItem, itemId)
  },
  async loadTestData() {
    dispatch2(ActionTypes.LoadDataStart, {progress: true});
    await axios.post('/api/test', {data: 1})
      .then(function (response) {
        let data = response.data;
        dispatch2(ActionTypes.LoadDataSuccess, {...data, progress: false});
      })
      .catch(function (error) {
        dispatch2(ActionTypes.LoadDataSuccess, {error, progress: false});
      });
  }
};
export {actions}