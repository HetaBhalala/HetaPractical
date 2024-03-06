import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {imagePath} from '../constants/imagePath';
import {dimensions, spacing} from '../constants/styles';
import {color} from '../constants/color';
import {font} from '../constants/fonts';

const ImageGrid = ({data}) => {
  const renderItem = ({item}) => {
    console.log('JJJJJ', JSON.stringify(item?.image));

    return (
      <View style={styles.itemView}>
        <Image source={{uri: item?.image_url}} style={styles.innerimage} />
        <Text style={styles.txt} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  itemView: {
    width: dimensions.fullWidth / 4 - 2 * spacing.base,
    marginHorizontal: spacing.small,
    marginBottom: spacing.nano,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerimage: {
    height: 80,
    width: dimensions.fullWidth / 4 - 2 * spacing.base,

    borderRadius: 10,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: color.white,
    padding: spacing.base,
  },
  txt: {
    paddingRight: spacing.base,
    color: color.black,
    fontSize: font.size.mini,
  },
});
