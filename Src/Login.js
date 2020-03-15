import React from 'react';
import { Text, View, Image,TextInput,Dimensions,TouchableHighlight,StyleSheet  } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
// import styles from '../assets/style';
import logo from '../image/images/logo-milk.jpg';
import social from '../image/images/social.jpg';

export default class MyHeader extends React.Component {
render() {
    const goBack = this.props.goBackProp;
    return (
      <View  style={{backgroundColor:'white',width:350,marginLeft:10,marginRight:10}}>
         <View style={{alignItems:'center'}}>
         <Image source={logo} style={styles.image} />
         </View>
        <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Welcome Back</Text>
        <Text style={{textAlign:'center',fontSize:12,marginTop:5}}>Sign in to continue</Text>
        <View style={{margin:10}}>
       <TextInput
          style={{height: 40,alignSelf: 'stretch',borderColor:'black',borderWidth:1,borderRadius:9}}
          placeholder="REGISTERD MOBILE NUMBER/EMAIL"
          // onChangeText={(text) => this.setState({text})}
          // value={this.state.text}
        />
       </View>
       <View style={{margin:10}}>
         <View style={{flexDirection:'row-reverse'}}>
           <Text>Need help?</Text>
         </View>
       <TextInput
       
          style={{height: 40,alignSelf: 'stretch',borderColor:'black',borderWidth:1,borderRadius:9}}
          placeholder="Password"
          secureTextEntry={true}
          // onChangeText={(text) => this.setState({text})}
          // value={this.state.text}
        />
       </View>
       <View  style={{margin:10}}>
       <TouchableHighlight
       underlayColor='blue'
       style={{backgroundColor:'blue',height:40,alignItems:'center',alignContent:'center',borderRadius:9}}
        // onPress={this._onPressButton}
        >
    <View style={{justifyContent:'center',flex:1}}>
    <Text style={{fontSize:20,fontStyle:'normal',color:'white'}}>LOG IN</Text>
    </View>
    </TouchableHighlight>
       </View>
       <View style={{marginTop:10}}>
         <Text style={{textAlign:'center'}} >Login with otp</Text>
       </View>
       <View style={{marginTop:25}}>
         <Text style={{textAlign:'center'}} > ────── OR LOGIN WITH EMAIL ──────  </Text>
       </View>
       <View style={{alignItems:'center',marginTop:20}}>
         <Image source={social} style={{width:100}} />
         </View>

         <View style={{marginTop:25,flexDirection:'row',justifyContent:'center'}}>
         <Text >Don't have an account?</Text>
         <Text style={{color:'blue'}} >Click here</Text>
       </View>
      </View>
        
    );
  }
}
const styles = StyleSheet.create({
 
  image: {
    
    height: 50,
    marginBottom:20
  },
  
});