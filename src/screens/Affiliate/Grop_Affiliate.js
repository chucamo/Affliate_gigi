import { StyleSheet, Text, TouchableOpacity, View, FlatList, ImageBackground, Dimensions,Image, Platform } from 'react-native'
import React, { useState } from 'react'
import { products, categorys } from './ProductsData'
const Width = Dimensions.get('window').width
export default function Grop_Affiliate() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategory = (option) => {
    setSelectedCategory(option)
    console.log(option)
  }
  const Categorys = ({ data }) => {
    return (
      <TouchableOpacity style={(selectedCategory === data?.id) ? ([styles.btn_Category_focus, styles.btn_Category]) : ([styles.btn_Category_Affiliate, styles.btn_Category])} key={data?.id} onPress={() => handleCategory(data?.id)}>
        <Text style={(selectedCategory === data?.id) ? ([styles.text_Category_Focus, styles.text_Category]) : ([styles.text_Category_Affiliate, styles.text_Category])}>{data?.name}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{flex:1}}>
      <View style={styles.header_Grop_Affiliate}>
        <FlatList
          data={categorys}
          renderItem={({ item }) => <Categorys data={item} />}
          keyExtractor={item => item.id}
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
         
        />

      </View>
      <View style={styles.products_Affiliate}>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <View key={item?.id} style={{ margin: 10 }}  >
              <View style={styles.item_product}>
                <View style={styles.bgrbox_image}>
                  <ImageBackground source={{ uri: `${item?.image}` }} defaultSource={require('./../../../assets/product_loading.jpg')} resizeMode="cover" style={styles.bgr_product_Affiliate}>
                    <View style={styles.box_group_text}>
                      <Text style={styles.text_group}>{item.group}</Text>
                    </View>
                  </ImageBackground>
                </View>
                <View>
                  <View style={styles.contentProduct}>
                    <View style={styles.boxTextProducts}>
                      <Text style={styles.nameProduct}>【GG】{item.name}</Text>
                     <Image  source={require('../../icon_screens/icon_affiliate/Group_34131.png')} />
                    </View>
                    <View>
                      <TouchableOpacity style={styles.btnInvest}>
                        <Text style={styles.textInvest}>Đầu tư bán</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', width: '70%', marginTop: 10,justifyContent:'space-between' }} >
                    <Text style={styles.priceProduct}>{item.price}</Text>
                    <Text style={styles.commission_priceProduct}>Hoa hồng:{item.commission_price}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.tools_item_Product}>
                <TouchableOpacity style={styles.toolsProducts}>
                  <Text style={styles.textProductsTools}>Sao chép đường dẫn</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolsProducts}>
                  <Text style={styles.textProductsTools}>Sao chép nội dung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolsProducts}>
                  <Text style={styles.textProductsTools}>Tải hình ảnh</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toolsProducts}>
                  <Text style={styles.textProductsTools}>Đầu tư voucher</Text>
                </TouchableOpacity>
              
              </View>
            </View>
          )}
          stickyHeaderIndices={[10]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header_Grop_Affiliate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    marginTop:10,
    borderTopWidth:0.5,
    borderTopColor:'#ccc',
    paddingTop:4,

  },
  btn_Category_Affiliate: {
    borderColor: '#000',
    borderBottomWidth:2.5,
    borderColor:'#fff'
  },
  btn_Category: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    paddingBottom: 13,
    
  },
  bgr_product_Affiliate: {
    width: '100%',
    height: '100%'
  },
  text_Category_Affiliate: {
    color: '#000'
  },
  text_Category_Focus: {
    color: '#FB708D'
  },
  text_Category: {
    fontSize: 17,
    fontWeight: '500'
  },
  btn_Category_focus: {
    borderBottomWidth: 2.5,
    borderColor: '#FB708D',
  },
  bgrbox_image: {
    width: '35%',
    height: 110,

  },
  box_group_text: {
    width: '50%',
    backgroundColor: '#F34292',
    padding: 2,
    borderBottomRightRadius: 20
  },
  text_group: {
    fontSize: 12.5,
    color: '#fff',
    fontWeight: '500'
  },
  contentProduct: {
    flexDirection: 'row'
  },
  item_product: {

    flexDirection: 'row',
    gap: 5,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f1f1'

  },
  nameProduct: {
    fontSize:Platform?.OS==='ios' ? 16:15,
    
    fontWeight: '600'
  },

  priceProduct: {
    color: '#F44393',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btnInvest: {
    backgroundColor: '#F44393',
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 10,
  },
  textInvest: {
    fontWeight: '600',
    fontSize: 15,
    color:'#fff',
   
  },
  boxTextProducts: {
    width: '53%',
    flexDirection: 'column',
    gap: 10
  },
  commission_priceProduct: {
    backgroundColor: '#02aadd',
    fontSize: 19,
    marginLeft: '20%',
    color: '#fff',
    paddingRight:5,
    paddingLeft:5,
    borderRadius:5,
  },
  tools_item_Product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    gap:10
  },
  textProductsTools:{
    textAlign:'center'
  },
  toolsProducts: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    width: Width / 4.6,
    marginTop:10,
    borderWidth:0.5,
    borderColor:'#F44393',
    backgroundColor:'#FFEAF3',
    minHeight:50,
    borderRadius:10
  },
  products_Affiliate:{
    flex:1
  }
})