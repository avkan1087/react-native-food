import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResultes";

const SearchScreen = () => {
   const [term, setTerm] = useState("");
   const [searchApi, results, errorMessage] = useResults();

   return (
      <View>
         <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null}
         <Text>We have Found {results.length} resultes</Text>
      </View>
   );
};

const styles = StyleSheet.create({});

export default SearchScreen;
