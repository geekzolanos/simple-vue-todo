<template>
  <div class="topbar">
      <span class="topbar--logo">
        <fa-icon icon="clipboard-list" />
      </span>
      <span class="topbar--title">ToDo App</span>
      <div class="topbar--end">
          <a href="#" @click="showAbout">
              <fa-icon icon="info-circle" />
          </a>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        showAbout(e) {
            e.preventDefault();
            alert("TodoList App. Genial, verdad?");
        }
    }
}
</script>

<style scoped>
    .topbar {
        display: flex;
        min-height: 64px;
        align-items: center;
        padding: 0 1.8rem;
        background-color: white;
        border-bottom: 1px solid #e7e7e7;
    }

    .topbar--end {
        margin-left: auto;
    }

    .topbar--logo {
        margin-right: 1rem;
        font-size: 1.4em;
    }

    .topbar--title {
        font-weight: bold;
        font-size: 1.2em;
    }
</style>