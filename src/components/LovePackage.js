import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {dimensions, spacing} from '../constants/styles';
import {color} from '../constants/color';
import {imagePath} from '../constants/imagePath';
import {font} from '../constants/fonts';
const width = dimensions.fullWidth * 0.5;

const LovePackage = ({data, getData, setModalVisible}) => {
  const renderInnerItem = ({item}) => {
    return (
      <View>
        <Image
          source={{uri: item?.product?.banner_image_url}}
          style={styles.innerimage}
        />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
          getData(item), setModalVisible(true);
        }}>
        <FlatList
          data={item?.products?.slice(0, 4)}
          renderItem={renderInnerItem}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.txt}>{item?.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default LovePackage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: spacing.base,
  },
  cardContainer: {
    // height: 180,
    width: width,
    // paddingHorizontal: 10,
    backgroundColor: color.white,
    margin: 12,
    alignItems: 'center',
    paddingVertical: spacing.nano,
    borderRadius: 10,
  },

  txt: {
    paddingRight: spacing.base,
    color: color.black,
    fontSize: font.size.base,
  },
  innerimage: {
    height: 80,
    width: (dimensions.fullWidth * 0.5) / 2 - 2 * spacing.small,
    marginHorizontal: spacing.small,
    marginBottom: spacing.nano,
    borderRadius: 10,
  },
});
