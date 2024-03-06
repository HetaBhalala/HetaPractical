import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
// import Modal from 'react-native-modal';
import getHomeData from '../services/getHomeData';
import {imagePath} from '../constants/imagePath';
import {color} from '../constants/color';
import {spacing} from '../constants/styles';
import {font} from '../constants/fonts';
import ImageCarousel from '../components/ImageCarousel';
import LovePackage from '../components/LovePackage';
import ImageGrid from '../components/ImageGrid';
import {BlurView} from '@react-native-community/blur';
import { styles } from './homestyles';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState([]);
  const [packageData, setPackageData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [modalData, setModalData] = useState({});
  const [modleVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      getHomeData()
        .then(res => {
          console.log(res?.data?.data?.advertisments);
          setAddData(res?.data?.data?.advertisments);
          setPackageData(res?.data?.data?.packages);
          setData(res?.data?.data?.sections);
          setLoader(false);
        })
        .catch(err => console.log('err', err));
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => {
    console.log(item);
    return (
      <View>
        <Image
          source={{uri: item?.product?.banner_image_url}}
          style={styles.innerimage}
        />
      </View>
    );
  };

  return (
    <BlurView
      style={{
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
      }}
      blurType="light"
      blurAmount={10}
      overlayColor=""
      reducedTransparencyFallbackColor="white">
      <ScrollView style={styles.container}>
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
        {/* {loader ? (
          <View style={styles.loaderView}>
            <ActivityIndicator color={color.white} size={'large'} />
          </View>
        ) : (
          <>
            <ImageCarousel data={addData} />
            <LovePackage
              data={packageData}
              getData={data => setModalData(data)}
              setModalVisible={setModalVisible}
            />
            <ImageGrid data={data} />
          </>
        )} */}
        <Modal visible={modleVisible} transparent>
          <TouchableOpacity style={styles.modalContainer} onPress={()=>setModalVisible(false)}>
            <View style={styles.modalInnerContainer}>
              <FlatList
                numColumns={2}
                data={modalData?.products}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}

              />
            </View>
          </TouchableOpacity>
        </Modal>
      </ScrollView>
    </BlurView>
  );
};

export default Home;


