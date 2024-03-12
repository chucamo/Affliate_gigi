import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import { icon_arrow } from '../InCome/Icon_InCome'
import { SvgXml } from "react-native-svg";
export default function DTMySystem() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateKT, setDateKT] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    return (
        <View style={styles.dateTimeInCome}>
            <View style={styles.timeInCome}>
                <View style={{ marginRight: 2 }}>
                    <Image source={require('../../../assets/icon_clock.png')} />
                </View>
                <Text style={styles.textTimeInCome}>Từ </Text>
                <DateTimePicker
                    
                    // testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />
                <Text style={styles.textTimeInCome}> đến </Text>
                <DateTimePicker
                    style={{ backgroundColor: '#FFF6FA' }}
                    // testID="dateTimePicker"
                    value={dateKT}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                />


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dateTimeInCome: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: '#F14291',
        borderRadius: 10,
        backgroundColor: '#FFF6FA'
    },
    timeInCome: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#FFF6FA',
        paddingLeft: 10
    },
    textTimeInCome: {
        fontSize: 19
    }
})