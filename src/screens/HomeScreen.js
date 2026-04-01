import React, { useState } from "react";
import { View, Button, FlatList, TextInput } from "react-native";

import { getCurrencyByDate } from "../api/currencyApi";
import { formatDate } from "../utils/formatDate.js";
import CurrencyItem from "../components/CurrencyItem";
import SwipeBox from "../components/SwipeBox";

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const loadCurrency = async () => {
    const date = formatDate(new Date());
    const result = await getCurrencyByDate(date);
    setData(result);
  };

  const filteredData = data.filter((item) => {
    const query = search.toLowerCase();

    return (
      item.cc.toLowerCase().includes(query) ||
      item.txt.toLowerCase().includes(query)
    );
  });

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      
      {/* 🔥 НАШ SWIPE */}
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <SwipeBox />
      </View>

      <Button title="Load Currency" onPress={loadCurrency} />

      <TextInput
        placeholder="Search currency..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.r030.toString()}
        renderItem={({ item }) => (
          <CurrencyItem item={{ code: item.cc, name: item.txt }} />
        )}
      />
    </View>
  );
}