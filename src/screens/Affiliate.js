import {  SafeAreaView } from 'react-native'
import React from 'react'
import Grop_Affiliate from './Affiliate/Grop_Affiliate';
import Affiliate_Tools from './Affiliate/Affiliate_Tools';
export default function Affiliate() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Affiliate_Tools />
        <Grop_Affiliate />
    </SafeAreaView>
  )
}

