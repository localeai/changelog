<template>
  <div class="h-full">
    <navigation-bar />
    <change-logs :releases="releases"/>
  </div>
</template>

<script>
import Button from "~/components/shared/Button";
import NavigationBar from "~/components/NavigationBar.vue";
import ChangeLogs from "~/components/ChangeLogs.vue";

export default {
  components: {
    Button,
    NavigationBar,
    ChangeLogs
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    if (this.releases) {
      console.log({ releases: this.releases })
    }
  },
  async asyncData ({ $content }) {
    const releases = await $content('releases').fetch()

    return {
      releases
    }
  }
};
</script>

<style lang="scss" scoped></style>
