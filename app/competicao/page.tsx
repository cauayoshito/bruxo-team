import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const pedidos = [
  {
    data: "6 de julho, 2025",
    status: "pendente",
    produtos: [
      {
        nome: "Chocolate dark 40%",
        qtd: 10,
        img: require("../assets/dark.png"),
      },
      {
        nome: "Chocolate ao leite",
        qtd: 10,
        img: require("../assets/milk.png"),
      },
      {
        nome: "Chocolate ao amargo",
        qtd: 8,
        img: require("../assets/bitter.png"),
      },
    ],
  },
  {
    data: "10 de maio, 2025",
    status: "finalizado",
    produtos: [
      {
        nome: "Chocolate dark 40%",
        qtd: 11,
        img: require("../assets/dark.png"),
      },
      {
        nome: "Chocolate 100% cacau",
        qtd: 12,
        img: require("../assets/100.png"),
      },
    ],
  },
];

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Pedidos pendentes</Text>

      {pedidos.map((pedido, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.date}>{pedido.data}</Text>
            <Text
              style={[
                styles.status,
                pedido.status === "pendente"
                  ? styles.statusPendente
                  : styles.statusFinalizado,
              ]}
            >
              Pedido {pedido.status}
            </Text>
          </View>

          {pedido.produtos.map((item, i) => (
            <View key={i} style={styles.produto}>
              <Image source={item.img} style={styles.img} />
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.qtd}>QTD: {item.qtd}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  logo: {
    width: 148,
    height: 132,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: "500",
  },
  status: {
    fontWeight: "bold",
  },
  statusPendente: {
    color: "#d35400",
  },
  statusFinalizado: {
    color: "#2980b9",
  },
  produto: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 6,
    backgroundColor: "#ccc",
  },
  nome: {
    flex: 1,
    fontSize: 15,
  },
  qtd: {
    fontWeight: "bold",
  },
});
