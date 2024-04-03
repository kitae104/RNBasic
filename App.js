import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello React Native!!</Text>
      </View>
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>한글 작업 반영</Text>
      <Button title="Click me!" onPress={() => alert("Button Clicked!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16,
  }
});
