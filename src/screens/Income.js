import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView,Platform} from 'react-native'
import React from 'react'
import { SvgXml } from "react-native-svg";
import {my_user } from "../screens/InCome/Icon_InCome"
export default function Income() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View >

          <View style={styles.contentAdmin}>
            <View style={styles.Average_Income}>
              <View style={styles.Average_item}>
                <View style={styles.lable_Average_item}>
                  <Text style={styles.text_lable_Average}>Thu nhập tích lũy</Text>
                </View>
                <Text style={styles.price_Average}>đ 500.000M</Text>
                <Text style={styles.describe_Average}>Tích lũy</Text>
              </View>
              <View style={styles.Average_item}>
                <View style={styles.lable_Average_item}>
                  <Text style={styles.text_lable_Average}>Thu nhập trung bình</Text>
                </View>
                <Text style={styles.price_Average}>đ 500.000M</Text>
                <Text style={styles.describe_Average}>Trung bình tháng</Text>
              </View>
            </View>

            <View>
              {/* <InfCome /> */}
            </View>
            <View style={styles.Information_incomeContent}>
              <View style={styles.box_container_incomeInf}>
                <View style={{position:'relative',flexDirection:'row',justifyContent:'center'}}>
                <SvgXml xml={my_user} />
                  <Text style={styles.lable_box_container_incomeInf}>Của tôi</Text>
                </View>
                <View style={[styles.box_item_Information]}>
                  <View style={styles.boxPrice_Income}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Tổng hoa hồng</Text>
                  </View>
                  <View style={[styles.boxPrice_Income,styles,styles.borderWidthBox_centerIncome]}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Chi phí voucher</Text>
                  </View>
                  <View style={styles.boxPrice_Income}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Thu nhập tạm tính</Text>
                  </View>
                </View>
              </View>
              <View style={styles.box_container_incomeInf}>
                <View style={{position:'relative',flexDirection:'row',justifyContent:'center'}}>
                <SvgXml xml={my_user} />
                  <Text style={styles.lable_box_container_incomeInf}>Của nhóm</Text>
                </View>
                <View style={[styles.box_item_Information]}>
                  <View style={styles.boxPrice_Income}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Tổng hoa hồng</Text>
                  </View>
                  <View style={[styles.boxPrice_Income,styles,styles.borderWidthBox_centerIncome]}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Chi phí voucher</Text>
                  </View>
                  <View style={styles.boxPrice_Income}>
                    <View style={styles.item_Information}>
                      <Text style={styles.priceIncome}>đ100K</Text>
                    </View>
                    <Text style={styles.detailInCome_item}>Thu nhập tạm tính</Text>
                  </View>
                </View>
              </View>
              
            </View>
            <View style={styles.ResultInCome}>
              <View style={styles.inComeContent}>
                <View style={styles.btnInCome}>
                  <View style={styles.btnTextInCome}>
                    <Text style={styles.paidInCome}> đ 500.000M</Text>
                    <Text style={[styles.infInCome, styles.infIncomePay]}> Đã thanh toán</Text>
                  </View>
                </View>
                <View style={styles.btnInCome}>
                  <View style={styles.btnTextInCome}>
                    <Text style={styles.UnpaidInCome}> đ 9.500M</Text>
                    <Text style={[styles.infInCome, styles.infIncomePay]}> Chưa thanh toán</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.Payment_history}>
            <TouchableOpacity style={styles.btn_Payment_history}>
              
              <Text style={styles.text_History_Payment}>Lịch sử thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerAdmin: {
    width: '100%',
  },
  contentAdmin: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  inComeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Average_item: {
    backgroundColor: '#FFF6FA',
    borderWidth: 0.5,
    width: '48%',
    minHeight: 100,
    borderRadius: 10,
    borderColor: '#F14291',

  },
  btnInCome: {
    borderRadius: 10,
    backgroundColor: '#FB708D',

    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '49%'
  },
  btnTextInCome: {
    flexDirection: 'column',
    gap: 10
  },
  Information_incomeContent: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 30,



  },
  box_item_Information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  priceInCome: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  infInCome: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  },

  boxPrice_Income: {

    flexDirection: 'column',
    alignItems: 'center',
    width:'30%',
    marginTop:10,
    marginBottom:20
  },
  priceIncome: {
    color: '#888888',
    fontWeight: 'bold',
    fontSize: 20,


  },
  detailInCome_item: {
    textAlign: 'center',
    marginTop: 5
  },
  ResultInCome: {
    marginTop: 50
  },
  infIncomePay: {
    fontSize: 20,
    fontWeight: '600'
  },
  paidInCome: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  UnpaidInCome: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFE2B0'
  },
  Average_Income: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  lable_Average_item: {
    backgroundColor: '#F14291',
    padding: 2,
    borderBottomRightRadius: 10,
    width: '90%',
    borderTopStartRadius: 10
  },
  text_lable_Average: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',

  },
  price_Average: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    color: '#F14291'
  },
  describe_Average: {
    textAlign: 'center',
    marginTop: 8,
    color: '#F14291',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: Platform.OS === 'ios' ? null : 15,
  },
  Payment_history: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30
  },
  btn_Payment_history: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#F34292',
    justifyContent: 'center',

    padding: 10,

    borderRadius: 10,
  },
  text_History_Payment: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginLeft: 10
  },
  box_container_incomeInf:{
    flexDirection:'column',
    alignItems:'center',
    borderColor: '#FFAED3',
    borderWidth: 1.5,
    borderRadius:10
  },
  borderWidthBox_centerIncome:{
    borderEndWidth:1,
    borderStartWidth:1,
    marginRight:10,
    marginLeft:10,
    
  },
  lable_box_container_incomeInf:{
    position:'absolute',
    textAlign:'center',
    paddingTop:Platform.OS==='ios'? 5 : 2,
    fontWeight:'bold',
    color:'#fff',
    fontSize:14
  }
})