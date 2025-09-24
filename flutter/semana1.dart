import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
     title: 'Flutter Demo',
     home: Scaffold(
      appBar: AppBar(
        title: Text('Semana 1 - Olá Flutter'),
               backgroundColor: Colors.blue
      ), // fecha appBar
      body: Center (
        child: Column (
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'Olá, Flutter!!!', 
              style: TextStyle(
                  fontSize: 28, 
                  fontWeight: FontWeight.bold)
            ), // fecha Text
            SizedBox(height: 20),
            Text(
              'Primeiro aplicativo no DartPad',
              style: TextStyle(
                fontSize: 20,
                color: Colors.grey
              ), // fecha TextStyle
            ), // fecha Text
            SizedBox(height: 20),
            Icon(Icons.favorite, color: Colors.red, size: 48),
          ] // fecha children
        ) // fecha Column
      ), // fecha Body
    ), // home
    ); // fecha return
  } // fecha build
} // fecha classe
