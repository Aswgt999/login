import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Column(
        children: [
          Expanded(
            child: Container(
              
              color: Colors.red,
            ),
          ),
          Container(
            height: 100,
            decoration: BoxDecoration(color: Colors.indigo),
          ),
          Expanded(
            child: Container(
              decoration: BoxDecoration(color: Colors.blue),
            ),
          ),
          Container(
            decoration: BoxDecoration(color: Colors.green),
          ),
          Container(
            decoration: BoxDecoration(color: Colors.yellow),
          ),
          Container(
            decoration: BoxDecoration(color: Colors.orange),
          ),
          Container(
            decoration: BoxDecoration(color: Colors.red),
          ),

        ],
      ),
    );
  }
}
