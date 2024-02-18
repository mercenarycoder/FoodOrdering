import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "@/constants/Colors";
import { Product } from "@/types";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  const url = {
    uri: product.image || defaultPizzaImage
  }  
  return (
    <View style={styles.container}>
      <Image
        source={{...url}}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toString()}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    margin: 3,
    flex: 1,
    maxWidth:"50%"
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
  },
});
