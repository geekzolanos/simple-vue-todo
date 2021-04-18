<template>
  <form id="frm--add" @submit="submit">
      <input type="text" 
                placeholder="Nueva Tarea..." 
                v-model="content" 
                required>
      <button type="submit">
          <fa-icon icon="plus" />
      </button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            content: ''
        }
    },
    methods: {
        submit(e) {
            e.preventDefault();
            this.$emit('submit', this.content);
            this.content = '';
        }
    }
}
</script>

<style scoped>
    #frm--add {
        display: flex;
    }

    input, button {        
        appearance: none;
    }

    input:focus, button:focus {        
        outline: none;
    }

    #frm--add input {
        padding: 1rem 8px;
        flex: 1;
        border-radius: 4px 0 0 4px;
        border: 1px solid #b7b7b7;
    }

    #frm--add button {
        border-radius: 0 4px 4px 0;
        width: 36px;
        border: none;
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
    }
</style>