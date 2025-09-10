import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import {SafeAreaView, Text, View, TextInput, TouchableOpacity} from "react-native"
import {useState} from "react"

function FormScreen({navigation}){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const enviar = () => {
        const n = nome.trim()
        const e = email.trim()
        if (!n || !e) return
        // navegar para o outro componente - Detail
        navigation.navigate("Detalhes", {nome: n, email: e})
    }
    return (
        <SafeAreaView>
            <Text> Cadastro rápido </Text>
            <View>
                <Text> Nome </Text>
                <TextInput 
                    value={nome} onChangeText={setNome} placeholder="Informe nome"/>
                <Text> E-mail </Text>
                <TextInput
                    value={email} onChangeText={setEmail} placeholder="Informe email"/>    
                <TouchableOpacity onPress={enviar}>
                    <Text> Enviar </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
function DetailScreen({route, navigation}){
    const {nome, email} = route.params ?? {}
    return (
        <SafeAreaView>
            <Text> Detalhes </Text>
            <View>
                <Text> Nome: {nome} </Text> 
                <Text> E-mail: {email} </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Form")}>
                    <Text> Voltar e editar </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const Stack = createStackNavigator()

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Form">
                    <Stack.Screen 
                        name="Form" 
                        component={FormScreen}
                        options={{title: "Formulário"}}/>
                    <Stack.Screen 
                        name="Detalhes" 
                        component={DetailScreen}
                        options={{title: "Confirmação"}}/>    
                </Stack.Navigator>
        </NavigationContainer>       
    )
}