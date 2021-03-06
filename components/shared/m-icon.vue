<template>
  <i :class="['material-icons', `m-${size}`]"><slot/></i>
</template>

<script>
export default {
    props: {
        size: {
            type: [String, Number],
            default: "18"
        }
    }
}
</script>

<style>

</style>