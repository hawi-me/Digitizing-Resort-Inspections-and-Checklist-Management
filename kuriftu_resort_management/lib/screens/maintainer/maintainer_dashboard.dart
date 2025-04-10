import 'package:flutter/material.dart';
import '../login_screen.dart';
import 'task_detail_screen.dart';
import '../../models/task.dart';
import '../../widgets/task_card.dart';

class MaintainerDashboard extends StatefulWidget {
  const MaintainerDashboard({Key? key}) : super(key: key);

  @override
  State<MaintainerDashboard> createState() => _MaintainerDashboardState();
}

class _MaintainerDashboardState extends State<MaintainerDashboard> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  final List<Task> _pendingTasks = [];
  final List<Task> _inProgressTasks = [];
  final List<Task> _completedTasks = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _loadTasks();
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  Future<void> _loadTasks() async {
    // Simulate API call
    await Future.delayed(const Duration(seconds: 1));

    setState(() {
      _pendingTasks.addAll([
        Task(
          id: '1',
          title: 'Fix AC in Room 203',
          description: 'AC is not cooling properly. Guest complained about high temperature.',
          location: 'Room 203',
          priority: Priority.high,
          dueDate: DateTime.now().add(const Duration(hours: 2)),
          status: TaskStatus.pending,
          category: 'Maintenance',
          reportedBy: 'Front Desk',
        ),
        Task(
          id: '2',
          title: 'Leaking Shower in Room 118',
          description: 'Water leaking from shower head and causing water damage.',
          location: 'Room 118',
          priority: Priority.medium,
          dueDate: DateTime.now().add(const Duration(hours: 4)),
          status: TaskStatus.pending,
          category: 'Plumbing',
          reportedBy: 'Housekeeping',
        ),
      ]);

      _inProgressTasks.addAll([
        Task(
          id: '3',
          title: 'Replace Light Bulbs in Lobby',
          description: '3 light bulbs need replacement in the main lobby area.',
          location: 'Main Lobby',
          priority: Priority.low,
          dueDate: DateTime.now().add(const Duration(hours: 8)),
          status: TaskStatus.inProgress,
          category: 'Electrical',
          reportedBy: 'Manager',
        ),
      ]);

      _completedTasks.addAll([
        Task(
          id: '4',
          title: 'Fix Broken Chair in Restaurant',
          description: 'Chair leg is broken and needs repair or replacement.',
          location: 'Restaurant',
          priority: Priority.medium,
          dueDate: DateTime.now().subtract(const Duration(hours: 5)),
          status: TaskStatus.completed,
          completedDate: DateTime.now().subtract(const Duration(hours: 1)),
          category: 'Furniture',
          reportedBy: 'Restaurant Staff',
        ),
      ]);

      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: const Text('Maintainer Dashboard'),
        actions: [
          IconButton(
            icon: const Icon(Icons.logout),
            onPressed: () {
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const LoginScreen()),
              );
            },
          ),
        ],
        bottom: TabBar(
          controller: _tabController,
          tabs: const [
            Tab(text: 'Pending'),
            Tab(text: 'In Progress'),
            Tab(text: 'Completed'),
          ],
          indicatorColor: Colors.white,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white70,
        ),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : TabBarView(
              controller: _tabController,
              children: [
                _buildTaskList(_pendingTasks, TaskStatus.pending),
                _buildTaskList(_inProgressTasks, TaskStatus.inProgress),
                _buildTaskList(_completedTasks, TaskStatus.completed),
              ],
            ),
    );
  }

  Widget _buildTaskList(List<Task> tasks, TaskStatus status) {
    if (tasks.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              status == TaskStatus.completed ? Icons.check_circle : Icons.assignment_outlined,
              size: 64,
              color: Colors.grey.shade400,
            ),
            const SizedBox(height: 16),
            Text(
              'No ${status.name} tasks',
              style: TextStyle(
                fontSize: 18,
                color: Colors.grey.shade600,
              ),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: _loadTasks,
      child: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: tasks.length,
        itemBuilder: (context, index) {
          final task = tasks[index];
          return TaskCard(
            task: task,
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => TaskDetailScreen(task: task),
                ),
              ).then((_) => _loadTasks());
            },
          );
        },
      ),
    );
  }
}
