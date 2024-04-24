import { StyleSheet } from "react-native";
import { Text, View, Pressable } from "react-native";

function GoalItem(props) {
  // GoalItem의 text를 props로 받아와서 출력

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed}) =>pressed && styles.pressItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,    
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
