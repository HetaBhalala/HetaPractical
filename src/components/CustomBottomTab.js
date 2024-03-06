import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {imagePath} from '../constants/imagePath';
import {spacing} from '../constants/styles';
import {color} from '../constants/color';

const CustomBottomTab = ({navigation, state}) => {
  const onPress = (route, isFocused) => {
    if (!isFocused) {
      navigation.navigate(route.name);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {state.routes.map((route, index) => (
          <TouchableOpacity
            style={styles.tab(state.index === index )}
            key={index}
            onPress={() => onPress(route, state.index === index)}>
            <Image style={styles.img(state.index === index )} source={imagePath.USER} />
            {state.index === index ? (
              <Text style={{paddingLeft: 10}}>{route.name}</Text>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.black,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    height: 60,
    width: '90%',
    marginBottom: 16,
    marginTop: 6,
    flexDirection: 'row',
  },
  img:bool=>( {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor:bool ? color.black : color.white
  }),
  tab: bool => ({
    height: 44,
    width: bool ? 120 : 28,
    borderRadius: 25,
    backgroundColor: bool ? color.yellow : color.black,
    flexDirection: 'row',
    alignItems: 'center',
    padding: bool ? spacing.base : 0,
  }),
});
