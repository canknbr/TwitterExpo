import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import React from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import { Tweet as TweetProps } from "../../types";
import IconComponents from "./IconComponents";
import { Link } from "expo-router";
type TweetPropsType = {
  tweet: TweetProps;
};

const Tweet = ({ tweet }: TweetPropsType) => {
  return (
    <Link href={`/tweet/${tweet.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{ uri: tweet.user?.image }}
        />
        <View style={styles.mainContainer}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>@{tweet.user.username} · 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="lightgrey"
              style={{ marginLeft: "auto", marginRight: 5 }}
            />
          </View>
          <Text style={styles.content} numberOfLines={4}>
            {tweet.content}
          </Text>
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.contentImage} />
          )}
          <View style={styles.footer}>
            <IconComponents icon="comment" text={tweet.numberOfComments} />
            <IconComponents icon="retweet" text={tweet.numberOfRetweets} />
            <IconComponents icon="heart" text={tweet.numberOfLikes} />
            <IconComponents icon="chart" text={tweet.impressions || "0"} />
            <IconComponents
              icon={Platform.OS == "android" ? "share-google" : "share-apple"}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
    paddingHorizontal: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  mainContainer: {
    flex: 1,
  },
  userInfoContainer: {
    flexDirection: "row",
    gap: 3,
  },
  name: {
    fontWeight: "600",
  },
  username: {
    fontWeight: "400",
    color: "grey",
  },
  content: {
    lineHeight: 20,
    marginBottom: 4,
  },
  contentImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 20,
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
    marginTop: 2,
  },
});

export default Tweet;
