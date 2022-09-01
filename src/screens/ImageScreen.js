import {
  StatusBar,
  StyleSheet,
  View,
  FlatList,
  Image,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../components/Header';
import Image_Item from '../components/Image_Item';
import ImagePicker from 'react-native-image-crop-picker';
import {IconButton} from 'react-native-paper';
import { connect } from 'react-redux';

const screenOptions = { headerShown: false}

class ImageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
    };
  }

  componentDidMount() {
    this.state.imageList;
  }

  mapStateToProps = (state) => {
    return {
      imageList: state.imageList,
    };
  }

  mapDispatchToProps = (dispatch) => {
    return {
      addImage: (image) => dispatch.addImage(image),
      removeImage: (image) => dispatch.removeImage(image),
    };
  }

  // fetchImageList() {
  //   Image.fetch(this.props.navigation.getParam('url')).then(res => {
  //     this.setState({
  //       imageList: res.data,
  //     });
  //   });
  // }

  getImageList = function (callback) {
    Image.fetch(this.props.navigation.getParam('url')).then(res => {
      this.setState({
        imageList: res.data,
      });
      callback();
    });
  };

  onDelete = id => {
    console.log('OnDelete Called ....', id);
    const arrList = this.state.imageList;
    const arr = this.state.imageList.filter(item => item.id !== id);
    console.log(arrList);
    // filter(function (item) {
    //   return item.id !== id;
    // });
    this.setState({imageList: arr});
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
    }).then(image => {
      this.onSelectedImage(image);
    });
  };

  onSelectedImage = image => {
    let newDataImg = [...this.state.imageList];

    const source = {uri: image.path};
    let item = {
      id: this.state.imageList.length + 1,
      url: source,
    };
    // console.log(this.onDelete);
    newDataImg.push(item);
    this.setState({imageList: newDataImg});
  };

  renderItem = ({item}) => {
    // console.log(item.id);
    return <Image_Item item={item} onDelete={this.onDelete} />;
  };

  componentDidUpdate(image) {
    const choosePhotoFromLibrary = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
      })
        .then(image => {
          this.onSelectedImage(image);
        })
        .catch(error => {
          if (error.code === 'E_PICKER_CANCELLED') {
            alert('Error in uploading image from gallery');
            return false;
          }
        });
    };
  }

  componentWillUnmount() {
    this.state.imageList;
  }

  render() {
    return (
      <View style={styles.container}>
        <Header titleText="Camera App" />
        <FlatList
          numColumns={3}
          data={this.state.imageList}
          renderItem={this.renderItem}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <IconButton
            icon={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3249/3249934.png',
            }}
            iconColor="orange"
            size={60}
            elevation={50}
            style={styles.viewData}
            onPress={() => this.takePhotoFromCamera()}
          />
        </View>
      </View>
    );
  }
}
export default connect() (ImageScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewData: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    borderRadius: 60,
    height: 70,
    elevation: 30,
    backgroundColor: '#7a1f5c',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  imageStyle: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'sretch',
  },
  textStyle: {
    color: 'black',
  },
  buttonStyle: {
    width: 100,
    height: 100,
  },
});
