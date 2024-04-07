#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let loop = true;

console.log(chalk.yellow.bold("\n \t Wellcome to Faryal Abbasi Todo-List Application\n"));


let main = async () => {
  while(loop){
    let option = await inquirer.prompt([
      {
        name: "choice",
        type: "list",
        message: "Select an option you want to do:",
        choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
      }
    ]);
    if(option.choice === "Add Task"){
      await addTask()
    }
    else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "View Todo-List"){
      await viewTask()
    }
    else if(option.choice === "Exit"){
      loop = false;
    }
  }
}

// Function to add new task at the list
let addTask = async () => {
  let newTask = await inquirer.prompt([
    {
      name: "task",
      type: "input",
      message: "Enter your new task:"
    }
  ]);
  todos.push(newTask.task);
  console.log(`\n ${newTask.task} task added successfully in Todo-List`);
}

// Function to view all Todo-List Taks
let viewTask = () => {
  console.log("\n Your Todo-List: \n");
  todos.forEach((task, index) => {
    console.log(`${index}: ${task}`)
  })
}

// Function to Delete a task from the list
let deleteTask = async () => {
  await viewTask()
  let taskIndex = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the index number of the task you want to delete :",
    }
  ]);
  let deleteTask = todos.splice(taskIndex.index, 1);
  console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo-List`);
}

// Function to update a task
let updateTask = async () => {
  await viewTask()
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message: "Enter the 'index no' of the task you want to update :"
    },
   {
      name: "new_task",
      type: "input",
      message: "Now Enter your task name :",
    }
  ]);
  todos[update_task_index.index] = update_task_index.new_task
  console.log(`\n Task at index no. ${update_task_index.index} updated successfully [for updated list check option: "View todo list"]`)
}

main();














