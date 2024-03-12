import { SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity,Platform } from 'react-native'
import React, {  useState } from 'react'
import Commission_revenue from './MySystem/Commission_revenue';
import Member from './MySystem/Member';
import Revenue from './MySystem/Revenue';
export default function MySystem() {
  const [keyTabSystem, setKeyTabSystem] = useState('Commission_revenue');
  const handleTabSystem = () => {
    switch (keyTabSystem) {
      case 'Commissiong_revenue':
        return <Commission_revenue />
      case 'Revenue':
        return <Revenue />
      case 'Member':
        return <Member />
      default:
        return <Commission_revenue />;
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView>
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
            {/* <DTMySystem /> */}
          </View>
          <View style={styles.tabMySystem}>
            <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity
                style={keyTabSystem === 'Commissiong_revenue' ? ([styles.btnTabSystem, styles.btnFocusTabSystem]) : ([styles.btnTabSystem, styles.btnTabNoFucus])}
                onPress={() => setKeyTabSystem('Commissiong_revenue')}
              >
                <Text style={keyTabSystem==='Commissiong_revenue'?([styles.titleTabSystem,styles.titleFocusSystem]):(styles.titleTabSystem)}>Hoa hồng </Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={keyTabSystem === 'Revenue' ? ([styles.btnTabSystem, styles.btnFocusTabSystem]) : ([styles.btnTabSystem, styles.btnTabNoFucus])}
                onPress={() => setKeyTabSystem('Revenue')}>
                <Text style={keyTabSystem==='Revenue'?([styles.titleTabSystem,styles.titleFocusSystem]):(styles.titleTabSystem)}>Doanh thu</Text>
              </TouchableOpacity>

              <TouchableOpacity 
               style={keyTabSystem === 'Member' ? ([styles.btnTabSystem, styles.btnFocusTabSystem]) : ([styles.btnTabSystem, styles.btnTabNoFucus])}
              onPress={() => setKeyTabSystem('Member')}>
                <Text style={keyTabSystem==='Member'?([styles.titleTabSystem,styles.titleFocusSystem]):(styles.titleTabSystem)}>Thành viên</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            {handleTabSystem()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contentAdmin: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
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
    borderBottomRightRadius: 10,

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
    marginBottom: Platform.OS === 'ios' ? 0 : 10,

  },
  Average_item: {
    backgroundColor: '#FFF6FA',
    borderWidth: 0.5,
    width: '48%',
    minHeight: 100,
    borderRadius: 10,
    borderColor: '#F14291',
  },
  tabMySystem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  titleTabSystem: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  titleFocusSystem:{
    color: '#FB708D'
  },
  btnTabSystem: {
    borderBottomWidth: 3,

    paddingBottom: 13
  },
  btnTabNoFucus: {
    borderColor: '#fff'
  },
  btnFocusTabSystem: {
    borderColor: '#FB708D'
  }
})