import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

const Item = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => {
          props.onDeleteItem(props.id);
        }}
        android_ripple={{ color: "#fefefe" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
