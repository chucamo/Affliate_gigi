import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Affiliate_Tools() {
    return (
        <View style={styles.Affiliate_content}>
            <Text style={styles.title_Affiliate}>Công cụ Affiliate</Text>
            <View style={styles.tools_Affiliate}>
                <TouchableOpacity style={styles.btn_Affiliate}>
                    <Text style={styles.text_btn_Affiliate}>Mã giới thiệu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_Affiliate}>
                    <Text style={styles.text_btn_Affiliate}>Kho bài viết</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_Affiliate}>
                    <Text style={styles.text_btn_Affiliate}>Kho ảnh/video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_Affiliate}>
                    <Text style={styles.text_btn_Affiliate}>Buff Tiktok</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_Affiliate}>
                    <Text style={styles.text_btn_Affiliate}>Buff Facebook</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Affiliate_content: {
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 30
    },
    title_Affiliate: {
        marginBottom: 20,
        fontSize: 16.5,
        fontWeight: 'bold'
    },
    tools_Affiliate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20
    },
    btn_Affiliate: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor:'#F44393',
        borderRadius:10
    },
    text_btn_Affiliate:{
        fontWeight:'700',
        color:'#fff',
        
    }
})