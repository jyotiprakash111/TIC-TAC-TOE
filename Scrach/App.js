import React from 'react';
import { StyleSheet,
   Text,
   View,
   StatusBar,
   TouchableOpacity,
   Dimensions } from 'react-native';
import { Button } from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

var itemArray = new Array(25).fill('empty');

class  ScrachWin extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       randomNumber: ""
    };
  };
  
  // when app loads up
  componentDidMount() {
      //TODO: generate random number
      this.setState({randomNumber: this.generaterandomNumber()
      });
  };

  generaterandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 25);
    this.setState({randomNumber : randomNumber, isScratched : true});
    return randomNumber;
    // console.log(randomNumber)
    //  generate Random Number Method
  };

  scratchItem = (itemNumber) => {
    if(this.state.randomNumber == itemNumber){
      itemArray[itemNumber] = "lucky"
    } else {
      itemArray[itemNumber] = "unlucky"
    }
    this.forceUpdate();
    //  Decide Lucky or unlucky
  };

  scratchItemIcon = (itemNumber) => {
    if(itemArray[itemNumber] === "lucky"){
      return "dollar"
    } else if(itemArray[itemNumber] === "unlucky") {
      return "frown-o"
    }
    return "circle"
    // Find right Icon
  };

  scratchItemColor = (itemNumber) => {
    if(itemArray[itemNumber] === "lucky"){
      return "green"
    } else if(itemArray[itemNumber] === "unlucky") {
      return "red"
      // return "#22313f"
    }
    return "#2196F3";
    //  find right color
  };

  showAllItem =  () => {
    itemArray.fill('unlucky');
    itemArray[this.state.randomNumber] = "lucky";

    this.forceUpdate();
  };

  resetGame = () => {
    this.setState({randomNumber :this.generaterandomNumber() },
    () => {
      itemArray.fill("empty");
      this.forceUpdate;
    });
    // Btn reset game 
  };

    render() {
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="blue" barStyle="dark-content" />
       <View style={styles.topBar}>
       <Text style={styles.topText}>Scrach Win Game </Text>
       </View>
       <View style={styles.grid}>
         <View style={styles.itemrow}>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(0)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(0)}
             size={50}
             color={this.scratchItemColor(0)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(1)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(1)}
             size={50}
             color={this.scratchItemColor(1)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(2)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(2)}
             size={50}
             color={this.scratchItemColor(2)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(3)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(3)}
             size={50}
             color={this.scratchItemColor(3)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(4)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(4)}
             size={50}
             color={this.scratchItemColor(4)}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.itemrow}>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(5)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(5)}
             size={50}
             color={this.scratchItemColor(5)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(6)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(6)}
             size={50}
             color={this.scratchItemColor(6)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(7)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(7)}
             size={50}
             color={this.scratchItemColor(7)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(8)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(8)}
             size={50}
             color={this.scratchItemColor(8)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(9)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(9)}
             size={50}
             color={this.scratchItemColor(9)}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.itemrow}>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(10)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(10)}
             size={50}
             color={this.scratchItemColor(10)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(11)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(11)}
             size={50}
             color={this.scratchItemColor(11)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(12)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(12)}
             size={50}
             color={this.scratchItemColor(12)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(13)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(13)}
             size={50}
             color={this.scratchItemColor(13)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(14)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(14)}
             size={50}
             color={this.scratchItemColor(14)}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.itemrow}>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(15)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(15)}
             size={50}
             color={this.scratchItemColor(15)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(16)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(16)}
             size={50}
             color={this.scratchItemColor(16)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(17)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(17)}
             size={50}
             color={this.scratchItemColor(17)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(18)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(18)}
             size={50}
             color={this.scratchItemColor(18)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(19)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(19)}
             size={50}
             color={this.scratchItemColor(19)}
             />
           </TouchableOpacity>
         </View>
         <View style={styles.itemrow}>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(20)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(20)}
             size={50}
             color={this.scratchItemColor(20)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(21)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(21)}
             size={50}
             color={this.scratchItemColor(21)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(22)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(22)}
             size={50}
             color={this.scratchItemColor(22)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(23)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(23)}
             size={50}
             color={this.scratchItemColor(23)}
             />
           </TouchableOpacity>
           <TouchableOpacity
           onPress={ ()=> {
             this.scratchItem(24)
           }}
           style={styles.item}>
             <FontAwesome
             name={this.scratchItemIcon(24)}
             size={50}
             color={this.scratchItemColor(24)}
             />
           </TouchableOpacity>
         </View>
       </View>
       <Button
       full
       success
       style={styles.btnstyle}
       onPress = { () => {
         this.showAllItem();
       }}
       >
         <Text style={styles.btnsTexttyle}>Show all coupons</Text>
       </Button>
       <Button
       full
       primary
       style={styles.btnstyle}
       onPress = { () => {
        this.resetGame();
      }}
       >
         <Text style={styles.btnsTexttyle}>Reset</Text>
       </Button>
      </View>
    );
  }
}
export default ScrachWin; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{
    
  },
  itemrow:{
    flexDirection:'row'
  },
  item:{
    alignItems:'center',
    padding:10,
    borderWidth:2,
    borderColor:'#22313f',
    minWidth:70
  },
  btnstyle:{
    marginVertical: 15,

  },
  btnsTexttyle:{
    color: '#fff',
    fontSize: 18,
  },
  topBar:{
    backgroundColor:'#FF9800',
    height:50,
    // width:"100%"
    marginVertical:10,
    width: Dimensions.get("window").width
  },
  topText:{
    color:'#fff',
    textAlign:'center',
  },

});
