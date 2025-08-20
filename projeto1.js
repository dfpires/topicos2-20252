import {SafeAreaView, Text, View, Button, StyleSheet} from 'react-native'
import {useState} from 'react'

export default function App(){
    const [clicou, setClicou] = useState(false)
    const alternaMensagem = () => setClicou( (prev) => !prev)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}> Olá, React Native </Text>
            <Text style={styles.mensagem}> 
                {clicou ? "Você clicou no botão" : "Toque no botão"} 
            </Text>
            <View style={styles.areaBotao}>
                <Button 
                    title={ clicou ? "Resetar": "Clique aqui"}
                    onPress={alternaMensagem}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F7FB"
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 12,
    },
    mensagem: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center"
    },
    areaBotao: {
        width: 200
    }
})