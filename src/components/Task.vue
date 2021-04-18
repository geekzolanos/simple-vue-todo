<template>
  <div class="task--item" :class="{ completed: completed }">
      <label :for="inputName" class="checkbox">
        <input type="checkbox" :id="inputName" :checked="completed" @change="updateStatus">
        <span class="checkmark">
            <fa-icon icon="check" />
        </span>
      </label>
      <h4 class="content">{{ content }}</h4>
      <a class="item--remove" href="#" @click="requestDelete">
          <fa-icon icon="trash" />
      </a>
  </div>
</template>

<script>
import { TaskStatus } from '../resources/constants';

export default {    
    props: {
        id: String,
        content: String,
        status: Number
    },
    computed: {
        inputName() {
            return this.id + '-check';
        },
        completed() {
            return this.status == TaskStatus.Completed;
        }
    },
    methods: {
        updateStatus() {
            const status = this.status == TaskStatus.Pending ?
                TaskStatus.Completed : TaskStatus.Pending;

            this.$emit('update', this.id, status);
        },
        requestDelete(e) {
            e.preventDefault();
            const ret = window.confirm('Confirme. ¿En realidad desea eliminar la tarea seleccionada?');
            ret && this.$emit('delete', this.id);
        }
    }
}
</script>

<style>
    .task--item {
        display: flex;
        align-items: center;
        padding: 1rem;
        background-color: white;
        box-shadow: 0 0 5px #888;
        border-radius: 4px;
        color: black;
    }

    .task--item .content {        
        flex: 1;
        margin: 0;
        margin-left: 1rem;
        margin-right: 1.8rem;
        text-align: justify;
    }

    .task--item.completed .content {
        text-decoration: line-through;
        color: #aaa;
    }

    .task--item .item--remove {
        font-size: 1.2em;
    }

    .task--item label.checkbox {
        position: relative;
    }

    .task--item label.checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .task--item label.checkbox input ~ .checkmark {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 2px solid #b7b7b7;
        color: #4CAF50;
        transition: border-color .15s ease;
        text-align: center;
        cursor: pointer;
    }

    .task--item label.checkbox input:checked ~ .checkmark {
        border-color: #4CAF50;
    }

    .task--item label.checkbox input ~ .checkmark svg {
        opacity: 0;
        vertical-align: -8px;
        transition: opacity .15s ease;
    }

    .task--item label.checkbox input:checked ~ .checkmark svg {
        opacity: 1;
    }
</style>