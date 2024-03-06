import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {dimensions, spacing} from '../constants/styles';
import {color} from '../constants/color';
import { imagePath } from '../constants/imagePath';
import { font } from '../constants/fonts';
const width = dimensions.fullWidth * 0.8;

const ImageCarousel = ({data}) => {
  const renderItem = ({item}) => {

    const image_url = item?.image_url;
    return (
      <View style={styles.cardContainer}>
        <ImageBackground source={{uri: image_url}} style={styles.image}   imageStyle={{ borderRadius: 15}}>
        <View style={styles.rattingView}>
            <Image source={imagePath.STAR} style={styles.star}/>
            <Text style={styles.txt}>{item?.reviews_count}</Text>
        </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View>
      <Text>ImageCarousel</Text>
      {data.length > 0 ? (
        <View>
          <Carousel
            keyExtractor={(item, index) => index.toString()}
            layout={'default'}
            useScrollView={true}
            enableSnap={true}
            inactiveSlideScale={1}
            data={data}
            renderItem={renderItem}
            sliderWidth={dimensions.fullWidth}
            itemWidth={width}
          />
        </View>
      ) : null}
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: spacing.base,
  },
  cardContainer: {
    // height: 180,
    width: width,
    paddingHorizontal: 10,
  },
  image: {
    height: 180,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  star:{
    height: 40,
    width: 40,
  },
  rattingView:{
    backgroundColor:color.white,
    alignSelf:'flex-end',
    flexDirection:'row',
    margin:spacing.base,
    alignItems:'center',
    borderRadius:30,
    height:30
  },
  txt:{
    paddingRight:spacing.base,
    color:color.black,
    fontSize:font.size.base
  }
});
