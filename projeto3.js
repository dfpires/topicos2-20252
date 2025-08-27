import {SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native'
import {useState} from 'react'
export default function App(){
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState([])
    const adicionarTarefa = () => {
        if (tarefa.trim().length === 0){
            return // tarefa inválida
        }
        const nova = { // cria a tarefa
            id: Date.now().toString(),
            titulo: tarefa
        }
        setTarefas([...tarefas, nova]) // adiciona no vetor
        setTarefa("")
    }
    const removerTarefa = (id) => {
        setTarefas(tarefas.filter( (item) => item.id != id))
    }
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text> {item.titulo} </Text>
            <TouchableOpacity onPress={ () => removerTarefa(item.id)}
                    style={styles.botaoRemover}>
                <Text> X </Text>
            </TouchableOpacity>
        </View>
    )
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}> Lista de Tarefas </Text>
            <View style={styles.areaInput}>
                <TextInput style={styles.input} placeholder="Digite uma tarefa" 
                            value={tarefa}
                            onChangeText={setTarefa}/>
                <TouchableOpacity style={styles.botaoAdd} 
                                    onPress={adicionarTarefa}>
                    <Text> + </Text>
                </TouchableOpacity>
            </View>
            <FlatList data={tarefas} keyExtractor={(item) => item.id}
                    renderItem={renderItem} ListEmptyComponent={
                        <Text> Nenhum tarefa ainda </Text>
                    }
                />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, padding: 20, backgroundColor:"#0000FF"
    },
    titulo: {
        fontSize: 24, marginBottom: 20, textAlign: "center"
    },
    areaInput: {
        flexDirection: "row", alignItems: "center"
    },
    input: {
        flex: 1, paddingHorizontal: 12, backgroundColor: "#fff",
        marginLeft: 5, marginBottom: 10
    },
    botaoAdd: {
        marginLeft: 10, 
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        flexDirection: "row", justifyContent: "space-between", padding: 12,
        backgroundColor: "#E5E7EB", marginBottom: 8, borderRadius: 8
    },
    botaoRemover: {
        marginLeft: 10, backgroundColor: "#DC2626", borderRadius: 6,
        justifyContent: "center"
    }
})