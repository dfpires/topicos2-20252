import {SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native'
import {useState, useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"

const STORAGE_KEY = "@lista_tarefas"

export default function App(){
    const [tarefa, setTarefa] = useState("")
    const [tarefas, setTarefas] = useState([])
    
    const adicionarTarefa = () => {
        const nome = tarefa.trim() // retira espaços antes e depois do nome
        if (!nome) return
        const nova = {
            id: Date.now().toString(),
            nome: nome
        }
        setTarefas([...tarefas, nova])
        setTarefa("")
        console.log(tarefas)
    }
    const renderItem = ({item}) => (
        <View>
            <Text> {item.nome} </Text>
        </View>
    )
    //carrega da memória ao iniciar
    useEffect( () => {
        (async () => {
            try {
                const salvo = await AsyncStorage.getItem(STORAGE_KEY)
                if (salvo){
                    setTarefas(JSON.parse(salvo))
                }
            }
            catch(e) {
                Alert.alert("Erro", "Não foi possível carregas as tarefas")
            }
        })()
    }, [])

    // salva em disco sempre que a lista for alterada
    useEffect( () => {
        (async () => {
            try {
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas))
            }
            catch(e){
                Alert.alert("Erro", "Não fo possível salvar as tarefas")
            }
        })()
    }, [tarefas]) 

    return (
        <SafeAreaView>
            <Text> 📌Lista de Tarefas (persistente) </Text>
            <View>
                <TextInput placeholder="Digite uma tarefa ..." value={tarefa}
                            onChangeText={setTarefa}/>
                <TouchableOpacity onPress={adicionarTarefa}>
                    <Text> Adiciona </Text>
                </TouchableOpacity>
            </View>
            <FlatList data={tarefas}
                       keyExtractor={ (item) => item.id}
                       renderItem={renderItem}
                       ListEmptyComponent = {
                        <Text> Nenhuma tarefa ainda </Text>
                       }/>
        </SafeAreaView>
    )
}