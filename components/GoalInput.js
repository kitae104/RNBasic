import { View, TextInput, Button, Modal, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // 입력한 텍스트를 App.js로 전달
    setEnteredGoalText(""); // 입력창 초기화
  }

  console.log(enteredGoalText);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput /* TextInput: 사용자로부터 텍스트를 입력받을 수 있는 입력 컴포넌트 */
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler} // 입력한 텍스트를 goalInputHandler로 전달
          value={enteredGoalText} // 입력한 텍스트를 value로 설정 - 초기화
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    //flexDirection: "center", // 행으로 정렬
    justifyContent: "center", // 두 요소 사이의 공간을 최대한 확보
    alignItems: "center", // 세로 중앙 정렬
    //marginBottom: 24, // 아래쪽 패딩 24
    padding: 16, // 전체 패딩 16
    borderBottomWidth: 1, // 아래쪽 테두리 두께 1
    borderBottomColor: "#cccccc", // 아래쪽 테두리 색상
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1, // 테두리 두께
    borderColor: "#e4d0ff", // 테두리 색상
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6, // 테두리 둥글기 6
    width: "100%", // 너비 70%
    padding: 16, // 패딩 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row", // 행으로 정렬
  },
  button: {
    width: "30%", // 너비 40%
    marginHorizontal: 8, // 좌우 마진 8
  },
});
