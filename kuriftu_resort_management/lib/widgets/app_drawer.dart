// import 'package:flutter/material.dart';
// import 'package:kuriftu_resort_management/screens/employee/checklist_screen.dart';
// import 'package:kuriftu_resort_management/screens/profile_sreen.dart';
// import '../screens/maintainer/maintainer_dashboard.dart';

// class AppDrawer extends StatelessWidget {
//   final String userRole;
  
//   const AppDrawer({
//     Key? key,
//     required this.userRole,
//   }) : super(key: key);

//   @override
//   Widget build(BuildContext context) {
//     return Drawer(
//       child: ListView(
//         padding: EdgeInsets.zero,
//         children: [
//           DrawerHeader(
//             decoration: BoxDecoration(
//               color: Theme.of(context).primaryColor,
//             ),
//             child: Column(
//               crossAxisAlignment: CrossAxisAlignment.start,
//               children: [
//                 const CircleAvatar(
//                   radius: 30,
//                   backgroundColor: Colors.white,
//                   child: Icon(
//                     Icons.person,
//                     size: 40,
//                     color: Color(0xFF1A5F7A),
//                   ),
//                 ),
//                 const SizedBox(height: 10),
//                 const Text(
//                   'John Doe',
//                   style: TextStyle(
//                     color: Colors.white,
//                     fontSize: 18,
//                     fontWeight: FontWeight.bold,
//                   ),
//                 ),
//                 Text(
//                   userRole == 'maintainer' ? 'Maintenance Staff' : 'Resort Staff',
//                   style: const TextStyle(
//                     color: Colors.white70,
//                     fontSize: 14,
//                   ),
//                 ),
//               ],
//             ),
//           ),
//           ListTile(
//             leading: const Icon(Icons.dashboard),
//             title: const Text('Dashboard'),
//             onTap: () {
//               Navigator.pop(context);
//               if (userRole == 'maintainer') {
//                 Navigator.pushReplacement(
//                   context,
//                   MaterialPageRoute(builder: (context) => const MaintainerDashboard()),
//                 );
//               } else {
//                 Navigator.pushReplacement(
//                   context,
//                   MaterialPageRoute(builder: (context) => const EmployeeDashboard()),
//                 );
//               }
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.person),
//             title: const Text('Profile'),
//             onTap: () {
//               Navigator.pop(context);
//               Navigator.push(
//                 context,
//                 MaterialPageRoute(builder: (context) => const ProfileScreen()),
//               );
//             },
//           ),
//           if (userRole == 'maintainer')
//             ListTile(
//               leading: const Icon(Icons.build),
//               title: const Text('Maintenance Tasks'),
//               onTap: () {
//                 Navigator.pop(context);
//                 // Navigate to maintenance tasks
//               },
//             ),
//           if (userRole == 'employee')
//             ListTile(
//               leading: const Icon(Icons.checklist),
//               title: const Text('My Checklists'),
//               onTap: () {
//                 Navigator.pop(context);
//                 // Navigate to checklists
//               },
//             ),
//           const Divider(),
//           ListTile(
//             leading: const Icon(Icons.add_circle_outline),
//             title: const Text('Recommend Maintenance'),
//             onTap: () {
//               Navigator.pop(context);
//               // Show recommendation dialog
//               if (userRole == 'maintainer') {
//                 (context as Element).findAncestorStateOfType<_MaintainerDashboardState>()
//                     ?._showRecommendationDialog();
//               } else {
//                 (context as Element).findAncestorStateOfType<_EmployeeDashboardState>()
//                     ?._showRecommendationDialog();
//               }
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.settings),
//             title: const Text('Settings'),
//             onTap: () {
//               Navigator.pop(context);
//               // Navigate to settings
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.help_outline),
//             title: const Text('Help & Support'),
//             onTap: () {
//               Navigator.pop(context);
//               // Navigate to help
//             },
//           ),
//         ],
//       ),
//     );
//   }
// }
