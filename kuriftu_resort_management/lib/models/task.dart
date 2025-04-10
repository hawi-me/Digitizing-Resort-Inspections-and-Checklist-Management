enum Priority { low, medium, high }

enum TaskStatus { pending, inProgress, completed }

class Task {
  final String id;
  final String title;
  final String description;
  final String location;
  final Priority priority;
  final DateTime dueDate;
  final TaskStatus status;
  final DateTime? completedDate;
  final String category;
  final String reportedBy;

  Task({
    required this.id,
    required this.title,
    required this.description,
    required this.location,
    required this.priority,
    required this.dueDate,
    required this.status,
    this.completedDate,
    required this.category,
    required this.reportedBy,
  });

  Task copyWith({
    String? id,
    String? title,
    String? description,
    String? location,
    Priority? priority,
    DateTime? dueDate,
    TaskStatus? status,
    DateTime? completedDate,
    String? category,
    String? reportedBy,
  }) {
    return Task(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      location: location ?? this.location,
      priority: priority ?? this.priority,
      dueDate: dueDate ?? this.dueDate,
      status: status ?? this.status,
      completedDate: completedDate ?? this.completedDate,
      category: category ?? this.category,
      reportedBy: reportedBy ?? this.reportedBy,
    );
  }
}
