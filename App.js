/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Counter from './Src/counter'

const intialState = {
  counter :0
}
const reducer = (state=intialState,action)=>{
  switch(action.type)
  {
    case 'INCREAMENT':
      return {counter:state.counter + 1}
    case 'DECREAMENT':
      return {counter:state.counter - 1}
  }
  return state
}
const store = createStore(reducer)

const App: () => React$Node = () => {
  return (
   <View style={{alignItems:'center',justifyContent:'center',alignContent:'center',flex:1,backgroundColor:'white',margin:10}}>
     <Provider store={store} >
       <Counter/>
     </Provider>
   </View>
  );
};


export default App;
