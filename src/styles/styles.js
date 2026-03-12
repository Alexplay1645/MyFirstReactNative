import { StyleSheet } from "react-native";

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },

  display: {
    fontSize: 42,
    textAlign: "right",
    marginBottom: 30
  },

  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  button: {
    width: "30%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 10
  },

  buttonText: {
    fontSize: 24
  }

});