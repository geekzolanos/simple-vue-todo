<template>
  <div id="app">
    <Topbar />
    <div class="app--container">
      <Welcome />
      <TaskSection />
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar';
import Welcome from './components/Welcome';
import TaskSection from './components/TaskSection';

export default {
  name: 'Todo',
  components: {
    Topbar,
    Welcome,
    TaskSection
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .app--container {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .welcome {
    display: none;
    flex: 2;
  }

  .task--section {
    flex: 1;
  }

  @media(min-width: 768px) {
    .welcome {
      display: block;
      flex: 1;
    }
  }

  @media(min-width: 1024px) {
    .welcome {
      flex: 2;
    }
  }
  
</style>
