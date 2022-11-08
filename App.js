/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dataSource:[]
  //    };
  //  }
  //  const [modalVisible, setModalVisible] = useState(false);

  const [dataSource, setDataSource] = useState("");
 
  // useEffect(() => {
  //   fetch("http://jsonplaceholder.typicode.com/posts")
  //   .then(response => response.json())
  //   .then((responseJson)=> {
  //     setDataSource(responseJson);
  //   })
  //   .catch(error=>console.log(error))
  // });

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch("http://jsonplaceholder.typicode.com/posts");
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  return (
   <SafeAreaView style={{padding:10}}>
      <FlatList
         padding ={30}
         data={data}
         renderItem={({item}) => 
         <View style={{marginBottom:30}}>
         <Text style={{fontSize:18, fontWeight: "bold"}}>{item.id} . {item.title}</Text>

         {/* <Text style={{height: 50, marginTop:20}}>{item.body}</Text> */}
         <View style={{height: 1,backgroundColor:'gray'}}></View>
         </View>
        }
       />
      
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
