import { Candle } from "@/types/type";
import { StyleSheet } from "react-native";

interface Props {
    symbol: string;
    candles: Candle[];
    onPress: () => void;
}


export function StockRow({ symbol, candles, onPress }: Props) {
    return(

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    imageContainer:{
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        alignItems: "center",
    },

    img:{
        width:60,
height:60,
    }
})