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
        <TouchableOpacity
          style={styles.tab(state.index === 0)}
          onPress={() => {
            onPress(state.routes[0], state.index === 0);
          }}>
          <Image
            style={styles.img(state.index === 0)}
            source={imagePath.HOME}
          />
          <Text style={styles.labelTxt}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab(state.index === 1)}
          onPress={() => {
            onPress(state.routes[1], state.index === 1);
          }}>
          <Image style={styles.img(state.index === 1)} source={imagePath.DOC} />
          <Text style={styles.labelTxt}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab(state.index === 2)}
          onPress={() => {
            onPress(state.routes[2], state.index === 2);
          }}>
          <Image style={styles.img(state.index === 2)} source={imagePath.PEN} />
          <Text style={styles.labelTxt}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab(state.index === 3)}
          onPress={() => {
            onPress(state.routes[3], state.index === 3);
          }}>
          <Image
            style={styles.img(state.index === 3)}
            source={imagePath.REWARDS}
          />
          <Text style={styles.labelTxt}>Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab(state.index === 4)}
          onPress={() => {
            onPress(state.routes[4], state.index === 4);
          }}>
          <Image
            style={styles.img(state.index === 4)}
            source={imagePath.USER}
          />
          <Text style={styles.labelTxt}>User</Text>
        </TouchableOpacity>
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
  img: bool => ({
    width: 28,
    height: 28,
    resizeMode: 'contain',
    tintColor: bool ? color.black : color.white,
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
  labelTxt: {paddingLeft: 10},
});
