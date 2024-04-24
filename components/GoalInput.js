import { View, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {

  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // 입력한 텍스트를 App.js로 전달
    setEnteredGoalText("");           // 입력창 초기화
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput /* TextInput: 사용자로부터 텍스트를 입력받을 수 있는 입력 컴포넌트 */
        style={styles.textInput}
        placeholder="Your course goal"
        onChangeText={goalInputHandler}   // 입력한 텍스트를 goalInputHandler로 전달
        value={enteredGoalText}           // 입력한 텍스트를 value로 설정 - 초기화 
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});