import React from 'react';
import { Text, View, Image,TextInput,Dimensions,TouchableHighlight,StyleSheet  } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import {connect} from 'react-redux'
class Counter extends React.Component {
render() {
    return (
      <View  style={{backgroundColor:'white',width:350,marginLeft:10,marginRight:10}}>
         
       <TouchableHighlight
       underlayColor='blue'
       style={{backgroundColor:'blue',height:40,alignItems:'center',alignContent:'center',borderRadius:9}}
         onPress={()=>this.props.increament()}
        >
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={{fontSize:20,fontStyle:'normal',color:'white'}}>INCREAMENT</Text>
    </View>
    </TouchableHighlight>
    <Text>{this.props.counter}</Text>
    <TouchableHighlight
       underlayColor='blue'
       style={{backgroundColor:'blue',height:40,alignItems:'center',alignContent:'center',borderRadius:9}}
         onPress={()=>this.props.decreament()}
        >
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={{fontSize:20,fontStyle:'normal',color:'white'}}>DECREAMENT</Text>
    </View>
    </TouchableHighlight>
      </View>
        
    );
  }
}
function mapstatetoprops(state){
    return{
        counter:state.counter
    }

}

function mapDispatchtoprops(dispatch){
    return{
       increament:()=> dispatch({type:'INCREAMENT'}),
       decreament:()=> dispatch({type:'DECREAMENT'})
    }
    
}
export default connect(mapstatetoprops,mapDispatchtoprops)(Counter)
const styles = StyleSheet.create({
 
  image: {
    
    height: 50,
    marginBottom:20
  },
  
});