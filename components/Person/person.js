import { View, Text } from "react-native-web";

const Person = ({
  name = "",
  age = 0,
  driverLisense = { valid: false, expirationDate: 2000 },
  education = [],
}) => {
  return (
    <>
      <Text>{name}</Text>
      <Text>{age}</Text>
      {driverLisense.valid && <Text>{driverLisense.expirationDate}</Text>}
      {education.map((item, index) => (
        <View key={`person-education-list-${index}`}>
          <Text>{item.name}</Text>
          <Text>{item.complete ? "Completado" : "En curso"}</Text>
        </View>
      ))}
    </>
  );
};

export default Person;
