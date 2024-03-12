import { StyleSheet, Text, View,Image, SafeAreaView,ScrollView ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function TrainReport() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView>
    <View style={styles.container}>

      <View>
          <TouchableOpacity style={styles.khunganh}>
           <Image style={styles.image1} 
            source={require("../../../assets/Iconaffi/kinang1.jpg")}
           /> 
           <View style={styles.khungchu}>
            <Text style={styles.Texth2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.Texth3}>Kỹ năng cần thiết</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.khunganh1}>
           <Image style={styles.image1} 
            source={require("../../../assets/Iconaffi/kinang2.jpg")}
           /> 
           <View style={styles.khungchu}>
            <Text style={styles.Texth2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.Texth3}>Kỹ năng cần thiết</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.khunganh}>
           <Image style={styles.image1} 
            source={require("../../../assets/Iconaffi/kinang3.jpg")}
           /> 
           <View style={styles.khungchu}>
            <Text style={styles.Texth2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.Texth3}>Digital marketing</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.khunganh1}>
           <Image style={styles.image1} 
            source={require("../../../assets/Iconaffi/kinang4.jpg")}
           /> 
           <View style={styles.khungchu}>
            <Text style={styles.Texth2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.Texth3}>Xây dựng mối quan hệ</Text>
           </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.khunganh}>
           <Image style={styles.image1} 
            source={require("../../../assets/Iconaffi/kinang5.jpg")}
           /> 
           <View style={styles.khungchu}>
            <Text style={styles.Texth2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.Texth3}>Kỹ năng cần thiết</Text>
           </View>
          </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Textkh}>Khóa học thăng cấp</Text>
          <ScrollView horizontal style={{marginBottom: 20}}>
           <TouchableOpacity style={{ flexDirection: 'row'}}>
            <Image style={styles.imagekh}
             source={require("../../../assets/Iconaffi/banhang.jpg")}
            />
           </TouchableOpacity>
           <TouchableOpacity style={{ flexDirection: 'row'}}>
            <Image style={styles.imagekh}
             source={require("../../../assets/Iconaffi/banhang4.jpg")}
            />
           </TouchableOpacity>
           <TouchableOpacity style={{ flexDirection: 'row'}}>
            <Image style={styles.imagekh}
             source={require("../../../assets/Iconaffi/banhang5.png")}
            />
           </TouchableOpacity> 
          </ScrollView>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hang1:{
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 12,
    backgroundColor: '#f44393',
    marginBottom: 10,
  },
  Texth1: {
    fontSize: 20, 
    textAlign: 'center', 
    fontWeight: 'bold',
    color: 'white',
  },
  khunganh: {
    height:120,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
  },
  khunganh1:{
    height:120,
    flexDirection: 'row',
  },
  image1: {
    marginHorizontal: 10,
    marginVertical: 10,
    width: 125,
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 10
  },
  khungchu:{
    width: 200,
    height: 100,
    marginVertical: 10,
    marginLeft: 5,
  },
  Texth2: {
    fontSize: 14,
  },
  Texth3: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#434343'
  },
  Textkh: {
    marginHorizontal: 10,
    marginVertical: 15,
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: "italic"
  },
  imagekh: {
    flex: 1,
    resizeMode: 'stretch',
    width: 350,
    height: 250,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});