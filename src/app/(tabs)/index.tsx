import { StyleSheet, FlatList, Pressable, Image } from "react-native";

import { Text, View } from "../../components/Themed";

import tweets from "../../../assets/data/tweets";
import Tweet from "../../components/Tweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        contentContainerStyle={{
          gap: 20,
        }}
        renderItem={({ item }) => <Tweet tweet={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
      <Link asChild href={"/new-tweet"}>
        <Pressable style={styles.floatButton}>
          <Entypo name="plus" size={24} color="white" />
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1DA1F2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoStyles: {
    width: 40,
    height: 40,
  },
});
