import 'package:flutter/material.dart';
import '../../models/task.dart';
import '../../widgets/photo_gallery.dart';
import 'package:intl/intl.dart';

class TaskDetailScreen extends StatefulWidget {
  final Task task;

  const TaskDetailScreen({Key? key, required this.task}) : super(key: key);

  @override
  State<TaskDetailScreen> createState() => _TaskDetailScreenState();
}

class _TaskDetailScreenState extends State<TaskDetailScreen> {
  late Task _task;
  final TextEditingController _notesController = TextEditingController();
  bool _isUpdating = false;

  @override
  void initState() {
    super.initState();
    _task = widget.task;
  }

  @override
  void dispose() {
    _notesController.dispose();
    super.dispose();
  }

  void _updateTaskStatus(TaskStatus newStatus) {
    setState(() {
      _isUpdating = true;
    });

    // Simulate API call
    Future.delayed(const Duration(seconds: 1), () {
      setState(() {
        _task = _task.copyWith(
          status: newStatus,
          completedDate: newStatus == TaskStatus.completed ? DateTime.now() : null,
        );
        _isUpdating = false;
      });

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Task marked as ${newStatus.name}'),
          backgroundColor: Theme.of(context).primaryColor,
        ),
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: const Text('Task Details'),
        actions: [
          IconButton(
            icon: const Icon(Icons.history),
            onPressed: () {
              // Show task history
            },
          ),
        ],
      ),
      body: _isUpdating
          ? const Center(child: CircularProgressIndicator())
          : SingleChildScrollView(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  // Task header
                  Card(
                    margin: EdgeInsets.zero,
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              _buildPriorityBadge(_task.priority),
                              const SizedBox(width: 8),
                              _buildStatusBadge(_task.status),
                              const Spacer(),
                              Text(
                                'ID: ${_task.id}',
                                style: const TextStyle(
                                  color: Colors.grey,
                                  fontSize: 12,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 12),
                          Text(
                            _task.title,
                            style: const TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Row(
                            children: [
                              const Icon(Icons.location_on_outlined, size: 16, color: Colors.grey),
                              const SizedBox(width: 4),
                              Text(
                                _task.location,
                                style: const TextStyle(color: Colors.grey),
                              ),
                            ],
                          ),
                          const SizedBox(height: 4),
                          Row(
                            children: [
                              const Icon(Icons.category_outlined, size: 16, color: Colors.grey),
                              const SizedBox(width: 4),
                              Text(
                                _task.category,
                                style: const TextStyle(color: Colors.grey),
                              ),
                            ],
                          ),
                          const SizedBox(height: 4),
                          Row(
                            children: [
                              const Icon(Icons.person_outline, size: 16, color: Colors.grey),
                              const SizedBox(width: 4),
                              Text(
                                'Reported by: ${_task.reportedBy}',
                                style: const TextStyle(color: Colors.grey),
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              Expanded(
                                child: _buildInfoCard(
                                  'Due Date',
                                  DateFormat('MMM dd, yyyy - h:mm a').format(_task.dueDate),
                                  Icons.calendar_today,
                                  _isOverdue() ? Colors.red : Colors.black87,
                                ),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: _task.completedDate != null
                                    ? _buildInfoCard(
                                        'Completed',
                                        DateFormat('MMM dd, yyyy - h:mm a').format(_task.completedDate!),
                                        Icons.check_circle_outline,
                                        Colors.green,
                                      )
                                    : _buildInfoCard(
                                        'Time Left',
                                        _getTimeLeft(),
                                        Icons.timer_outlined,
                                        _isOverdue() ? Colors.red : Colors.black87,
                                      ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Task description
                  Card(
                    margin: EdgeInsets.zero,
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Description',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(_task.description),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Photos
                  Card(
                    margin: EdgeInsets.zero,
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Photos',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 8),
                          const PhotoGallery(
                            photos: [
                              'https://via.placeholder.com/300x200?text=Issue+Photo+1',
                              'https://via.placeholder.com/300x200?text=Issue+Photo+2',
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),

                  // Notes
                  Card(
                    margin: EdgeInsets.zero,
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Add Notes',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                          const SizedBox(height: 8),
                          TextField(
                            controller: _notesController,
                            maxLines: 3,
                            decoration: const InputDecoration(
                              hintText: 'Add your notes here...',
                            ),
                          ),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              Expanded(
                                child: ElevatedButton.icon(
                                  onPressed: () {
                                    // Add photo functionality
                                  },
                                  icon: const Icon(Icons.camera_alt),
                                  label: const Text('Add Photo'),
                                  style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.grey.shade200,
                                    foregroundColor: Colors.black87,
                                  ),
                                ),
                              ),
                              const SizedBox(width: 16),
                              Expanded(
                                child: ElevatedButton.icon(
                                  onPressed: () {
                                    // Save notes functionality
                                    if (_notesController.text.isNotEmpty) {
                                      ScaffoldMessenger.of(context).showSnackBar(
                                        const SnackBar(
                                          content: Text('Notes saved'),
                                        ),
                                      );
                                      _notesController.clear();
                                    }
                                  },
                                  icon: const Icon(Icons.save),
                                  label: const Text('Save Notes'),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
      bottomNavigationBar: _task.status != TaskStatus.completed
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Row(
                  children: [
                    if (_task.status == TaskStatus.pending)
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () => _updateTaskStatus(TaskStatus.inProgress),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Theme.of(context).colorScheme.secondary,
                          ),
                          child: const Text('Start Task'),
                        ),
                      ),
                    if (_task.status == TaskStatus.inProgress) ...[
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () => _updateTaskStatus(TaskStatus.completed),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: Colors.green,
                          ),
                          child: const Text('Mark Complete'),
                        ),
                      ),
                    ],
                  ],
                ),
              ),
            )
          : null,
    );
  }

  Widget _buildPriorityBadge(Priority priority) {
    Color color;
    String text;

    switch (priority) {
      case Priority.low:
        color = Colors.green;
        text = 'Low';
        break;
      case Priority.medium:
        color = Colors.orange;
        text = 'Medium';
        break;
      case Priority.high:
        color = Colors.red;
        text = 'High';
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(4),
        border: Border.all(color: color),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: color,
          fontSize: 12,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildStatusBadge(TaskStatus status) {
    Color color;
    String text;

    switch (status) {
      case TaskStatus.pending:
        color = Colors.grey;
        text = 'Pending';
        break;
      case TaskStatus.inProgress:
        color = Colors.blue;
        text = 'In Progress';
        break;
      case TaskStatus.completed:
        color = Colors.green;
        text = 'Completed';
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: color.withOpacity(0.1),
        borderRadius: BorderRadius.circular(4),
        border: Border.all(color: color),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: color,
          fontSize: 12,
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }

  Widget _buildInfoCard(String title, String value, IconData icon, Color textColor) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.grey.shade100,
        borderRadius: BorderRadius.circular(8),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            title,
            style: TextStyle(
              fontSize: 12,
              color: Colors.grey.shade700,
            ),
          ),
          const SizedBox(height: 4),
          Row(
            children: [
              Icon(icon, size: 16, color: textColor),
              const SizedBox(width: 4),
              Expanded(
                child: Text(
                  value,
                  style: TextStyle(
                    color: textColor,
                    fontWeight: FontWeight.w500,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  bool _isOverdue() {
    return _task.status != TaskStatus.completed && DateTime.now().isAfter(_task.dueDate);
  }

  String _getTimeLeft() {
    if (_isOverdue()) {
      final difference = DateTime.now().difference(_task.dueDate);
      if (difference.inHours < 24) {
        return 'Overdue by ${difference.inHours}h';
      } else {
        return 'Overdue by ${difference.inDays}d';
      }
    } else {
      final difference = _task.dueDate.difference(DateTime.now());
      if (difference.inHours < 1) {
        return '${difference.inMinutes}m left';
      } else if (difference.inHours < 24) {
        return '${difference.inHours}h ${difference.inMinutes % 60}m left';
      } else {
        return '${difference.inDays}d ${difference.inHours % 24}h left';
      }
    }
  }
}
