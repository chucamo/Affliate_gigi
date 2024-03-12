import { SafeAreaView, StyleSheet, View, useWindowDimensions } from 'react-native'
import React ,{useState}from 'react'
import LeaderDiscover from './Discover/LeaderDiscover';
import CommunityDiscover from './Discover/CommunityDiscover';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const renderScene = SceneMap({
  first: LeaderDiscover,
  second: CommunityDiscover,
});
export default function Discover() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Thủ lĩnh' },
    { key: 'second', title: 'Cộng đồng' },

  ]);

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => (
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "#ff0077", height: 2,marginBottom:2 }}
              style={{ backgroundColor: "white",width:'60%',shadowColor:'#fff' }}
              activeColor={"#ff0077"}
              inactiveColor={"gray"}
              pressColor="transparent"
              labelStyle={{
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: 16,
              }}

            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})