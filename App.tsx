import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {imagePath} from './src/constants/imagePath';
import {spacing} from './src/constants/styles';
import {color} from './src/constants/color';
import {font} from './src/constants/fonts';
import getHomeData from './src/services/getHomeData';
import ImageCarousel from './src/components/ImageCarousel';
import LovePackage from './src/components/LovePackage';
import ImageGrid from './src/components/ImageGrid';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [packageData, setPackageData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log('hii');
      getHomeData()
        .then(res => {
          console.log(res?.data?.data?.advertisments);
          setAddData(res?.data?.data?.advertisments);
          setPackageData(res?.data?.data?.packages);
          setData(res?.data?.data?.sections);
        })
        .catch(err => console.log('err', err));
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View>
          <Image source={imagePath.EVENT} style={styles.imageLogo} />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.topbarTopView}>
            <View style={styles.txtInputContainer}>
              <TextInput
                placeholder="What are you looking for?"
                onChangeText={setSearch}
              />
              <Image source={imagePath.SEARCH} style={styles.searchImg} />
            </View>
            <View>
              <Image source={imagePath.MENU} style={styles.menuImg} />
            </View>
          </View>
          <View style={styles.topbarBottonView}>
            <View style={styles.profileView}>
              <Image source={imagePath.SMILE} style={styles.searchImg} />
              <Text style={styles.usernameTxt}>Hello Rebutia</Text>
            </View>
            <View style={styles.cartContainer}>
              <View>
                <Image source={imagePath.TRACK} style={styles.trackImg} />
              </View>
              <View style={styles.cartView}>
                <View style={styles.cartCount}>
                  <Text style={styles.countTxt}>3</Text>
                </View>
                <Text style={styles.cartTxt}>Cart</Text>
                <Image source={imagePath.CART} style={styles.cartImg} />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* <View>{data.length>0 ? */}
      <ImageCarousel data={addData} />
      <LovePackage data={packageData} />
      <ImageGrid data={data} />
      {/* : null} </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // padding: spacing.base,
    backgroundColor: color.black,
    flex: 1,
  },

  topView: {
    flexDirection: 'row',
    padding: spacing.base,
  },
  imageLogo: {
    height: 90,
    width: 70,
  },
  trackImg: {
    height: 35,
    width: 35,
    marginRight: spacing.base,
  },
  searchImg: {
    height: 30,
    width: 30,
  },
  menuImg: {
    height: 30,
    width: 30,
    marginLeft: spacing.base,
  },
  cartImg: {
    height: 20,
    width: 20,
    paddingHorizontal: spacing.base,
  },
  txtInputContainer: {
    flexDirection: 'row',
    backgroundColor: color.grey,
    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    flex: 1,
    height: 40,
  },
  topbarBottonView: {
    flexDirection: 'row',
    padding: spacing.small,
    width: '100%',
  },
  topbarTopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameTxt: {
    color: color.white,
    paddingLeft: spacing.base,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  cartView: {
    flexDirection: 'row',
    backgroundColor: color.white,
    padding: spacing.small,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartTxt: {
    paddingHorizontal: spacing.mini,
    color: color.black,
    fontSize: font.size.base,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  cartCount: {
    position: 'absolute',
    left: 10,
    bottom:-10,
    backgroundColor: color.yellow,
    padding: 2,
    borderRadius: 20,
    height: 18,
    width: 18,
    alignItems:'center',
    justifyContent:'center'
  },
  countTxt:{
    color:color.black,
    fontSize:font.size.nano
  }
});
