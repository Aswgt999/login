import 'package:flutter/material.dart';

void main() {
  runApp(const MyWidget());
}



class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        colorSchemeSeed: Colors.indigo,
        useMaterial3: true,
        brightness: Brightness.light, 
      ),
      darkTheme: ThemeData(
        colorSchemeSeed: Colors.blue,
        useMaterial3: true,
        brightness: Brightness.dark, 
      ),
      debugShowCheckedModeBanner: false,
      home: Scaffold(
      appBar: AppBar(
        leading: BackButton(
          color: Colors.red,
        ),
      ),
      body: Column(
          children:[
            const Text(
              'Sign In', 
              style: TextStyle(
                color: Colors.red, 
                fontWeight: FontWeight.bold, 
                fontSize: 24), 
                ),
                SizedBox(height: 20.0,),
            TextField(
              decoration: InputDecoration(
                filled: true, 
                fillColor: Colors.white),
                ),
                SizedBox(height: 20.0,),
            TextField(
              decoration: InputDecoration(
                filled: true,
                fillColor: Colors.white,
              ),
            ),
            SizedBox(height: 20.0,),
            TextButton(
              style: TextButton.styleFrom(backgroundColor: Colors.red),
              onPressed: null,
              child: Text(
                'Log In',
                style: TextStyle(
                  color: Colors.white,
                ),
                ),
            ),
            SizedBox(height: 20.0,),
            Text(
              'OR', 
              style: TextStyle(
                color: Colors.white
                ),
                ),
                SizedBox(height: 20.0,),
            TextButton(
              style: TextButton.styleFrom(backgroundColor: Colors.indigo),
              onPressed: null,
              child: Text(
                'Facebook Login',
                style: TextStyle(
                  color: Colors.white,
                ),
                ),
            ),
          ],
        ),
    ),
    );
  }
}
