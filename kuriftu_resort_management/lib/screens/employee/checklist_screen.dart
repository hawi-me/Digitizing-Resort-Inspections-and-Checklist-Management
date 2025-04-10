import 'package:flutter/material.dart';
import 'package:kuriftu_resort_management/screens/employee/check-list.dart';
import '../login_screen.dart';
import 'checklist_screen.dart';
import '../../models/checklist.dart';

class EmployeeDashboard extends StatefulWidget {
  const EmployeeDashboard({Key? key}) : super(key: key);

  @override
  State<EmployeeDashboard> createState() => _EmployeeDashboardState();
}

class _EmployeeDashboardState extends State<EmployeeDashboard> {
  final List<Checklist> _checklists = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadChecklists();
  }

  Future<void> _loadChecklists() async {
    // Simulate API call
    await Future.delayed(const Duration(seconds: 1));

    setState(() {
      _checklists.addAll([
        Checklist(
          id: '1',
          title: 'Morning Room Inspection',
          description: 'Complete inspection of all rooms in Block A',
          dueDate: DateTime.now().add(const Duration(hours: 2)),
          totalItems: 15,
          completedItems: 0,
          category: 'Housekeeping',
          status: ChecklistStatus.pending,
        ),
        Checklist(
          id: '2',
          title: 'Restaurant Pre-Opening',
          description: 'Verify all restaurant areas are ready for breakfast service',
          dueDate: DateTime.now().add(const Duration(hours: 1)),
          totalItems: 20,
          completedItems: 0,
          category: 'Food & Beverage',
          status: ChecklistStatus.pending,
        ),
        Checklist(
          id: '3',
          title: 'Pool Area Safety Check',
          description: 'Ensure pool area is clean and all safety equipment is in place',
          dueDate: DateTime.now().add(const Duration(hours: 3)),
          totalItems: 10,
          completedItems: 0,
          category: 'Facilities',
          status: ChecklistStatus.pending,
        ),
        Checklist(
          id: '4',
          title: 'Evening Turn-Down Service',
          description: 'Complete turn-down service for all occupied rooms',
          dueDate: DateTime.now().add(const Duration(hours: 8)),
          totalItems: 12,
          completedItems: 0,
          category: 'Housekeeping',
          status: ChecklistStatus.pending,
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
        title: const Text('Employee Dashboard'),
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
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: _loadChecklists,
              child: SingleChildScrollView(
                physics: const AlwaysScrollableScrollPhysics(),
                padding: const EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Stats cards
                    Row(
                      children: [
                        _buildStatCard(
                          'Pending',
                          _checklists.where((c) => c.status == ChecklistStatus.pending).length.toString(),
                          Icons.pending_actions,
                          Colors.orange,
                        ),
                        const SizedBox(width: 16),
                        _buildStatCard(
                          'Completed',
                          _checklists.where((c) => c.status == ChecklistStatus.completed).length.toString(),
                          Icons.check_circle_outline,
                          Colors.green,
                        ),
                      ],
                    ),
                    const SizedBox(height: 24),

                    // Today's checklists
                    const Text(
                      'Today\'s Checklists',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 16),
                    _checklists.isEmpty
                        ? _buildEmptyState()
                        : ListView.builder(
                            shrinkWrap: true,
                            physics: const NeverScrollableScrollPhysics(),
                            itemCount: _checklists.length,
                            itemBuilder: (context, index) {
                              final checklist = _checklists[index];
                              return _buildChecklistCard(checklist);
                            },
                          ),
                  ],
                ),
              ),
            ),
    );
  }

  Widget _buildStatCard(String title, String value, IconData icon, Color color) {
    return Expanded(
      child: Card(
        elevation: 2,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Icon(icon, color: color, size: 24),
                  const SizedBox(width: 8),
                  Text(
                    title,
                    style: TextStyle(
                      color: Colors.grey.shade700,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text(
                value,
                style: const TextStyle(
                  fontSize: 28,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildChecklistCard(Checklist checklist) {
    final timeLeft = checklist.dueDate.difference(DateTime.now());
    final isUrgent = timeLeft.inHours < 1;

    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: InkWell(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ChecklistScreen(checklist: checklist),
            ),
          ).then((_) => _loadChecklists());
        },
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: _getCategoryColor(checklist.category).withOpacity(0.1),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Text(
                      checklist.category,
                      style: TextStyle(
                        color: _getCategoryColor(checklist.category),
                        fontSize: 12,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const Spacer(),
                  if (isUrgent)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.red.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(4),
                        border: Border.all(color: Colors.red),
                      ),
                      child: Row(
                        children: [
                          const Icon(Icons.timer, color: Colors.red, size: 12),
                          const SizedBox(width: 4),
                          Text(
                            'Urgent',
                            style: TextStyle(
                              color: Colors.red,
                              fontSize: 12,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      ),
                    ),
                ],
              ),
              const SizedBox(height: 12),
              Text(
                checklist.title,
                style: const TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 4),
              Text(
                checklist.description,
                style: TextStyle(
                  color: Colors.grey.shade700,
                  fontSize: 14,
                ),
              ),
              const SizedBox(height: 16),
              Row(
                children: [
                  Icon(
                    Icons.timer_outlined,
                    size: 16,
                    color: isUrgent ? Colors.red : Colors.grey.shade700,
                  ),
                  const SizedBox(width: 4),
                  Text(
                    _formatTimeLeft(timeLeft),
                    style: TextStyle(
                      color: isUrgent ? Colors.red : Colors.grey.shade700,
                      fontWeight: isUrgent ? FontWeight.bold : FontWeight.normal,
                    ),
                  ),
                  const Spacer(),
                  Text(
                    '${checklist.completedItems}/${checklist.totalItems} items',
                    style: TextStyle(
                      color: Colors.grey.shade700,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              LinearProgressIndicator(
                value: checklist.completedItems / checklist.totalItems,
                backgroundColor: Colors.grey.shade200,
                color: Theme.of(context).primaryColor,
                minHeight: 6,
                borderRadius: BorderRadius.circular(3),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildEmptyState() {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const SizedBox(height: 32),
          Icon(
            Icons.check_circle_outline,
            size: 64,
            color: Colors.grey.shade400,
          ),
          const SizedBox(height: 16),
          Text(
            'No checklists for today',
            style: TextStyle(
              fontSize: 18,
              color: Colors.grey.shade600,
            ),
          ),
          const SizedBox(height: 8),
          Text(
            'All your tasks are completed',
            style: TextStyle(
              color: Colors.grey.shade500,
            ),
          ),
        ],
      ),
    );
  }

  Color _getCategoryColor(String category) {
    switch (category) {
      case 'Housekeeping':
        return Colors.purple;
      case 'Food & Beverage':
        return Colors.orange;
      case 'Facilities':
        return Colors.blue;
      default:
        return Colors.teal;
    }
  }

  String _formatTimeLeft(Duration timeLeft) {
    if (timeLeft.isNegative) {
      return 'Overdue';
    } else if (timeLeft.inHours < 1) {
      return '${timeLeft.inMinutes} minutes left';
    } else if (timeLeft.inHours < 24) {
      return '${timeLeft.inHours} hours left';
    } else {
      return '${timeLeft.inDays} days left';
    }
  }
}
