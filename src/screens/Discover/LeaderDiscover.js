import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import {icon_user,icon_total,icon_ds,icon_online} from '../Affiliate/Affiliate_icon'
import { SvgXml } from "react-native-svg";

export default function LeaderDiscover() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity style={styles.box_LeaderDiscover}>
          <View style={styles.infLeader}>
            <View style={styles.headerLeaderInf}>
              <View style={styles.itemHeaderInf}>
                <Image
                  source={{ uri: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/25125321/image-cach-selfie-dep-cho-nu-mat-tron-giup-thu-hut-nhieu-luot-like-164816240129987.jpg" }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
                <View style={styles.textInfLeader}>
                  <Text style={styles.nameLeader}>Vũ Tiến Khoái</Text>
                  <Text style={styles.positionLeader}>Giám đốc khu vực</Text>
                </View>
              </View>
              <View style={styles.index_InfLeader}>
                <Text style={styles.text_InfLeader}>+80</Text>
              </View>
            </View>
          </View>
          <View style={styles.achievementsLeader}>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_user} />
              {/* <AntDesign name={'user'} size={23} color={'#888888'} /> */}
              <Text style={styles.textAchievement}>976 thành viên</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_total} />
              <Text style={styles.textinfMember}>Thu nhập trung bình : đ 5,898 M /người/tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_ds} />
              <Text style={styles.textinfMember}>Doanh số  hệ thống : đ 45,898 M /tuần</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.btn_Join_LeaderMember}>
            <Text style={styles.text_LeaderMember}>Tham gia ngay ➹ </Text>
          </TouchableOpacity>
        </TouchableOpacity>
         <TouchableOpacity style={styles.box_LeaderDiscover}>
          <View style={styles.infLeader}>
            <View style={styles.headerLeaderInf}>
              <View style={styles.itemHeaderInf}>
                <Image
                  source={{ uri: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/25125321/image-cach-selfie-dep-cho-nu-mat-tron-giup-thu-hut-nhieu-luot-like-164816240129987.jpg" }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
                <View style={styles.textInfLeader}>
                  <Text style={styles.nameLeader}>Vũ Tiến Khoái</Text>
                  <Text style={styles.positionLeader}>Giám đốc khu vực</Text>
                </View>
              </View>
              <View style={styles.index_InfLeader}>
                <Text style={styles.text_InfLeader}>+80</Text>
              </View>
            </View>
          </View>
          <View style={styles.achievementsLeader}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.boxTextAchievements}>
                <View>
                <SvgXml xml={icon_user} />
                </View>
                <Text style={styles.textAchievement}>976 thành viên</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff0077' }}>+ 96</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_total} />
              <Text style={styles.textinfMember}>Thu nhập trung bình : đ 5,898 M /người/tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_ds} />
              <Text style={styles.textinfMember}>Doanh số  hệ thống : đ 45,898 M /tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_online} />
              <Text style={styles.textinfMember}>Điểm hoạt động : 2.908đ /tuần</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn_Join_LeaderMember}>
            <Text style={styles.text_LeaderMember}>Tham gia ngay ➹ </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box_LeaderDiscover}>
          <View style={styles.infLeader}>
            <View style={styles.headerLeaderInf}>
              <View style={styles.itemHeaderInf}>
                <Image
                  source={{ uri: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/25125321/image-cach-selfie-dep-cho-nu-mat-tron-giup-thu-hut-nhieu-luot-like-164816240129987.jpg" }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
                <View style={styles.textInfLeader}>
                  <Text style={styles.nameLeader}>Vũ Tiến Khoái</Text>
                  <Text style={styles.positionLeader}>Giám đốc khu vực</Text>
                </View>
              </View>
              <View style={styles.index_InfLeader}>
                <Text style={styles.text_InfLeader}>+80</Text>
              </View>
            </View>
          </View>
          <View style={styles.achievementsLeader}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.boxTextAchievements}>
                <View>
                <SvgXml xml={icon_user} />
                </View>
                <Text style={styles.textAchievement}>976 thành viên</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff0077' }}>+ 96</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_total} />
              <Text style={styles.textinfMember}>Thu nhập trung bình : đ 5,898 M /người/tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_ds} />
              <Text style={styles.textinfMember}>Doanh số  hệ thống : đ 45,898 M /tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_online} />
              <Text style={styles.textinfMember}>Điểm hoạt động : 2.908đ /tuần</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn_Join_LeaderMember}>
            <Text style={styles.text_LeaderMember}>Tham gia ngay ➹ </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity style={styles.box_LeaderDiscover}>
          <View style={styles.infLeader}>
            <View style={styles.headerLeaderInf}>
              <View style={styles.itemHeaderInf}>
                <Image
                  source={{ uri: "https://cdn.alongwalk.info/vn/wp-content/uploads/2022/03/25125321/image-cach-selfie-dep-cho-nu-mat-tron-giup-thu-hut-nhieu-luot-like-164816240129987.jpg" }}
                  style={{ height: 60, width: 60, borderRadius: 50 }}
                />
                <View style={styles.textInfLeader}>
                  <Text style={styles.nameLeader}>Vũ Tiến Khoái</Text>
                  <Text style={styles.positionLeader}>Giám đốc khu vực</Text>
                </View>
              </View>
              <View style={styles.index_InfLeader}>
                <Text style={styles.text_InfLeader}>+80</Text>
              </View>
            </View>
          </View>
          <View style={styles.achievementsLeader}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.boxTextAchievements}>
                <View>
                <SvgXml xml={icon_user} />
                </View>
                <Text style={styles.textAchievement}>976 thành viên</Text>
              </View>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff0077' }}>+ 96</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_total} />
              <Text style={styles.textinfMember}>Thu nhập trung bình : đ 5,898 M /người/tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_ds} />
              <Text style={styles.textinfMember}>Doanh số  hệ thống : đ 45,898 M /tuần</Text>
            </View>
            <View style={styles.boxTextAchievements}>
            <SvgXml xml={icon_online} />
              <Text style={styles.textinfMember}>Điểm hoạt động : 2.908đ /tuần</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn_Join_LeaderMember}>
            <Text style={styles.text_LeaderMember}>Tham gia ngay ➹ </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  box_LeaderDiscover: {
    margin: 10,
    borderWidth: 1,
    borderColor:'#ccc'
  },
  infLeader: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5
  },
  index_InfLeader: {
    backgroundColor: '#FFCCE3',
    borderRadius: 50,
    width: 50,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_InfLeader: {
    color: '#F44393',
    fontSize: 15
  },
  headerLeaderInf: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemHeaderInf: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  textInfLeader: {
    flexDirection: 'column',
    gap: 7
  },
  achievementsLeader: {
    padding: 20,
    flexDirection: 'column',
    gap: 20,
    borderBottomWidth: 0.5
  },
  nameLeader: {
    fontSize: 20,
    fontWeight: '700'
  },
  positionLeader: {
    fontSize: 15.5,
  },
  boxTextAchievements: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  textAchievement: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  textinfMember: {
    fontSize: 15
  },
  btn_Join_LeaderMember: {
    padding: 15,
    backgroundColor: '#F44393',
    borderBottomWidth:0.5,
  },
  text_LeaderMember: {
    textAlign: 'center',
    fontSize: 20,

    paddingLeft: 10,
    color: '#fff',
    fontWeight: '500'
  }
})