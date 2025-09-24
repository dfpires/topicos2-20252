import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Semana 2',
      home: ContadorPage(),
    ); // fecha MaterialApp
  } // fecha o build
} // fecha a classe

class ContadorPage extends StatefulWidget {
  @override
  _ContadorPageState createState() => _ContadorPageState();
}

class _ContadorPageState extends State<ContadorPage> {
  int contador = 0;
  String nome = "";
  final TextEditingController _controller = TextEditingController();
  
  void incrementar(){
    setState(() {
      nome = _controller.text;
      contador++;
    } // fecha função anônima 
   ); // fecha setState
  } // fecha incrementar
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Semana 2 - Contador")),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(labelText: "Digite seu nome")
            ), // fecha TextField
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: incrementar,
              child: Text('Clique aqui')
            ), // fecha ElevatedButton
            SizedBox(height: 20),
            Text(
              nome.isEmpty ? 
              "Nenhum nome digitado" :
              "$nome, você clicou $contador vezes",
              style: TextStyle(fontSize: 18)
            ), // fecha Text
          ], // fecha children
        ), // fecha Column
      ), // fecha Padding
    ); // fecha Scaffold
  } // fecha build
} // fecha _ContadorPageState
