import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

// App principal
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(title: 'Semana 3', home: ListaTarefasPage());
  }
}

// classe que contém a lista dinâmica
class ListaTarefasPage extends StatefulWidget {
  @override
  _ListaTarefasPageState createState() => _ListaTarefasPageState();
}

class _ListaTarefasPageState extends State<ListaTarefasPage> {
  final TextEditingController _controller = TextEditingController();
  final List<String> _tarefas = [];

  void adicionarTarefa() {
    String texto = _controller.text.trim();
    if (texto.isNotEmpty) {
      setState(() {
        _tarefas.add(texto);
        _controller.clear();
      }); // fecha setState
    } // fecha if
  } // fecha adicionarTarefa
  
  void removerTarefa(int index){
    setState(() {
      _tarefas.removeAt(index);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Semana 3 - Lista de Tarefas')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                labelText: "Digite uma tarefa",
                suffixIcon: IconButton(
                  icon: Icon(Icons.add),
                  onPressed: adicionarTarefa,
                ), // fecha IconButton
              ), // fecha InputDecoration
              onSubmitted: (_) => adicionarTarefa(),
            ), // fecha TextField
            SizedBox(height: 20),
            Expanded(
              child: _tarefas.isEmpty 
                  ? Center(
                       child: Text("Nenhuma tarefa adicionada", style: TextStyle(color: Colors.grey),
                              ), // fecha Text
                    ) // fecha Center
                  : ListView.builder(
                      itemCount: _tarefas.length,
                      itemBuilder: (context, index){
                        return Card(
                          child: ListTile(
                            title: Text(_tarefas[index]),
                            trailing: IconButton(
                                      icon:Icon(Icons.delete, color: Colors.red),
                                      onPressed: () => removerTarefa(index)
                            ),
                          ),
                        ); // fecha return
                      },
                  ), // fecha ListView
            ), // fechaExpanded
          ], // fecha children
        ), // fecha Column
      ), // fecha Padding
    ); // fecha Scaffold
  } // fecha build
} // fecha classe
