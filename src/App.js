import React, { Component } from 'react';
import AppContainer from './containers/container'
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

// import reducer from './reducers';


import { createStore, applyMiddleware } from "redux";


const store = createStore(composeWithDevTools(applyMiddleware(thunk)));

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}


export default App;



/*function playlist(state = [], action) {
  if (action.type === 'ADD_TRACK') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(playlist);

const list = document.querySelectorAll('.tracklist')[0];
const addTrackBtn = document.querySelectorAll('.addTrack')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];



store.subscribe(() => {
  list.innerHTML = '';
  trackInput.value = '';
  store.getState().forEach(track => {
    const li = document.createElement('li');
    li.textContent = track;
    list.appendChild(li);
  })
});

addTrackBtn.addEventListener('click', () => {
  const trackName = trackInput.value;
  store.dispatch({type: 'ADD_TRACK', payload: trackName});
});*/