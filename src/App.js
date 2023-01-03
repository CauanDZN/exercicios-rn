import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import CompPadrao, {Comp1, Comp2} from "./components/Multi";
import Primeiro from "./components/Primeiro";
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Contador from "./components/Contador";

function App() {
    return (
        <SafeAreaView style={style.app}>
            <Titulo principal="Cadastro" secundario="Tela de Cadastro" />
            <MinMax min={3} max={20} />
            <Aleatorio min={3} max={20} />
            <Primeiro />
            <CompPadrao />
            <Comp1 />
            <Comp2 />
            <Contador inicial={0} passo={1} />
            <Botao />
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