import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
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
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>  
        <TextInput            /* TextInput: 사용자로부터 텍스트를 입력받을 수 있는 입력 컴포넌트 */   
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} /> 
      </View>

      <View style={styles.goalsContainer}>
        <FlatList /* 목록이 길어지는 경우 ScrollView 대신 FlatList 사용 */
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {      /* keyExtractor: 각 아이템의 고유한 키를 지정 */
            return item.id;
          }}
          alwaysBounceVertical={false}         /* 수직 스크롤의 바운스 여부 */
        />
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
    color: "white",
  },
  goalText: {
    color: "white",
  },
});
