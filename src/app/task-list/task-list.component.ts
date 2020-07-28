import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {


  public items = []; 

	public newTask; 



	public addToList() { 
		if (this.newTask == '') { 
		} 
		else { 
			this.items.push(this.newTask); 
			this.newTask = ''; 
		} 
	} 
	public deleteTask(index) { 
		this.items.splice(index, 1); 
	} 
  constructor() { }

  ngOnInit() {
  }

}
