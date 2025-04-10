// import 'package:flutter/material.dart';
// import 'package:provider/provider.dart';
// import '../providers/locale_provider.dart';

// class LanguageSelector extends StatelessWidget {
//   const LanguageSelector({Key? key}) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     final localeProvider = Provider.of<LocaleProvider>(context);
    
//     return PopupMenuButton<Locale>(
//       icon: const Icon(Icons.language),
//       tooltip: 'Change Language',
//       onSelected: (Locale locale) {
//         localeProvider.setLocale(locale);
//       },
//       itemBuilder: (BuildContext context) => <PopupMenuEntry<Locale>>[
//         const PopupMenuItem<Locale>(
//           value: Locale('en', 'US'),
//           child: Text('English'),
//         ),
//         const PopupMenuItem<Locale>(
//           value: Locale('am', 'ET'),
//           child: Text('አማርኛ'),
//         ),
//       ],
//     );
//   }
// }
