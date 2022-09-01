import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {Button} from 'react-native-paper';

export class Image_Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={{padding: 8}}>
            <Image source={this.props.item.url} style={styles.Itemimage} />
            <View>
              <Button
                icon={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/484/484611.png',
                }}
                mode="contained"
                textColor="red"
                style={styles.buttonStyle}
                onPress={() => this.props.onDelete(this.props.item.id)}>
                Delete
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Image_Item;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    elevation: 20,
  },
  Itemimage: {
    height: 100,
    width: 100,
  },
  imageStyle: {
    padding: 50,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  textStyle: {
    color: 'black',
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
