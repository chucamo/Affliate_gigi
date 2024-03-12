import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function NumberUser({ data }) {
    // const handleNumber=()=>{
    //     if(data?.id===1){
    //         <View>
    //              <TouchableOpacity>
    //         <View style={styles.item_number_user}>
    //             <View style={styles.inf_number_user}>
    //                 <Text style={styles.index_inf_number}>{data?.id}</Text>
    //                 {data?.avatar ?
    //                     (<Image source={{ uri: `${data?.avatar}` }} style={styles.image_user} />) :
    //                     (<Image source={{ uri: 'https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png' }} style={styles.image_user} />)}
    //                 <View style={styles.box_text_infNumber}>
    //                     <Text style={styles.nameUser}>{data?.name}</Text>
    //                     <Text style={styles.officeUser}>{data?.office}</Text>
    //                 </View>
    //             </View>
    //             <View style={styles.quantity_inf_number}>
    //                 <Text>{data?.NumberUser} TV </Text>
    //                 <AntDesign name='caretright' size={20} />
    //             </View>
    //         </View>
    //     </TouchableOpacity>
    //         </View>
    //     }
    //     return (
            
    //     )
    // }
    return (
        <TouchableOpacity>
            <View style={styles.item_number_user}>
                <View style={styles.inf_number_user}>
                    <Text style={styles.index_inf_number}>{data?.id}</Text>
                    {data?.avatar ?
                        (<Image source={{ uri: `${data?.avatar}` }} style={styles.image_user} />) :
                        (<Image source={{ uri: 'https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png' }} style={styles.image_user} />)}
                    <View style={styles.box_text_infNumber}>
                        <Text style={styles.nameUser}>{data?.name}</Text>
                        <Text style={styles.officeUser}>{data?.office}</Text>
                    </View>
                </View>
                <View style={styles.quantity_inf_number}>
                    <Text>{data?.NumberUser} TV </Text>
                    <AntDesign name='caretright' size={20} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
        width: 60,
        height: 60,
        borderRadius: 50
    }

})