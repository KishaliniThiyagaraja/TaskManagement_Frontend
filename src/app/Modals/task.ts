export class Task {
  Id: number;
  Title: string;
  Description: string;
  DueDate: string;
  Priority: string;

  constructor(obj: any) {
    this.Id = obj.Id != null ? obj.Id : null;
    this.Title = obj.Title != null ? obj.Title : null;
    this.Description = obj.Description != null ? obj.Description : null;
    this.DueDate = obj.DueDate != null ? obj.DueDate : null;
    this.Priority = obj.Priority != null ? obj.Priority : null;
  }
}
