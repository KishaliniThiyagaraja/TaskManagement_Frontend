export class Task {
  id: number;
  Title: string;
  Description: string;
  DueDate: string;
  Priority: string;

  constructor(obj: any) {
    this.id = obj.id != null ? obj.id : null;
    this.Title = obj.Title != null ? obj.Title : null;
    this.Description = obj.Description != null ? obj.Description : null;
    this.DueDate = obj.DueDate != null ? obj.DueDate : null;
    this.Priority = obj.Priority != null ? obj.Priority : null;
  }
}
