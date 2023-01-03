import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import CompPadrao, {Comp1, Comp2} from "./components/Multi"
import Primeiro from "./components/Primeiro"
import MinMax from "./components/MinMax"

function App() {
    return (
        <SafeAreaView style={style.app}>
            <MinMax min={3} max={20} />
            {/* <Primeiro />
            <CompPadrao />
            <Comp1 />
            <Comp2 /> */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
})

export default App