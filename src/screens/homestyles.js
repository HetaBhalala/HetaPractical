import { StyleSheet } from "react-native";
import { color } from "../constants/color";
import { font } from "../constants/fonts";
import { spacing } from "../constants/styles";

export const styles = StyleSheet.create({
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
      bottom: -10,
      backgroundColor: color.yellow,
      padding: 2,
      borderRadius: 20,
      height: 18,
      width: 18,
      alignItems: 'center',
      justifyContent: 'center',
    },
    countTxt: {
      color: color.black,
      fontSize: font.size.nano,
    },
    loaderView: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  
    modalContainer: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerimage: {
      height: 120,
      width: 120,
      marginHorizontal: spacing.small,
      marginBottom: spacing.nano,
      borderRadius: 15,
    },
    modalInnerContainer: {
      height: '50%',
      // width: '70%',
      alignSelf: 'center',
      backgroundColor: color.white,
      alignItems: 'center',
      padding: spacing.base,
      borderRadius: 15,
  
    },
  });