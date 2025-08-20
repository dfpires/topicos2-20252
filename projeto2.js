import {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

export default function App(){
    const [nome, setNome] = useState("")
    const [mensagem, setMensagem] = useState("")

    const saudar = () => {
        setMensagem(`Bem-vindo(a), ${nome} 😂🤘`)
    }
    const limpar = () => {
        setNome("")
        setMensagem("")
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}> Boas-vindas </Text>
            <Text style={styles.subtitulo}> Digite seu nome e toque em "Saudar"</Text>
            <View style={styles.card}>
                <Text> Seu nome </Text>
                <TextInput 
                    style={styles.input}
                    value={nome}
                    placeholder="Ex: Maria"
                    onChangeText={setNome}/>
                <TouchableOpacity 
                    onPress={saudar}
                    style={styles.botao}>
                    <Text> Saudar </Text>    
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={limpar}
                    style={styles.botao}>
                    <Text> Limpar </Text>    
                </TouchableOpacity>
                <View>
                    <Text> 
                        {mensagem || "A saudação aparecerá aqui"}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: "#F3F4F6", 
        justifyContent: "center", padding: 24
    },
    titulo: {
        fontSize: 26, textAlign: "center"

    },
    subtitulo: {
        fontSize: 14, textAlign: "center"
    },
    card: {
        backgroundColor:"#7FFF00",
        borderRadius: 12,
        padding: 16,
        margin: 10
    },
    input: {
        height: 48,
        borderRadius: 10,
        backgroundColor:"#fff",
        margin: 5
    },
    botao: {
        justifyContent: "center",
        alignItems: "center",
        height: 48,
        borderRadius: 10,
        backgroundColor: "#003366",
        margin: 10
    }
})