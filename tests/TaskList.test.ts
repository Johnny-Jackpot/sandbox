import { TaskList, Task } from '../src/TaskList';

describe('TaskList', () => {
  let taskList: TaskList;

  beforeEach(() => {
    //Arrange
    taskList = new TaskList();
  })


  describe('addTask', () => {
    it('should add a task to the list', () => {
      //Arrange
      const description = 'Test task';
      //Act
      const task = taskList.addTask(description);
      // Assert
      expect(task).toBeInstanceOf(Task);
      expect(task.description).toBe(description);
      expect(taskList.getTasks()).toContain(task);
    });

    it('should assign unique IDs to tasks', () => {
      //Act
      const task1 = taskList.addTask('Task 1');
      const task2 = taskList.addTask('Task 2');
      // Assert
      expect(task1.id).not.toBe(task2.id);
    });
  });

  describe('completeTask', () => {
    it('should mark a task as completed', () => {
      //Arrange
      const task = taskList.addTask('Test task');
      //Act
      taskList.completeTask(task.id);
      // Assert
      expect(task.completed).toBe(true);
    });

    it('should throw an error when completing a non-existent task', () => {
      //Act Assert
      expect(() => taskList.completeTask(999))
        .toThrow('Task with id 999 not found');
    });
  });

  describe('removeTask', () => {
    it('should remove a task from the list', () => {
      //Arrange
      const task = taskList.addTask('Test task');
      //Act
      taskList.removeTask(task.id);
      // Assert
      expect(taskList.getTasks()).not.toContain(task);
    });

    it('should throw an error when removing a non-existent task', () => {
      //Act Assert
      expect(() => taskList.removeTask(999))
      .toThrow('Task with id 999 not found');
    });
  });

  describe('getTasks', () => {
    it('should return all tasks', () => {
      //Act
      const task1 = taskList.addTask('Task 1');
      const task2 = taskList.addTask('Task 2');
      const tasks = taskList.getTasks();
      // Assert
      expect(tasks).toContain(task1);
      expect(tasks).toContain(task2);
    });
  });

  describe('getCompletedTasks', () => {
    it('should return only completed tasks', () => {
      //Arrange
      const task1 = taskList.addTask('Task 1');
      const task2 = taskList.addTask('Task 2');
      //Act
      taskList.completeTask(task1.id);
      const completedTasks = taskList.getCompletedTasks();
      // Assert
      expect(completedTasks).toContain(task1);
      expect(completedTasks).not.toContain(task2);
    });
  });

  describe('getIncompleteTasks', () => {
    it('should return only incomplete tasks', () => {
      //Arrange
      const task1 = taskList.addTask('Task 1');
      const task2 = taskList.addTask('Task 2');
      //Act
      taskList.completeTask(task1.id);      
      const incompleteTasks = taskList.getIncompleteTasks();
      // Assert
      expect(incompleteTasks).not.toContain(task1);
      expect(incompleteTasks).toContain(task2);
    });
  });
});