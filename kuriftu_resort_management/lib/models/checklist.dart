enum ChecklistStatus { pending, inProgress, completed }

class Checklist {
  final String id;
  final String title;
  final String description;
  final DateTime dueDate;
  final int totalItems;
  final int completedItems;
  final String category;
  final ChecklistStatus status;

  Checklist({
    required this.id,
    required this.title,
    required this.description,
    required this.dueDate,
    required this.totalItems,
    required this.completedItems,
    required this.category,
    required this.status,
  });

  Checklist copyWith({
    String? id,
    String? title,
    String? description,
    DateTime? dueDate,
    int? totalItems,
    int? completedItems,
    String? category,
    ChecklistStatus? status,
  }) {
    return Checklist(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      dueDate: dueDate ?? this.dueDate,
      totalItems: totalItems ?? this.totalItems,
      completedItems: completedItems ?? this.completedItems,
      category: category ?? this.category,
      status: status ?? this.status,
    );
  }
}
