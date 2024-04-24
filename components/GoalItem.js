import { StyleSheet } from "react-native";
import {Text, View, Pressable} from "react-native";

function GoalItem(props) {    // GoalItem의 text를 props로 받아와서 출력
  return (
    <Pressable onPress={props.onDleteItem}>
    <View style={styles.goalItem} onClick={deleteGoalHandler}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
