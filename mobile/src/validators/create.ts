export const validateTask = (title: string | null): string[] => {
  const errors: string[] = [];
  const trimmed = title?.trim();

  if (!trimmed) errors.push("Title is required");
  else if (trimmed.length < 3)
    errors.push("Title must be at least 3 characters");
  return errors;
};

export const validateDueDate = (dueDate: string | null): string[] => {
  const errors: string[] = [];
  if (!dueDate) errors.push("Please select a due date");
  return errors;
};

export const validateAssignee = (assignee: { id: string } | null): string[] => {
  const errors: string[] = [];
  if (!assignee) errors.push("Please select an assignee");
  return errors;
};

export const validateDescription = (description: string): string[] => {
  const errors: string[] = [];
  const trimmed = description.trim();

  if (!trimmed) errors.push("Description is required");
  else if (trimmed.length < 3)
    errors.push("Description must be at least 3 characters");
  return errors;
};

export const validateCreateForm = (
  title: string,
  dueDate: string | null,
  assignee: { id: string } | null,
  description: string,
): string[] => {
  const errors: string[] = [];

  errors.push(...validateTask(title));
  errors.push(...validateDueDate(dueDate));
  errors.push(...validateAssignee(assignee));
  errors.push(...validateDescription(description));

  return errors;
};
