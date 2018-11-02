import React from 'react';
import { Text, View, Image, Linking, ImageBackground, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, SubCard } from './common';

const AlbumDetail = ({ business }) => {
  const { category, restaurant_name, rateing_image, image } = business;

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    ratingStyle
  } = styles;

  return (

    <Card>
    <TouchableOpacity onPress={() => Actions.businessInner({ business })}>
      <CardSection justi={'center'}>
        <ImageBackground style={imageStyle} source={{ uri: image }}>
          <View style={styles.innerFrame}>
              <Text size={18} style={styles.Name}>
                { restaurant_name }
              </Text>
              <Text size={18} style={styles.Type}>
                {category}
              </Text>
          </View>
        </ImageBackground>
      </CardSection>

      <SubCard justi={'center'}>
          <Image style={ratingStyle} source={{ uri: rateing_image}}></Image>
      </SubCard>
      </TouchableOpacity>

    </Card>
  );
};

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  innerFrame: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },

  universityImage: {
    width: 300,
    height: 250,
    borderRadius: 5,
  },

  Name: {
      color: '#fff',
      opacity: 1,
      fontSize: 24,
      fontWeight: '500',
  },
  Type: {
      color: '#fff',
      opacity: 1,
      fontSize: 24,
      fontWeight: '500',
  },

  universityMotto: {
        color: '#fff',
        opacity: .9,
        textAlign: 'center',
        backgroundColor: 'transparent'
  },

  headerTextStyle: {
        fontSize: 18
  },

  thumbnailStyle: {
        height: 50,
        width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

   paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf:'flex-end',
    bottom: -160,
    color: 'white',
    backgroundColor: 'transparent',
  },
  ratingStyle: {
    height: 30,
    width: 100,
    resizeMode: 'stretch',
  },
  imageStyle: {
    height: 200,
    width: null,
    flex: 1,
    resizeMode: 'stretch',
  }
};

export default AlbumDetail;
