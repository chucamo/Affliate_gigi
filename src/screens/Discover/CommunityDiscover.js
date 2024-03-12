import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'


export default function CommunityDiscover() {
  return (
    <ScrollView  >
      <TouchableOpacity style={styles.box_CommunityDiscover}>
        <View style={styles.item_CommunityDiscover}>
          <Image source={{ uri: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/473792Zmz/hinh-nen-do-tet-thumb.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='stretch' borderTopLeftRadius={5} borderTopRightRadius={5} />
        </View>
       <View style={styles.detail_CommunityDiscover}>
       <View style={styles.describeCommunityDiscover}>
          <Text style={styles.title_CommunityDiscover}>
          【GG】 Cộng đồng Chợ Phiên GG8
          </Text>
          <Text style={styles.member_CommunityDiscover}>+879</Text>
        </View>
        <Text style={styles.Join_gigi}>
          Tham gia ngay ➹ 
          </Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box_CommunityDiscover}>
        <View style={styles.item_CommunityDiscover}>
          <Image source={{ uri: 'https://mega.com.vn/media/news/0106_hinh-nen-4k-may-tinh59.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='stretch' borderTopLeftRadius={5} borderTopRightRadius={5} />
        </View>
       <View style={styles.detail_CommunityDiscover}>
       <View style={styles.describeCommunityDiscover}>
          <Text style={styles.title_CommunityDiscover}>
          【GG】 Cộng đồng Chợ Phiên GG8
          </Text>
          <Text style={styles.member_CommunityDiscover}>+879</Text>
        </View>
        <Text style={styles.Join_gigi}>
          Tham gia ngay ➹ 
          </Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box_CommunityDiscover}>
        <View style={styles.item_CommunityDiscover}>
          <Image source={{ uri: 'https://atpsoftware.vn/wp-content/uploads//2023/05/cho-phien-bac-ha-review-5.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='stretch' borderTopLeftRadius={5} borderTopRightRadius={5} />
        </View>
       <View style={styles.detail_CommunityDiscover}>
       <View style={styles.describeCommunityDiscover}>
          <Text style={styles.title_CommunityDiscover}>
          【GG】 Cộng đồng Chợ Phiên GG8
          </Text>
          <Text style={styles.member_CommunityDiscover}>+879</Text>
        </View>
        <Text style={styles.Join_gigi}>
          Tham gia ngay ➹ 
          </Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box_CommunityDiscover}>
        <View style={styles.item_CommunityDiscover}>
          <Image source={{ uri: 'https://mekoong.com/wp-content/uploads/2022/10/Cho-tet-mua-sam-1.jpg' }} style={{ width: '100%', height: 200 }} resizeMode='stretch' borderTopLeftRadius={5} borderTopRightRadius={5} />
        </View>
       <View style={styles.detail_CommunityDiscover}>
       <View style={styles.describeCommunityDiscover}>
          <Text style={styles.title_CommunityDiscover}>
          【GG】 Cộng đồng Chợ Phiên GG8
          </Text>
          <Text style={styles.member_CommunityDiscover}>+879</Text>
        </View>
        <Text style={styles.Join_gigi}>
          Tham gia ngay ➹ 
          </Text>
       </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  box_CommunityDiscover: {
    borderRadius:5,
    margin:10,
    marginTop: 20,
    paddingBottom:20,
    borderWidth:0.5,
    borderColor:'#ccc'
  },
  item_CommunityDiscover:{
 
  },
  describeCommunityDiscover:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingRight:10
  },
  title_CommunityDiscover:{
    fontSize:18,
    fontWeight:'600'
  },
  member_CommunityDiscover:{
    color:'#fba922',
    fontSize:18,
    fontWeight:'700'
  },
  Join_gigi:{
    fontSize:20,
    paddingLeft:10,
    color:'#ff0077',
    fontWeight:'500'
  },
  detail_CommunityDiscover:{
    flexDirection:'column',
    justifyContent:'space-around',
    height:100,
    
  }
})