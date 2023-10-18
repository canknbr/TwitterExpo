import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Tweet from "../../components/Tweet";
import tweets from "../../../assets/data/tweets";
import { useLocalSearchParams } from "expo-router";
const TweetScreen = () => {
  const { id } = useLocalSearchParams();
  const singleTweet = tweets.find((t) => t.id === id);
  if (!singleTweet) {
    return <Text>not found</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}>
      <Tweet tweet={singleTweet} />
    </View>
  );
};

export default TweetScreen;

const styles = StyleSheet.create({});
