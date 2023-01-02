import React from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import CompPadrao, {Comp1, Comp2} from "./components/Multi"
import Primeiro from "./components/Primeiro"

function App() {
    console.warn("Olá!")
    return (
        <SafeAreaView style={style.app}>
            <Primeiro />
            <CompPadrao />
            <Comp1 />
            <Comp2 />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default App