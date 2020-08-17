import React from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,StatusBar } from 'react-native';
import {Audio} from "expo-av"

const listBackgroundColor = {
  1: "#487EB0",
  2: "#6A89CC",
  3: "#0ABDE3",
  4: "#26ae60",
  5: "#A3CB37",
  6: "#53E0BC",
  7: "#218F76",
  8: "#F4C724",
  9: "#F3CC79",
  10: "#E1DA00"
}

const soundList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav'),
}
 class  SpanishMusic extends React.Component {

  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList [number]
      await soundObject.loadAsync(path)
      await soundObject 
      .playAsync()
      .then(async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="dark-content" />
        <ScrollView style={styles.gridContainer}>
          <Image 
          style={styles.logo}
          source={require('./assets/logo.png')}
          />
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[1]},styles.item]}
            onPress ={() => {
              this.playSound("one")
            }}
            >
              <Text style={styles.itemtext}>one</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[2]},styles.item]}
            onPress ={() => {
              this.playSound("two")
            }}
            >
              <Text style={styles.itemtext}>two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[3]},styles.item]}
            onPress ={() => {
              this.playSound("three")
            }}
            >
              <Text style={styles.itemtext}>three</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[4]},styles.item]}
            onPress ={() => {
              this.playSound("four")
            }}
            >
              <Text style={styles.itemtext}>four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[5]},styles.item]}
            onPress ={() => {
              this.playSound("five")
            }}
            >
              <Text style={styles.itemtext}>five</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[6]},styles.item]}
            onPress ={() => {
              this.playSound("six")
            }}
            >
              <Text style={styles.itemtext}>six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[7]},styles.item]}
            onPress ={() => {
              this.playSound("seven")
            }}
            >
              <Text style={styles.itemtext}>seven</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[8]},styles.item]}
            onPress ={() => {
              this.playSound("eight")
            }}
            >
              <Text style={styles.itemtext}>eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[9]},styles.item]}
            onPress ={() => {
              this.playSound("nine")
            }}
            >
              <Text style={styles.itemtext}>nine</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={[{backgroundColor: listBackgroundColor[10]},styles.item]}
            onPress ={() => {
              this.playSound("ten")
            }}
            >
              <Text style={styles.itemtext}>ten</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        {/* <Text>Hello Spanish number APP</Text> */}
      </View>
    );
  }
}

export default  SpanishMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#757575',
  },
  gridContainer:{
    flex:1,
    padding:5,
  },
  logo:{
    alignSelf:'center',
    marginTop:15,
  },
  rowContainer:{
    flexDirection: "row",
  },
  item:{
    flex:1,
    borderRadius:30,
    height:80,
    alignItems:'center',
    justifyContent:'center',
    margin: 2
  },
  itemtext:{
    color: '#fff',
    fontSize: 20,
  }
});
