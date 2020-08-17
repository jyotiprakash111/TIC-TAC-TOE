import React from 'react';
import { StyleSheet, Text, View,StatusBar, Button } from 'react-native';

componentWillMount = () => {
    <StatusBar backgroundColor="blue" barStyle="light-content" />
};

export default class Function extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         followRequest: ["john", "Jane", "Ram", "Janice"],
         following: ["Bikash"]
      };
    }
    
    doFollow = (index) => {
        const {followRequest, following} = this.state;
        const followNew = followRequest.splice(index, 1);
        following.push(followNew);

        this.setState({
            followRequest,
            following
        });
    }

    render() {
    return (
    <View style={styles.container}>
        
      <Text>You are Following {this.state.following.length}</Text>
      <Button 
      title= "Go to Follow page"
      onPress={ () => {
          this.props.navigation.navigate("Follow", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              followNew: this.doFollow
          });
      }}
    // onPress={() => this.props.navigation.navigate('Follow')}
      />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
