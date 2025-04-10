// import 'package:flutter/material.dart';
// import 'package:shared_preferences/shared_preferences.dart';

// class ThemeProvider extends ChangeNotifier {
//   ThemeMode _themeMode = ThemeMode.light;
  
//   ThemeMode get themeMode => _themeMode;
  
//   ThemeProvider() {
//     _loadThemeFromPrefs();
//   }
  
//   void toggleTheme() {
//     _themeMode = _themeMode == ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
//     _saveThemeToPrefs();
//     notifyListeners();
//   }
  
//   void setThemeMode(ThemeMode mode) {
//     _themeMode = mode;
//     _saveThemeToPrefs();
//     notifyListeners();
//   }
  
//   Future<void> _loadThemeFromPrefs() async {
//     final prefs = await SharedPreferences.getInstance();
//     final themeIndex = prefs.getInt('theme_mode') ?? 1; // Default to light
//     _themeMode = ThemeMode.values[themeIndex];
//     notifyListeners();
//   }
  
//   Future<void> _saveThemeToPrefs() async {
//     final prefs = await SharedPreferences.getInstance();
//     await prefs.setInt('theme_mode', _themeMode.index);
//   }
  
//   bool get isDarkMode => _themeMode == ThemeMode.dark;
// }
