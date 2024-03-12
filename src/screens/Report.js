import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity,Platform } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SvgXml } from "react-native-svg";
import { iconTop1, iconTop2, iconTop3 } from './Report/iconNumber';
const Width = Dimensions.get('window').width
export default function Report({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.box_medal}>
          <View style={styles.box_medal_item}>
            <TouchableOpacity style={styles.item_box_medal_item} onPress={() => navigation.navigate('Đào tạo')} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal1.png')} style={styles.image_box_medal} />
              </View>
              <Text>Đào tạo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item_box_medal_item} onPress={() => navigation.navigate('Cơ chế')}>
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal2.png')} style={styles.image_box_medal} />
              </View>
              <Text>Cơ chế Affiliate</Text>
            </TouchableOpacity>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal3.png')} style={styles.image_box_medal} />
              </View>
              <Text>Mã giới thiệu</Text>
            </View>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal4.png')} style={styles.image_box_medal} />
              </View>
              <Text>Mời thêm bạn</Text>
            </View>
          </View>
          <View style={styles.box_medal_item}>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal5.png')} style={styles.image_box_medal} />
              </View>
              <Text>500k đầu tiên</Text>
            </View>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal6.png')} style={styles.image_box_medal} />
              </View>
              <Text>Thủ lĩnh</Text>
            </View>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal7.png')} style={styles.image_box_medal} />
              </View>
              <Text>Cộng đồng</Text>
            </View>
            <View style={styles.item_box_medal_item} >
              <View style={styles.image_medal}>
                <Image source={require('../../assets/Report/icon_medal8.png')} style={styles.image_box_medal} />
              </View>
              <Text>Cách thức</Text>
            </View>
          </View>
          {/* Chỉ số */}
        </View>
        <View style={styles.Information_incomeContent}>
          <Text style={styles.titleInfomation_incomeContent}>Chỉ số hoạt động tuần 34</Text>
          <View style={styles.box_item_Information}>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>đ 57M</Text>
              </View>
              <Text style={styles.detailInCome_item}>Hoa hồng bán hàng</Text>
            </View>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>2h</Text>
              </View>
              <Text style={styles.detailInCome_item}>Đào tạo</Text>
            </View>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>4</Text>
              </View>
              <Text style={styles.detailInCome_item}>Số người tuyển dụng</Text>
            </View>
          </View>
          <View style={styles.box_item_Information}>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>2</Text>
              </View>
              <Text style={styles.detailInCome_item}>NPP Bạch Kim</Text>
            </View>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>3h</Text>
              </View>
              <Text style={styles.detailInCome_item}>3h họp bán hàng</Text>
            </View>
            <View style={styles.boxPrice_Income}>
              <View style={styles.item_Information}>
                <Text style={styles.priceIncome}>6 </Text>
              </View>
              <Text style={styles.detailInCome_item}>Số người bảo trợ</Text>
            </View>
          </View>
        </View>

        {/* Tổ chức phân phối */}
        <View style={styles.number_myuser}>
          <Text style={styles.titleInfomation_incomeContent}>Tổ chức nhà phân phối của tôi</Text>
          <View style={styles.Average_Income}>
            <View style={styles.Average_item}>
              <View style={styles.lable_Average_item}>
                <Text style={styles.text_lable_Average}>Tổng số thành viên</Text>
              </View>
              <Text style={styles.price_Average}>3400</Text>
              <Text style={styles.describe_Average}>Thành viên</Text>
            </View>
            <View style={styles.Average_item}>
              <View style={styles.lable_Average_item}>
                <Text style={styles.text_lable_Average}>Hoa hồng trung bình</Text>
              </View>
              <Text style={styles.price_Average}>đ 500.000M</Text>
              <Text style={styles.describe_Average}>Trung bình / tháng</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.fiterl_Report}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <AntDesign name={'bars'} size={32} />
              <Text style={styles.selectRankFilter}>Chọn theo thứ hạng</Text>
            </View>
            <AntDesign name={'caretdown'} size={20} />
          </TouchableOpacity>
          <View style={styles.number_user}>
            {/* {dataUser?.map((item, key) => (
              <View key={key}>
                <NumberUser data={item} />
              </View>
            ))} */}
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                  <View style={styles.stt_number_user}>
                    <SvgXml xml={iconTop1} />
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Khoái vũ tiến</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                  <View style={styles.stt_number_user}>
                    <SvgXml xml={iconTop2} />
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Nam nguyễn</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                  <View style={styles.stt_number_user}>
                    <SvgXml xml={iconTop3} />
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Chu Nguyên Trung</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                  <View style={styles.stt_number_user}>
                    <Text style={styles.index_inf_number}>4</Text>
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Chu Nguyên Trung</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                <View style={styles.stt_number_user}>
                    <Text style={styles.index_inf_number}>5</Text>
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Chu Nguyên Trung</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                <View style={styles.stt_number_user}>
                    <Text style={styles.index_inf_number}>6</Text>
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Chu Nguyên Trung</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                <View style={styles.stt_number_user}>
                    <Text style={styles.index_inf_number}>7</Text>
                  </View>
                  <Image source={{ uri: 'https://chothuestudio.com/wp-content/uploads/2023/07/b417ccsqo818wjwyb8j1680925160788-535x800.jpg' }} style={styles.image_user} />
                  <View style={styles.box_text_infNumber}>
                    <Text style={styles.nameUser}>Chu Nguyên Trung</Text>
                    <Text style={styles.officeUser}>Giám đốc kinh doanh</Text>
                  </View>
                </View>
                <View style={styles.quantity_inf_number}>
                  <Text style={styles.number_quantity_tv}>120 TV </Text>
                  <AntDesign name='right' size={18} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Information_incomeContent: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 40,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10
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
  item_Information: {
    width: '80%',
    height: '80%',
    backgroundColor: '#EA408D',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxPrice_Income: {
    width: 100,
    height: 100,
    flexDirection: 'column',
    alignItems: 'center'
  },
  priceIncome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,

  },
  detailInCome_item: {
    textAlign: 'center',
    marginTop: 10
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
    color: '#1A73E8'
  },
  box_medal: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#ccc'
  },
  box_medal_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom: 20

  },
  item_box_medal_item: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
    minWidth: Width * 0.25
  },
  image_medal: {
    minHeight: 55
  },
  titleInfomation_incomeContent: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
  number_myuser: {
    marginTop: 20,

  },
  Average_Income: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  lable_Average_item: {
    backgroundColor: '#F14291',
    padding: 2,
    borderBottomRightRadius: 10,
    width: '90%',
    borderTopStartRadius: 10,

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
  Average_item: {
    backgroundColor: '#FFF6FA',
    borderWidth: 0.5,
    width: '48%',
    minHeight: 100,
    borderRadius: 10,
    borderColor: '#F14291',
  },
  number_user: {
    paddingRight: 10,
    paddingLeft: 10
  },
  fiterl_Report: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    alignItems: 'center'
  },
  selectRankFilter: {
    fontSize: 16.5
  },

  //numberUser
  item_number_user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  inf_number_user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  quantity_inf_number: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10
  },
  index_inf_number: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  box_text_infNumber: {
    flexDirection: 'column',
    gap: 5
  },
  nameUser: {
    fontSize: 16.5,
    fontWeight: 'bold'
  },
  officeUser: {
    color: 'gray'
  },
  image_user: {
    width: 55,
    height: 55,
    borderRadius: 50
  },
  number_quantity_tv: {
    color: '#F44393',
    fontWeight: 'bold',
    fontSize: 15
  },
  stt_number_user: {
    minWidth: 31
  }
})