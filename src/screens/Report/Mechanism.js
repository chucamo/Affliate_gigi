import { StyleSheet, Text, View,Image, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'


export default function Mechanism() {
  return (
    <View style={styles.container}>
    <ScrollView>
    <View style={styles.Image}>
      <Image style={styles.image1} 
       source={{uri: 'https://img.meta.com.vn/Data/image/2022/01/13/anh-dep-thien-nhien-3.jpg'}} 
      /> 
    </View>
    <View style={styles.background}>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/mohinh.png")}
         /> 
         <Text style={styles.Text}>Mô hình trực tiếp từ nhà máy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/5khong.png")} 
         /> 
         <Text style={styles.Text} >"5 Không" vì người bán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/sanphamchat.png")} 
         /> 
         <Text style={styles.Text} >Sản phẩm chất</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/thuonghieu.png")} 
         /> 
         <Text style={styles.Text} >Thương hiệu mạnh</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/hoahong.png")}
         /> 
         <Text style={styles.Text} >Hoa hồng lớn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/hotro.png")} 
         /> 
         <Text style={styles.Text} >Hỗ trợ 90% nội dung bán</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/huanluyen.png")} 
         /> 
         <Text style={styles.Text} >Huấn luyện bán hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/spdaupheu.png")} 
         /> 
         <Text style={styles.Text} >Sản phẩm đầu phễu hấp dẫn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.khunganh}>
         <Image style={styles.h1c1} 
          source={require("../../../assets/IconMechanism/kethua.png")} 
         /> 
         <Text style={styles.Text} >Kế thừa mối quan hệ</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  hang1: {
    paddingVertical: 12,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#f44393'
  },
  Texth1: {
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    color: 'white'
  },
  Image: {
    flexDirection:'row', 
    justifyContent:'center', 
    width: '100%', 
    marginBottom: 30
  },
  image1: {
    marginTop: 10,
    width: 450,
    height: 200,
    resizeMode: 'stretch',
  },
  background: {
    paddingHorizontal: 20,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },
  khunganh: {
    width: 100, 
    height: 100,
    alignContent: 'center',
  },
  Text: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10
  },
  h1c1:{
    width: 100,
    height: 100,
  }
});