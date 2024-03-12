import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function Commission_revenue() {
  return (
    <View style={{ padding: 10 }}>


      <View style={styles.priceCommission}>
        <TouchableOpacity style={styles.btnCommission}>
          <Text style={styles.titleCommission}>Tổng hoa hồng</Text>
          <Text style={styles.textBtnCommission}>đ 100.500M</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infCommission_box}>
        <View style={{ width: '48%', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFEAF3', borderRadius: 10 }}>
          <View style={styles.item_infCommission}>
            <Text style={styles.infPriceCommission}>100đ</Text>
          </View>
          <View>
            <View style={{ height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.describeCommission}>Hoa hồng trực tiếp</Text>
            </View>
          </View>

        </View>

        <View style={{ width: '48%', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFEAF3', borderRadius: 10 }}>
          <View style={styles.item_infCommission}>
            <Text style={styles.infPriceCommission}>100đ</Text>
          </View>
          <View style={{ height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.describeCommission}>Hoa hồng nhóm</Text>

          </View>
        </View>
      </View>

      <View style={styles.box_detailInfcommission}>
        <View style={styles.item_detailInfcommission}>
          <TouchableOpacity style={styles.infcommission_detail}>
            <Text style={styles.text_infcommission_detail}>100đ</Text>
          </TouchableOpacity>
          <Text style={styles.describe_infComission_Detail}>Hoa hồng bán hàng từ KOC</Text>
        </View>
        <View style={styles.item_detailInfcommission}>
          <TouchableOpacity style={styles.infcommission_detail}>
            <Text style={styles.text_infcommission_detail}>100đ</Text>
          </TouchableOpacity>
          <Text style={styles.describe_infComission_Detail}>Hoa hồng tổ chức tuyển dụng</Text>
        </View>
        <View style={styles.item_detailInfcommission}>
          <TouchableOpacity style={styles.infcommission_detail}>
            <Text style={styles.text_infcommission_detail}>100đ</Text>
          </TouchableOpacity>
          <Text style={styles.describe_infComission_Detail}>Hoa hồng tuyển dụng trực tuyến</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titleCommission: {
    textAlign: 'center',
    fontSize: 17,

  },
  priceCommission: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  btnCommission: {
    backgroundColor: '#FFEAF3',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    borderColor: '#F44393',
    borderWidth: 0.5
  },
  textBtnCommission: {
    color: '#F44393',

    fontSize: 22,
    fontWeight: '700',
    marginTop: 5,
    textAlign: 'center'
  },
  infCommission_box: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item_infCommission: {
    backgroundColor: '#F44393',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius:10,
    borderTopLeftRadius:10
  },
  infPriceCommission: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 18
  },
  describeCommission: {

    fontWeight: '500',
    fontSize: 16,
    color:'#F44393'
  },
  text_infcommission_detail: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 20
  },
  item_detailInfcommission: {
    width: '30%'
  },
  infcommission_detail: {
    width: '100%',
    height: 100,
    borderRadius: 20,
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
  }
})