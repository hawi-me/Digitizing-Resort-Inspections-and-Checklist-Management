// import 'package:flutter/material.dart';
// import 'package:shared_preferences/shared_preferences.dart';


// class LocaleProvider extends ChangeNotifier {
//   Locale _locale = const Locale('en', 'US');
  
//   Locale get locale => _locale;
  
//   LocaleProvider() {
//     _loadLocaleFromPrefs();
//   }
  
//   void setLocale(Locale locale) {
//     _locale = locale;
//     _saveLocaleToPrefs();
//     notifyListeners();
//   }
  
//   Future<void> _loadLocaleFromPrefs() async {
//     final prefs = await SharedPreferences.getInstance();
//     final languageCode = prefs.getString('language_code') ?? 'en';
//     final countryCode = prefs.getString('country_code') ?? 'US';
//     _locale = Locale(languageCode, countryCode);
//     notifyListeners();
//   }
  
//   Future<void> _saveLocaleToPrefs() async {
//     final prefs = await SharedPreferences.getInstance();
//     await prefs.setString('language_code', _locale.languageCode);
//     await prefs.setString('country_code', _locale.countryCode ?? '');
//   }
  
//   String get currentLanguage {
//     switch (_locale.languageCode) {
//       case 'en':
//         return 'English';
//       case 'am':
//         return 'አማርኛ';
//       default:
//         return 'English';
//     }
//   }
// }
