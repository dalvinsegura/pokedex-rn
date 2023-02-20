import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.context}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesion
      </Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("Account")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  context: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
  },
});
