import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // 전체 화면 사용
    padding: 50, // 패딩 50
    paddingHorizontal: 16, // 가로 패딩 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row", // 행으로 정렬
    justifyContent: "space-between", // 두 요소 사이의 공간을 최대한 확보
    alignItems: "center", // 세로 중앙 정렬
    marginBottom: 24, // 아래쪽 패딩 24
    borderBottomWidth: 1, // 아래쪽 테두리 두께 1
    borderBottomColor: "#cccccc", // 아래쪽 테두리 색상
  },
  textInput: {
    borderColor: "#cccccc", // 테두리 색상
    borderWidth: 1, // 테두리 두께
    padding: 8, // 패딩 10
    width: "70%", // 너비 70%
    marginRight: 8, // 오른쪽 마진 8
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
