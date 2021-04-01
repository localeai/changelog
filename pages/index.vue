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
  async asyncData ({ $content }) {
    const releases = await $content('releases').fetch()
    const filteredReleases = releases && releases.filter(release => release.published) || []
    return {
      releases: filteredReleases  
    }
  }
};
</script>

<style lang="scss" scoped></style>
