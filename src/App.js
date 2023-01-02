import React from "react"
import { SafeAreaView, Text } from "react-native"
import { Comp1, Comp2 } from "./components/Multi"
import Primeiro from "./components/Primeiro"

function App() {
    return (
        <SafeAreaView>
            <Primeiro />
            <Comp1 />
            <Comp2 />
        </SafeAreaView>
    )
}

export default App