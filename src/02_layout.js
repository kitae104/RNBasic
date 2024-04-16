import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,                        // 패딩 50 
  },
  inputContainer: {
    flexDirection: "row",               // 행으로 정렬      
    justifyContent: "space-between",    // 두 요소 사이의 공간을 최대한 확보
    alignItems: "center",               // 세로 중앙 정렬
  },
  textInput: {
    borderColor: "#cccccc",     // 테두리 색상
    borderWidth: 1,             // 테두리 두께
    padding: 8,                // 패딩 10
    width: "80%",               // 너비 80%
    marginRight: 8,             // 오른쪽 마진 8
  },
});
