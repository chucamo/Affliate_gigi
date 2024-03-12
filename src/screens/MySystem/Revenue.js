import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
const Width = Dimensions.get('window').width;
export default function Revenue() {
  return (
    <View style={{ padding: 10, marginTop: 15 }}>

      <View style={styles.infCommission_box}>
        <View style={{ width: '50%', flexDirection: 'column', alignItems: 'center' }}>
          <View style={styles.item_infCommission}>
            <Text style={styles.infPriceCommission}>100đ</Text>
          </View>
          <Text style={styles.describeCommission}>Doanh thu nhóm</Text>
        </View>

        <View style={{ width: '50%', flexDirection: 'column', alignItems: 'center' }}>
          <View style={styles.item_infCommission}>
            <Text style={styles.infPriceCommission}>100đ</Text>
          </View>
          <Text style={styles.describeCommission}>Doanh thu trực tiếp</Text>
        </View>
      </View>
      <View style={styles.infRevenue_order}>
        <Text style={styles.titleCommission}>Tổng doanh thu trực tiếp và nhóm</Text>
        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#FFF6FA' }}>
          <TouchableOpacity style={[styles.btnRevenue_order,styles.btnRevenue_orderLeft]}>
            <Text style={styles.textBtnRevenue_order}>
              720
            </Text>
            <Text style={styles.textDetailBtnRevenue_order}>
              Đơn hàng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnRevenue_order,styles.btnRevenue_orderRight]}>
            <Text style={styles.textBtnRevenue_order}>
              100k
            </Text>
            <Text style={styles.textDetailBtnRevenue_order}>VNĐ</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.titleCommission}>Chỉ số bán hàng</Text>
        <View style={styles.box_detailInfcommission}>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>1M Click</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Số lượt truy cập từ link Affiliate</Text>
          </View>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>3000</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Số đơn thành công từ link Affiliate</Text>
          </View>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>30%</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Tỷ lệ chuyển đổi từ link Affiliate</Text>
          </View>
        </View>
        <View style={styles.box_detailInfcommission}>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>3M Click</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Số lượt truy cập từ nhóm</Text>
          </View>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>4200</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Số đơn thành công nhóm</Text>
          </View>
          <View style={styles.item_detailInfcommission}>
            <TouchableOpacity style={styles.infcommission_detail}>
              <Text style={styles.text_infcommission_detail}>30%</Text>
            </TouchableOpacity>
            <Text style={styles.describe_infComission_Detail}>Tỷ lệ chuyển đổi từ nhóm</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleCommission: {
    textAlign: 'center',
    fontSize: 21,
    marginBottom: 12,
    fontWeight: '600'
  },
  priceCommission: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  infRevenue_order: {
    padding: 20,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: 20,
    borderColor: '#ccc',
    width: '100%',

  },
  btnCommission: {
    backgroundColor: '#FB708D',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20
  },
  textBtnCommission: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center'
  },
  infCommission_box: {
    flexDirection: 'row',

  },
  item_infCommission: {
    backgroundColor: '#ff0077',
    width: Width / 3.6,
    height: Width / 3.7,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infPriceCommission: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 18
  },
  describeCommission: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16.5
  },
  text_infcommission_detail: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20
  },
  item_detailInfcommission: {
    width: '30%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  infcommission_detail: {
    width: '80%',
    height: 90,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0077'
  },
  box_detailInfcommission: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  describe_infComission_Detail: {
    textAlign: 'center',
    marginTop: 10
  },
  btnRevenue_orderLeft:{
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
  btnRevenue_orderRight:{
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  btnRevenue_order: {
    
    width: '50%',
    height: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:0.5,
    borderColor:'#F44393'

  },
  textBtnRevenue_order: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: '#F44393'
  },
  textDetailBtnRevenue_order:{
    color:'#606060',
    
  }
})