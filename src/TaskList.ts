export class Task {
  constructor(public id: number, public description: string, public completed: boolean = false) {}
}

export class TaskList {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(description: string): Task {
    const task = new Task(this.nextId++, description);
    this.tasks.push(task);
    return task;
  }

  completeTask(id: number): void {
    const task = this.findTaskById(id);
    task.completed = true;
  }

  removeTask(id: number): void {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error(`Task with id ${id} not found`);
    }
    this.tasks.splice(index, 1);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getCompletedTasks(): Task[] {
    return this.tasks.filter(t => t.completed);
  }

  getIncompleteTasks(): Task[] {
    return this.tasks.filter(t => !t.completed);
  }

  private findTaskById(id: number): Task {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  }
}