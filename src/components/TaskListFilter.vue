<template>
  <ul class="list--filter">
    <li>
        <a href="#" 
            :class="{ active: current == statuses.Completed}"
            @click="setFilter($event, statuses.Completed)">Completadas ({{ completedCount }})</a>
    </li>
    <li>
        <a href="#" 
            :class="{ active: current == statuses.Pending}"
            @click="setFilter($event, statuses.Pending)">Pendientes ({{ pendingCount }})</a>
    </li>
    <li>
        <a href="#" 
            :class="{ active: !current}"
            @click="setFilter($event, null)">Todas ({{ tasks.length }})</a>
    </li>
  </ul>
</template>

<script>
import { TaskStatus } from '../resources/constants';

export default {
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            current: null
        }
    },
    computed: {
        pendingCount() {
            return this.tasks
                .filter(task => task.status == TaskStatus.Pending)
                .length;
        },
        completedCount() {
            return this.tasks
                .filter(task => task.status == TaskStatus.Completed)
                .length;
        }
    },
    methods: {
        setFilter(e, status) {
            e.preventDefault();
            this.current = status;
            this.$emit('update', status);
        }
    },
    created() {
        this.statuses = TaskStatus;
    }
}
</script>

<style scoped>
    .list--filter {
        display: table;
        padding: 0;
        width: 100%;
        list-style: none;
    }

    .list--filter li {
        display: table-cell;
    }

    .list--filter a {
        color: #888;
        text-decoration: none;
    }

    .list--filter a.active {
        color: black;
        text-decoration: underline;
    }
</style>