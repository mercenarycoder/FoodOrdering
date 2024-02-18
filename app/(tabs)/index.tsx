import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import products from "@/assets/data/products";
import Colors from "@/constants/Colors";
import ProductListItem from "@/components/ProductListItem";
import { useState } from "react";

export default function TabOneScreen() {
  return (
    <View>
      <Text>Hey their my react native app</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{gap:10,padding:10}}
        columnWrapperStyle={{gap:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  topView: {},
});
