import React, {useState, useEffect, useRef, createContext, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Flex, Spacer } from 'react-native-flex-layout';
import Dictionary from './pages/Dictionary';
import Phrases from './pages/Phrases';
import Numbers from './pages/Numbers';
import Alphabet from './pages/Alphabet';





function Home({navigation}) {
  

  const pages = [{id: 0, title: "Phrases", icon: "comment-text-multiple", link: "Phrases", color: '#a4bacc'},{id: 1, title: "Dictionary", icon: "book-open", link:"Dictionary", color: '#8a8794'},
  {id: 2, title: "Numbers", icon: "numeric", link: "Numbers", color: '#832432'},{id: 4, title: "Alphabet", icon: "alphabetical-variant", link: "Alphabet", color: '#2f3641'}];


  return(
   
<SafeAreaView style={styles.container}>
    <FlatList
    style={styles.flatList}
    numColumns={1}
    keyExtractor={(item)=> item.id}
    data={pages}
    renderItem={({item})=> (
      <TouchableOpacity style={[styles.touchable, {backgroundColor: item.color}]} onPress={()=> {navigation.navigate(item.link, {toggleN : false}) }}>
        
         <Flex fill inline>
        <Icon name={item.icon} size={25} color="black"/>
        <Spacer/>
        <Text style={styles.itemText}>{item.title}</Text>
        <Spacer/>
        </Flex>
      </TouchableOpacity>
    )}
    />

    <StatusBar style="auto" />
  </SafeAreaView>

  )
}



export default function App() {
  
  const Stack = createNativeStackNavigator();
  const [toggleNumbers, setToggleNumbers] = useState(false);
  const [hideNumbers, setHideNumbers] = useState(false);
 
  


  return (
    
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <NavigationContainer>
     <Stack.Navigator >
        <Stack.Screen name="Home" component={Home} options={{headerTitleStyle:{fontWeight: 'bold', fontSize: 20}, headerStyle:{ backgroundColor: 'white'}, headerShadowVisible: false}} />
        <Stack.Screen name="Phrases" component={Phrases} options={{headerTitleStyle:{fontWeight: 'bold', fontSize: 20}, headerStyle:{backgroundColor: 'white'}, headerShadowVisible: false}}/>
        <Stack.Screen name="Dictionary" component={Dictionary} options={{headerTitleStyle:{fontWeight: 'bold', fontSize: 20}, headerStyle:{ backgroundColor: 'white'}, headerShadowVisible: false}}/>
        <Stack.Screen name="Numbers" component={Numbers} options={{ headerTitleStyle:{fontWeight: 'bold', fontSize: 20}, headerStyle:{ backgroundColor: 'white'}, headerShadowVisible: false,
         headerRight: () => (<SafeAreaView style={styles.toggles}>
          <Icon name={ toggleNumbers ? "toggle-switch" :"toggle-switch-off-outline"} size={30} color="black" onPress={()=> {setToggleNumbers(!toggleNumbers) }} style={{paddingRight: '5%'}}/>
          <Icon name={ hideNumbers ? "eye-off" :"eye-outline"} onPress={()=> {setHideNumbers(!hideNumbers) }} size={30} color="black"/>
          </SafeAreaView>)
      }}/>
        <Stack.Screen name="Alphabet" component={Alphabet} options={{headerTitleStyle:{fontWeight: 'bold', fontSize: 20}, headerStyle:{ backgroundColor: 'white'}, headerShadowVisible: false}}/>
      </Stack.Navigator>
     
    </NavigationContainer>
    </IconComponentProvider>
   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
 
  },
  
  title: {
    fontSize: 32,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 500,
   
  },
  
  touchable: { 
    margin: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '25px',
    borderColor: "black",
    borderWidth: 5
 
   },
   flatList :{
    marginTop:"50%",
    width: "85%",
   },
  
  headers: {
    fontWeight: '500',
    textAlign: 'center'
  },
  toggles: {
    flexDirection:'row',
    justifyContent: 'space-between',
  //  zIndex: '100',
   // display: 'flex',
   // alignItems: 'flex-end',
   // paddingLeft: "750%",
   // paddingTop: "-100%"
  },
 
});
