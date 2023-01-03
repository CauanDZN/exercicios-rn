import React from "react"
import { Text } from 'react-native'
import Estilo from "./estilo"

export default props => {

    return (
        <>
            <Text style={Estilo.textogrande}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </>
    )
}