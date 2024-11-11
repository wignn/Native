import { baseUrl } from "@/network";
import { Candle } from "@/types/type";
import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function IndexScreen() {
  const [stock, setStock] = useState<Record<string, Candle[]>>({});
  const [refreshing, setRefreshing] = useState(false);

  const onGoToStock = (symbol: string) => {
    router.push(`/stock/${symbol}` as any);
  };

  const fecthStock = async () => {
    try {
      setRefreshing(true);
      const res = await fetch(`${baseUrl("http")}/stock-history`);
      const json = await res.json();
      setStock(json);
    } catch (e) {
      if (e instanceof Error) {
        Alert.alert("Error", e.message);
      }
    } finally {
      setRefreshing(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fecthStock();
    }, [])
  );

  const renderItem = ({ item: symbol }: { item: string }) => {
    return <StockRow 
    onPress={() => onGoToStock(symbol)} 
    symbol={symbol}
    candels={stock[symbol]}
    />;
  };

  return (
    <FlatList
      data={Object.keys(stock)}
      refreshing={refreshing}
      onRefresh={fecthStock}
      keyExtractor={(symbol) => symbol}
      ItemSeparatorComponent={}
      style={styles.flatList}
      renderItem={rederItem}
    />
  );
}

const ItemSeparatorComponent = () => {
  <View style={styles.ItemSeparatorComponent} />;
};

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 30,
  },
  ItemSeparatorComponent: {
    height: 1,
    backgroundColor: "lightgray",
  },
});
