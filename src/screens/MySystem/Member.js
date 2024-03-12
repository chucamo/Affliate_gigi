import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Member() {
  return (
    <View style={{ padding: 10, marginTop: 15 }}>
      <View>
        <View style={styles.boxMember_rank}>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                4
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Kim cương</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                280
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Hồng ngọc</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                300
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Hoàng ngọc</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                370
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Ngọc bích</Text>
          </View>
        </View>
        <View style={styles.boxMember_rank}>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                200
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Bạch kim</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
                180
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Vàng</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
              180
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Bạc</Text>
          </View>
          <View style={styles.rank_memberBox}>
            <TouchableOpacity style={styles.item_boxMember_rank}>
              <Text style={styles.text_itemBoxMemberRank}>
              180
              </Text>
            </TouchableOpacity>
            <Text style={styles.text_rank_MemberRank}>Tiềm năng</Text>
          </View>
        </View>
      </View>
      <View style={styles.infMember_box}>
      <Text style={styles.titleCommission}>Phát triển hệ thống trong kỳ</Text>
      <View style={styles.infMember_expense}>
        <View style={styles.btnPatronize}>
          <View style={styles.icon_btnPatronize}>
            <Text style={styles.text_iconBtnPAtronize}>5</Text>
          </View>
          <Text style={{marginTop:10,fontSize:16}}>Tôi bảo trợ</Text>
        </View>
        <Text style={styles.Summation_iconPatronize}>+</Text>
        <View style={styles.btnPatronize}>
          <View style={styles.icon_btnPatronize}>
            <Text style={styles.text_iconBtnPAtronize}>5</Text>
          </View>
          <Text style={{marginTop:10,fontSize:16}}>Thành viên nhóm</Text>
        </View>
        <Text style={styles.Summation_iconPatronize}>=</Text>
        <View style={styles.btnPatronize}>
          <View style={styles.icon_btnPatronizeTotal}>
            <Text style={styles.text_iconBtnPAtronize}>10</Text>
          </View>
          <Text style={{marginTop:10,fontSize:16}}>Tổng</Text>
        </View>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxMember_rank: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:10
  },
  rank_memberBox: {
    width:'24%',
  },
  text_rank_MemberRank:{
    textAlign:'center',
    marginTop:10
  },
  item_boxMember_rank: {
    backgroundColor:'#ff0077',
    height:90,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  text_itemBoxMemberRank: {
    fontWeight:'400',
    color:'#fff',
    fontSize:30
  },
  infMember_box:{
    marginTop:20
  },
  titleCommission: {
    textAlign: 'center',
    fontSize: 21,
    marginBottom: 12,
    fontWeight: '600'
  },
  infMember_expense:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  text_iconBtnPAtronize:{
    color:'#fff',
    fontSize:20,
    fontWeight:'600',
  },
  Summation_iconPatronize:{
    fontSize:30,
    paddingTop:20
  },
  icon_btnPatronize:{
    width:70,
    height:70,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#02aadd'
  },
  icon_btnPatronizeTotal:{
    width:70,
    height:70,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ff0077',
  },
  btnPatronize:{
    flexDirection:'column',
    alignItems:'center'
  }
})