export class Task {
    title: string;
    dueDate: Date;
    priority: 'High' | 'Low' | 'Medium';
    status: 'To Do' | 'Completed' | 'InProgress';
    //actions: ('Edit' | 'Delete')[];
  
    constructor(
      title: string,
      dueDate: Date,
      priority: 'High' | 'Low' | 'Medium',
      status: 'To Do' | 'Completed' | 'InProgress',
      //actions: ('Edit' | 'Delete')[]
      //actions: [] //Initialize the actions array
    ) {
      this.title = title;
      this.dueDate = dueDate;
      this.priority = priority;
      this.status = status;
      //this.actions = actions;
    }
  }
  
  