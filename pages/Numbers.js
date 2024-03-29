import { StyleSheet, FlatList, View } from 'react-native'
import React, { useState, useEffect, useContext, createContext } from 'react'
import { ListItem } from "@react-native-material/core";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ToggleContext, HideContext } from '../App';  

export const listofNumbersContext = createContext();

export default function Numbers() {

  const toggleNumbers = useContext(ToggleContext); 
  const previousList = useContext(listofNumbersContext);
  const hideNumbers = useContext(HideContext)
  const [starClick, setStarClick] = useState(false);

  const [listofNumbers, setListofNumbers] = useState([
    {e: '1', t:  "Hade", selected: false},
    {e: '2', t:  "Kelete", selected: false},
    {e: '3', t:  "Seleste", selected: false}, 
    {e: '4', t:  "Arbaete", selected: false}, 
    {e: '5', t:  "Hamushte", selected: false}, 
    {e: '6', t:  "Shudushte", selected: false},
    {e: '7', t:  "Shewa'ate", selected: false}, 
    {e: '8', t:  "Shemonte", selected: false}, 
    {e: '9', t:  "Tishe'ate", selected: false},
    {e: '10', t:  "Aserte", selected: false}, 

    {e: '20', t:  "äsra", selected: false},
    {e: '30', t:  "selasa", selected: false},
    {e: '40', t:  "’ärb‘ä", selected: false}, 
    {e: '50', t:  "hamsa", selected: false}, 
    {e: '60', t:  "susa", selected: false}, 
    {e: '70', t:  "seb‘ä", selected: false},
    {e: '80', t:  "semanya", selected: false}, 
    {e: '90', t:  "ties‘ä", selected: false}, 
    {e: '100', t:  "mie’äti", selected: false},
    {e: '1000', t:  "sheh/’älfi", selected: false}, 
    {e: '1 million ', t:  "milyon", selected: false}, 
    
  ])
  
 useEffect(() => {


  starClick ?
  setStarClick(false) : null
  

 })

  function selectStar(index){
    listofNumbers[index].selected = !listofNumbers[index].selected;
    setListofNumbers(listofNumbers);

    console.log(listofNumbers)
   
  }


 
 
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
    <View style={styles.container}>
      <FlatList
    style={styles.flatList}
    numColumns={1}
    keyExtractor={(item)=> item.e}
    data={listofNumbers}
  
    renderItem={({item, index})=> (
      toggleNumbers? 
      <ListItem key={item.e} title={item.t} secondaryText={hideNumbers ?  " " : item.e} onPress={()=> {selectStar(index); setStarClick(true)}}  trailing={()=> listofNumbers[index].selected === true ? <Icon name='star' size={25} color="gold"/> :  <Icon name='star-outline' size={25} color="black"/>} />
      :
      <ListItem key={item.e} title={item.e} secondaryText={hideNumbers ?  " " : item.t} onPress={()=> {selectStar(index); setStarClick(true)}}  trailing={()=> listofNumbers[index].selected === true ? <Icon name='star' size={25} color="gold"/> :  <Icon name='star-outline' size={25} color="black"/>} />
        
    )}
    />
    
    </View>
 
  </IconComponentProvider>
  )
}

const styles = StyleSheet.create({
  container: {
  //  flex: 1,
    height: '100%',
    justifyContent: "center",
  //  alignItems: "center",
    backgroundColor: 'white',
    width: '100%',
 
  },
  list: {
    color: "red"
  },
 
 
})