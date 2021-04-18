import { time } from 'uniqid';
import { TaskStatus } from '../resources/constants';

const TaskIdPrefix = 'task-';

export function createTask(content) {
    return {
        id: time(TaskIdPrefix),
        status: TaskStatus.Pending,
        content
    }
}

export function getTasks() {
    const ret = window.localStorage.getItem(process.env.VUE_APP_LOCAL_STORAGE_KEY);
    return ret ? JSON.parse(ret) : [];
}

export function saveTasks(tasks) {
    const payload = JSON.stringify(tasks);
    window.localStorage.setItem(process.env.VUE_APP_LOCAL_STORAGE_KEY, payload);
}