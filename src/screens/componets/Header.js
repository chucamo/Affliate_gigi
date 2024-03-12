import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
export default function Header({ navigater }) {
    return (
        <View style={styles.header_admin}>
            <View style={styles.box_header_admin}>
                <TouchableOpacity style={styles.icon_arrow}>
                    <Ionic name={'arrow-back'} size={28} color={'#000'} />
                </TouchableOpacity>
                <Text style={styles.titleAdmin} >{navigater}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header_admin: {
        width: '100%',
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth:1,
        borderColor:'#000',
        backgroundColor:'#fff'
    },
    box_header_admin:{
        flexDirection: 'row',
        width:'63%',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:8,
        
    },
    icon_arrow: {

    },
    titleAdmin: {
        fontSize: 22,
        fontWeight: 'bold',
    },

})