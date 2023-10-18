import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Entypo, EvilIcons } from "@expo/vector-icons";
type IconTypeProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};
const IconComponents = ({ icon, text }: IconTypeProps) => {
  return (
    <View style={styles.iconContainer}>
      <EvilIcons name={icon} size={24} color="gray" />
      <Text
        style={{
          fontSize: 12,
          color: "gray",
        }}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});
export default IconComponents;
