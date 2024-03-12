import { StyleSheet, Text, View,Image } from 'react-native'
import React ,{useState}from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
export default function InfCome() {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateKT,setDateKT]=useState(new Date(1598051730000));

    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
    };
  

  return (
    <View style={styles.dateTimeInCome}>
       <View style={styles.timeInCome}>
      <View style={{marginRight:2}}>
      <Image source={require('../../../assets/icon_clock.png')} />
      </View>
       <Text style={styles.textTimeInCome}>Từ </Text>
       <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
          style={{backgroundColor:''}}
        />
         <Text style={styles.textTimeInCome}> đến </Text>
        <DateTimePicker
          testID="dateTimePicker"
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
    dateTimeInCome:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1,
        paddingTop:8,
        paddingBottom:8,
        borderColor: '#F14291',
        borderRadius:10,
        backgroundColor:'#FFF6FA'
    },
    timeInCome:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
       
        paddingLeft:10
    },
    textTimeInCome:{
        fontSize:19
    }
})