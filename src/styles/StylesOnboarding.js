import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    fontSize: 45,
    color: "black",
    marginBottom: 50,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subLogin: {
    fontSize: 20,
    color: "black",
    fontWeight: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  username: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "white",
    padding: 5,
  },
  password: {
    margin: 30,
    borderBottomWidth: 1,
    width: 300,
    borderBottomColor: "white",
    padding: 5,
  },
  txtbtn: {
    color: "#8B4513",
  },
  btn: {
    width: 250,
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 300,
    borderRadius: 5,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
  cadastro: {
    color: "#CD853F",
  },
  botaoCadastro: {
    color: "#CD853F",
    fontWeight: "600",
  },

  test: {
    padding: 10,
    flexDirection: "row",
    gap: 3,
  },
  icon: {
    marginBottom: 20,
  },
});
