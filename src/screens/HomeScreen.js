import React, { useState } from "react";
import { View, Button, FlatList, Text } from "react-native";

import { getCurrencyByDate } from "../api/currencyApi";
import { formatDate } from "../utils/formatDate";

export default function HomeScreen() {
  const [data, setData] = useState([]);

  const loadCurrency = async () => {
    const date = formatDate(new Date());
    const result = await getCurrencyByDate(date);
    setData(result);
  };

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <Button title="Load Currency" onPress={loadCurrency} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.r030.toString()}
        renderItem={({ item }) => (
        <Text style={{ padding: 10 }}>
            {item.cc} - {item.txt} : {item.rate}
        </Text>
        )}
      />
    </View>
  );
}ы