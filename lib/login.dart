import 'package:flutter/material.dart';

import 'home_page.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  var mycontroller = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          color: Colors.red,
        ),
      ),
      body: Column(
        children: [
          // Sign in text
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 30.0),
            child: Row(
              children: [
                const Text(
                  'Sign In',
                  style: TextStyle(
                      color: Colors.red, fontWeight: FontWeight.bold, fontSize: 24),
                ),
              ],
            ),
          ),
          const SizedBox(
            height: 20.0,
          ),

          // username or email text field
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20.0),
            child: TextField(

              controller: mycontroller,
              decoration: InputDecoration(
                label: Text('username or email'),
                  filled: true,
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30),
                    borderSide: BorderSide(
                      color: Colors.black,
                    ),
                  )),
            ),
          ),
          SizedBox(
            height: 20.0,
          ),

          // password text field
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: TextField(
              decoration: InputDecoration(
                label: Text('password'),
                filled: true,
                fillColor: Colors.white,
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(30),
                    borderSide: BorderSide(color: Colors.black)),
              ),
            ),
          ),
          const SizedBox(
            height: 60.0,
          ),

          // log in button
          TextButton(
            style: TextButton.styleFrom(backgroundColor: Colors.red, minimumSize: Size(400, 55)),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => HomePage(),
                ),
              );
            },
            child: const Text(
              'Log In',
              style: TextStyle(
                color: Colors.white,
              ),
            ),
          ),
          const SizedBox(
            height: 10.0,
          ),

          // or text
          const Text(
            'OR',
            style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
          ),
          const SizedBox(
            height: 10.0,
          ),

          // facebook login button
          TextButton(
            style: TextButton.styleFrom(backgroundColor: Colors.indigo, minimumSize: Size(400, 55)),
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
    );
  }
}
