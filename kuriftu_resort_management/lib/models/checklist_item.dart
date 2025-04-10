class ChecklistItem {
  final String id;
  final String title;
  final String description;
  final bool isCompleted;
  final bool hasIssue;
  final String notes;
  final List<String> photos;

  ChecklistItem({
    required this.id,
    required this.title,
    required this.description,
    required this.isCompleted,
    required this.hasIssue,
    required this.notes,
    required this.photos,
  });

  ChecklistItem copyWith({
    String? id,
    String? title,
    String? description,
    bool? isCompleted,
    bool? hasIssue,
    String? notes,
    List<String>? photos,
  }) {
    return ChecklistItem(
      id: id ?? this.id,
      title: title ?? this.title,
      description: description ?? this.description,
      isCompleted: isCompleted ?? this.isCompleted,
      hasIssue: hasIssue ?? this.hasIssue,
      notes: notes ?? this.notes,
      photos: photos ?? this.photos,
    );
  }
}
