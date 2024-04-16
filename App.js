import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={{
      padding: 50,                      // 여백 50
      flexDirection: "row",             // 행으로 정렬
      width: "80%",                     // 너비 80%
      height: 300,                      // 높이 300
      justifyContent: "space-around",   // 
      alignItems: "stretch",            // 
    }}>
      <View style={{
        backgroundColor: "red",         // 배경색 빨간색
        flex: 1,                        // 비율 1
        justifyContent: "center",       // 가로 중앙 정렬
        alignItems: "center",           // 세로 중앙 정렬
      }}>        
        <Text>1</Text>
      </View>
      <View style={{
        backgroundColor: "blue",        // 배경색 파란색
        flex: 1,                        // 비율 1
        justifyContent: "center",       // 가로 중앙 정렬
        alignItems: "center",           // 세로 중앙 정렬
      }}>
        <Text>2</Text>
      </View>
      <View style={{
        backgroundColor: "green",       // 배경색 녹색
        flex: 1,                        // 비율 1
        justifyContent: "center",       // 가로 중앙 정렬
        alignItems: "center",           // 세로 중앙 정렬
      }}>
        <Text>3</Text>
      </View>
    </View>
  );
}


