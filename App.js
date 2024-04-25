import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // 모달 상태 설정추가

  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true); // 모달이 보이도록 설정
  }

  function endAddGoalHandler() {
    setModalIsVisible(false); // 모달이 보이지 않도록 설정
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler(); // 모달 닫기
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); // id가 같지 않은 것만 필터링 ==> 삭제
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList /* 목록이 길어지는 경우 ScrollView 대신 FlatList 사용 */
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // 전체 화면 사용
    padding: 50, // 패딩 50
    paddingHorizontal: 16, // 가로 패딩 16
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
