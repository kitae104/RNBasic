import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler() {
    console.log("Goal Deleted!");
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList /* 목록이 길어지는 경우 ScrollView 대신 FlatList 사용 */
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              /> /* text를 이용하여 정보 전달 */
            );
          }}
          keyExtractor={(item, index) => {
            /* keyExtractor: 각 아이템의 고유한 키를 지정 */
            return item.id;
          }}
          alwaysBounceVertical={false} /* 수직 스크롤의 바운스 여부 */
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

  goalsContainer: {
    flex: 5,
  },
});
