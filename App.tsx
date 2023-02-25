import { StyleSheet, Text, View } from "react-native";
import Person from "./components/Person";

export default function App() {
  return (
    <View style={styles.container}>
      <Person
        name="Emmanuelle"
        age={37}
        driverLisense={{ valid: true, expirationDate: 2027 }}
        education={[
          { name: "Curso React Native SDP 2023-1", complete: false },
          { name: "Curso React SDP 2022-3", complete: true },
        ]}
      />
      <Person
        name={"Juan"}
        driverLisense={undefined}
        education={[{ name: "", complete: true }]}
      />
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
});
