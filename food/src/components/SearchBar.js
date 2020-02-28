import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
   return (
      <View style={styles.background}>
         <Feather style={styles.iconStyle} name='search' />
         <TextInput style={styles.inputStyle} placeholder='Search' />
      </View>
   );
};

const styles = StyleSheet.create({
   background: {
      backgroundColor: "#F0EEEE",
      marginTop: 10,
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: "row"
   },
   inputStyle: {
      flex: 1,
      fontSize: 18
   },
   iconStyle: {
      fontSize: 35,
      alignSelf: "center",
      marginHorizontal: 15
   }
});

export default SearchBar;