// A Simple Task Manager
// A task manager to create, update, complete and list tasks.

// ------------------- thought-process/sketch ---------------------------------------
// Welcome to Task Manager.
// Option:
// Create a task:
    // No. of task
    // name of task
    // time created
    // time to complete
    // Goal (optional)
// Update a task:
    // name of task to update
    // update status of task (not started, pending, completed)
    // log time of update

// Show tasks:
    // list all tasks by options (status, name, all).
        // name
        // status
        // time created
        // time updated
        // time completed

// Drop Note:
    // A note for self.

type taskStatus = "not-started" | "pending" | "completed";
type option = "not-started" | "pending" | "completed" | "timeToComplete" | "all";
interface Itask {
    name: string;
    status: taskStatus;
    createdAt: Date;
    timeToComplete: Date;
    goal?: string;
}


class Task implements Itask {
    name: string;
    status: taskStatus;
    createdAt: Date;
    timeToComplete: Date;
    goal?: string | undefined;

    constructor(name: string, status: taskStatus, createdAt: Date, timeToComplete: Date, goal?: string) {
        this.name = name;
        this.status = status;
        this.createdAt = createdAt;
        this.timeToComplete = timeToComplete;
        this.goal = goal;
    }


    update({newName, newStatus, newTimeToComplete}:{newName?: string, newStatus: taskStatus, newTimeToComplete: Date}): void{
        if (newName) {
            this.name = newName;
        }
        this.status = newStatus;
        this.timeToComplete = newTimeToComplete;
    }

}



class TaskManager {
    private tasks: Task[] = [];

    createTask(task: Task): void{
        this.tasks.push(task);
        console.log("Task successfully created.");
    }

    updateTask(name: string, changes:{newName?: string, newStatus: taskStatus, newTimeToComplete: Date}): void{
        const task = this.tasks.find(x => x.name === name);
        if (task) {
            task.update(changes);
            console.log("Task updated successfully")
        }
        else {
            console.log("This task wasn't found. Create a new one instead.")
        }
    }

    showTasks(filterby?: option): Task[] {
        // return all task if no option/ 'all'
        if (!filterby || filterby === 'all') {
            return this.tasks
        }

        if (filterby === 'timeToComplete') {
            // return a sorted copy of the task, from least time to most time to complete
            return this.tasks.slice().sort((a, b) => a.timeToComplete.getTime() - b.timeToComplete.getTime())
        }
        // return the filters by task status (not-completed, pending, completed)
        return this.tasks.filter(task => filterby === task.status)
    }

    dropNote(note: string): void {
        console.log(`Note dropped: ${note}`);
    }
}


    





// ------------------------------- Main Function --------------------------------
    
// Import readline to get inputs
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

// helper function to change first letters to title case
function toTitleCase(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .split(/\s+/) // split by one or more spaces
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

async function main() {
    console.log("Welcome to Task Manager");
    const manager = new TaskManager();

    let running = true;
    while (running) {
        console.log(`
        Choose an action:
        1. Create Task
        2. View Tasks
        3. Update Task
        0. Exit
        `);
        const choice = await askQuestion("Enter choice: ");

        switch (choice.trim()) {
            case '1': {
                const name = toTitleCase(await askQuestion("Task name: "));
                const status = await askQuestion("Status (not-started/pending/completed): ") as taskStatus;
                const timeInput = await askQuestion("Time to complete (YYYY-MM-DD): ");
                const time = new Date(timeInput);
                const goal = toTitleCase(await askQuestion("Goal (press enter to skip): "));
                manager.createTask(new Task(name, status, new Date() ,time, goal || undefined));
                await askQuestion('Press Enter to continue...');
                console.clear();
                break;
            }
            
            case '2': {
                const filter = await askQuestion("Filter by (not-started/pending/completed/timeToComplete/all): ") as option;
                const tasks = manager.showTasks(filter);
                if (tasks.length === 0) {
                    console.log("No tasks to show.");
                } else {
                    tasks.forEach((t, i) => {
                        console.log(`${i + 1}. 
                                    Task:     ${t.name} 
                                    Status:   ${t.status} 
                                    Created:  ${t.createdAt.toDateString()} 
                                    Deadline: ${t.timeToComplete.toDateString()}
                                    Goal:     ${t.goal}`);
                    });
                }
                await askQuestion('Press Enter to continue...');
                console.clear();
                break;
            }
            case '3': {
                const name = toTitleCase(await askQuestion("Name of task to update: "));
                const newName = toTitleCase(await askQuestion("New name (press enter to skip): "));
                const newStatus = await askQuestion("New status (not-started/pending/completed): ") as taskStatus;
                const newTimeStr = await askQuestion("New time to complete (YYYY-MM-DD): ");
                const newTime = new Date(newTimeStr);
                manager.updateTask(name, {
                    newName: newName || undefined,
                    newStatus,
                    newTimeToComplete: newTime,
                });
                await askQuestion('Press Enter to continue...');
                console.clear();
                break;
            }
            case '0': {
                running = false;
                console.log("Exiting...");
                break;
            }
            default:
                console.log("Invalid choice. Try again.");
        }
    }

    rl.close();
}

main();