<template>
  <header>
    <h1>{{ title }}</h1>
    <Button :text="showAddTask ? 'Close' : 'Add Task' " :color="showAddTask ? 'red' : 'green' " @toggle="$emit('toggle')"/>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: {
      title: String,
      default: "Hmm, Something's missing",
      showAddTask: Boolean,
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
}
</style>