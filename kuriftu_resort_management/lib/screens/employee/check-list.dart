import 'package:flutter/material.dart';
import '../../models/checklist.dart';
import '../../models/checklist_item.dart';

class ChecklistScreen extends StatefulWidget {
  final Checklist checklist;

  const ChecklistScreen({Key? key, required this.checklist}) : super(key: key);

  @override
  State<ChecklistScreen> createState() => _ChecklistScreenState();
}

class _ChecklistScreenState extends State<ChecklistScreen> {
  late Checklist _checklist;
  List<ChecklistItem> _items = [];
  bool _isLoading = true;
  bool _isSubmitting = false;

  @override
  void initState() {
    super.initState();
    _checklist = widget.checklist;
    _loadChecklistItems();
  }

  Future<void> _loadChecklistItems() async {
    // Simulate API call
    await Future.delayed(const Duration(seconds: 1));

    // Generate sample checklist items
    final items = List.generate(
      _checklist.totalItems,
      (index) => ChecklistItem(
        id: 'item_$index',
        title: _getItemTitle(index),
        description: _getItemDescription(index),
        isCompleted: false,
        hasIssue: false,
        notes: '',
        photos: [],
      ),
    );

    setState(() {
      _items = items;
      _isLoading = false;
    });
  }

  String _getItemTitle(int index) {
    if (_checklist.category == 'Housekeeping') {
      final housekeepingItems = [
        'Check bed linens',
        'Clean bathroom',
        'Restock amenities',
        'Vacuum floors',
        'Dust surfaces',
        'Empty trash bins',
        'Check mini bar',
        'Clean windows',
        'Replace towels',
        'Check lighting',
        'Inspect furniture',
        'Clean mirrors',
        'Check air conditioning',
        'Restock coffee station',
        'Sanitize high-touch surfaces',
      ];
      return housekeepingItems[index % housekeepingItems.length];
    } else if (_checklist.category == 'Food & Beverage') {
      final fbItems = [
        'Check refrigerator temperature',
        'Inspect food storage areas',
        'Clean coffee machines',
        'Sanitize food prep surfaces',
        'Check stock levels',
        'Verify menu items availability',
        'Clean dining tables',
        'Inspect glassware',
        'Check bar inventory',
        'Clean ice machines',
        'Inspect dishwasher',
        'Check food expiration dates',
        'Clean beverage dispensers',
        'Verify staff appearance',
        'Check dining area cleanliness',
      ];
      return fbItems[index % fbItems.length];
    } else {
      final facilityItems = [
        'Check pool water quality',
        'Inspect pool deck',
        'Check lifesaving equipment',
        'Verify pool lighting',
        'Inspect lounge chairs',
        'Check pool temperature',
        'Inspect shower areas',
        'Check towel supply',
        'Verify safety signage',
        'Inspect pool filters',
      ];
      return facilityItems[index % facilityItems.length];
    }
  }

  String _getItemDescription(int index) {
    if (_checklist.category == 'Housekeeping') {
      final descriptions = [
        'Ensure bed linens are clean, properly fitted, and free of stains or damage.',
        'Clean and sanitize all bathroom surfaces, fixtures, and floors.',
        'Restock soap, shampoo, conditioner, and other guest amenities.',
        'Thoroughly vacuum all carpeted areas, including under furniture.',
        'Dust all surfaces, including furniture, fixtures, and decorative items.',
        'Empty and clean all trash bins, replace liners as needed.',
        'Check mini bar inventory and restock as needed.',
        'Clean all windows and glass surfaces until streak-free.',
        'Replace used towels with fresh ones, properly folded and arranged.',
        'Ensure all lights are working properly, replace bulbs if needed.',
        'Check all furniture for damage, stains, or wear.',
        'Clean all mirrors until streak-free and properly polished.',
        'Verify air conditioning is working properly and set to appropriate temperature.',
        'Restock coffee, tea, sugar, and creamer in the coffee station.',
        'Sanitize remote controls, light switches, door handles, and other high-touch areas.',
      ];
      return descriptions[index % descriptions.length];
    } else if (_checklist.category == 'Food & Beverage') {
      final descriptions = [
        'Verify refrigerator temperature is between 35-40°F (1.7-4.4°C).',
        'Check that all food items are properly stored and labeled.',
        'Clean and descale coffee machines, check for proper operation.',
        'Clean and sanitize all food preparation surfaces.',
        'Check inventory levels and report any shortages.',
        'Confirm all menu items are available for service.',
        'Clean and sanitize all dining tables and chairs.',
        'Inspect glassware for chips, cracks, or spots.',
        'Verify bar inventory and restock as needed.',
        'Clean and sanitize ice machines, check for proper operation.',
        'Check dishwasher for proper temperature and operation.',
        'Verify all food items are within expiration dates.',
        'Clean and sanitize all beverage dispensers.',
        'Ensure all staff are in proper uniform and well-groomed.',
        'Verify dining area is clean, organized, and ready for service.',
      ];
      return descriptions[index % descriptions.length];
    } else {
      final descriptions = [
        'Test water chemistry, including pH, chlorine, and alkalinity levels.',
        'Ensure pool deck is clean, dry, and free of hazards.',
        'Verify all lifesaving equipment is present and in good condition.',
        'Check that all pool lighting is functioning properly.',
        'Inspect lounge chairs and umbrellas for damage or wear.',
        'Verify pool temperature is within appropriate range.',
        'Check shower areas are clean, sanitized, and draining properly.',
        'Ensure adequate supply of clean towels is available.',
        'Verify all safety signage is visible and in good condition.',
        'Check pool filters are clean and operating properly.',
      ];
      return descriptions[index % descriptions.length];
    }
  }

  void _toggleItemCompletion(int index) {
    setState(() {
      _items[index] = _items[index].copyWith(
        isCompleted: !_items[index].isCompleted,
      );
      _updateCompletedCount();
    });
  }

  void _toggleItemIssue(int index) {
    setState(() {
      _items[index] = _items[index].copyWith(
        hasIssue: !_items[index].hasIssue,
      );
    });
  }

  void _updateItemNotes(int index, String notes) {
    setState(() {
      _items[index] = _items[index].copyWith(
        notes: notes,
      );
    });
  }

  void _updateCompletedCount() {
    final completedCount = _items.where((item) => item.isCompleted).length;
    setState(() {
      _checklist = _checklist.copyWith(
        completedItems: completedCount,
      );
    });
  }

  Future<void> _submitChecklist() async {
    if (_items.any((item) => item.hasIssue && item.notes.isEmpty)) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Please add notes for all reported issues'),
          backgroundColor: Colors.red,
        ),
      );
      return;
    }

    setState(() {
      _isSubmitting = true;
    });

    // Simulate API call
    await Future.delayed(const Duration(seconds: 2));

    setState(() {
      _checklist = _checklist.copyWith(
        status: ChecklistStatus.completed,
      );
      _isSubmitting = false;
    });

    if (!mounted) return;

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: const Text('Checklist submitted successfully'),
        backgroundColor: Theme.of(context).primaryColor,
      ),
    );

    Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.background,
      appBar: AppBar(
        title: Text(_checklist.title),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : Column(
              children: [
                // Progress indicator
                Container(
                  padding: const EdgeInsets.all(16),
                  color: Colors.white,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Progress',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                              color: Colors.grey.shade800,
                            ),
                          ),
                          Text(
                            '${_checklist.completedItems}/${_checklist.totalItems}',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                              color: Theme.of(context).primaryColor,
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 8),
                      LinearProgressIndicator(
                        value: _checklist.completedItems / _checklist.totalItems,
                        backgroundColor: Colors.grey.shade200,
                        color: Theme.of(context).primaryColor,
                        minHeight: 8,
                        borderRadius: BorderRadius.circular(4),
                      ),
                    ],
                  ),
                ),
                const Divider(height: 1),

                // Checklist items
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.all(16),
                    itemCount: _items.length,
                    separatorBuilder: (context, index) => const SizedBox(height: 16),
                    itemBuilder: (context, index) {
                      final item = _items[index];
                      return _buildChecklistItem(item, index);
                    },
                  ),
                ),
              ],
            ),
      bottomNavigationBar: !_isLoading
          ? SafeArea(
              child: Container(
                padding: const EdgeInsets.all(16),
                color: Colors.white,
                child: ElevatedButton(
                  onPressed: _checklist.completedItems == _checklist.totalItems && !_isSubmitting
                      ? _submitChecklist
                      : null,
                  child: _isSubmitting
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(
                            color: Colors.white,
                            strokeWidth: 2,
                          ),
                        )
                      : const Text('Submit Checklist'),
                ),
              ),
            )
          : null,
    );
  }

  Widget _buildChecklistItem(ChecklistItem item, int index) {
    return Card(
      margin: EdgeInsets.zero,
      child: Theme(
        data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          tilePadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
          childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
          leading: Checkbox(
            value: item.isCompleted,
            onChanged: (value) => _toggleItemCompletion(index),
            activeColor: Theme.of(context).primaryColor,
          ),
          title: Text(
            item.title,
            style: TextStyle(
              fontWeight: FontWeight.bold,
              decoration: item.isCompleted ? TextDecoration.lineThrough : null,
              color: item.isCompleted ? Colors.grey : null,
            ),
          ),
          subtitle: item.hasIssue
              ? Row(
                  children: [
                    Icon(Icons.warning_amber_rounded, size: 16, color: Colors.amber.shade700),
                    const SizedBox(width: 4),
                    Text(
                      'Issue reported',
                      style: TextStyle(
                        color: Colors.amber.shade700,
                        fontSize: 12,
                      ),
                    ),
                  ],
                )
              : null,
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(
                icon: Icon(
                  Icons.warning_amber_rounded,
                  color: item.hasIssue ? Colors.amber.shade700 : Colors.grey,
                ),
                onPressed: () => _toggleItemIssue(index),
                tooltip: 'Report Issue',
              ),
              const Icon(Icons.chevron_right),
            ],
          ),
          children: [
            Text(
              item.description,
              style: TextStyle(
                color: Colors.grey.shade700,
                fontSize: 14,
              ),
            ),
            if (item.hasIssue) ...[
              const SizedBox(height: 16),
              TextField(
                decoration: const InputDecoration(
                  hintText: 'Describe the issue...',
                  labelText: 'Issue Notes',
                ),
                maxLines: 3,
                onChanged: (value) => _updateItemNotes(index, value),
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
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}
