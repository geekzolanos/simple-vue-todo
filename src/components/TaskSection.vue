<template>
    <div class="task--section">
        <div class="container">
            <h2>Lista de tareas</h2>
            <TaskInput @submit="submitTask" />
            <TaskListFilter :tasks="tasks" @update="setFilter" v-if="tasks.length" />

            <perfect-scrollbar v-if="filteredTasks.length">
                <ul class="task--list">
                    <li v-for="task in filteredTasks" :key="task.id">
                        <Task v-bind="task" @update="updateTaskState" @delete="deleteTask"  />
                    </li>
                </ul>
            </perfect-scrollbar>

            <h4 v-else>No hay tareas, cree una desde el campo de arriba.</h4>
        </div>
    </div>
</template>

<script>
import TaskInput from './TaskInput';
import TaskListFilter from './TaskListFilter';
import Task from './Task';
import { TaskStatus } from '../resources/constants';
import { createTask, getTasks, saveTasks } from '../services/TaskService';

export default {
    components: { TaskInput, TaskListFilter, Task },
    data() {
        return {
            currentStatus: null,
            tasks: []
        }
    },
    computed: {
        filteredTasks() {
            return this.tasks.filter(task => this.currentStatus ? 
                task.status == this.currentStatus : true
            );
        }
    },
    methods: {
        submitTask(content) {
            this.tasks = [
                ...this.tasks,
                createTask(content)
            ];
            saveTasks(this.tasks);
        },
        setFilter(status) {
            this.currentStatus = status;
        },
        updateTaskState(id, status) {
            const task = this.tasks.find(task => task.id == id);
            task.status = status;
            saveTasks(this.tasks);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => {
                return task.id != id;
            });

            saveTasks(this.tasks);
        }
    },
    created() {
        this.statuses = TaskStatus;
        this.tasks = getTasks();
    }
}
</script>

<style scoped>
 .task--section {
    position: relative;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    color: white;
    box-shadow: 0 4px 8px #aaa;
    z-index: 10;
 }
 .task--section .container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;
 }

 .task--section .ps {
    margin-top: 1.4rem;
    flex: 1;
 }

 .task--section .task--list {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-right: 1rem;
 }

 .task--section .task--list li {
    margin-bottom: 8px;
 }

 h2 {
    margin-bottom: 1rem;
 }

 h4 {
    text-align: center;
 }
</style>