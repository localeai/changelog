<template>
<div class="h-full">
    <navigation-bar />
  <div class="content-holder flex flex-col mb-4">
      <div class="flex flex-col my-4">
        <h3 class="text-gray-600">{{ release.releaseDate }}</h3>
        <h2 class="py-2 text-2xl">{{ release.title }}</h2>
        <span class="flex flex-row items-center text-blue-500"
          ><m-icon size="18" class="mr-2">label</m-icon
          >{{ release.version }}</span
        >
      </div>
      <nuxt-content :document="release" />
      <div v-if="release.changes && release.changes.length > 0" class="changelogs flex flex-col mt-4 pb-4">
        <h3 class="text-lg my-4">Other Changes 🛠</h3>
        <div
          v-for="(change, change_index) in release.changes"
          :key="`change_${change_index}`"
          class="log"
        >
          <div class="flex flex-row">
            <div
              class="chit text-white self-start text-sm font-semibold p-1 rounded"
              :style="{
                backgroundColor: getTagDetails(change.tag).color
              }"
            >
              {{ getTagDetails(change.tag).name }}
            </div>
          </div>
          <div class="flex flex-col">
            <h4 class="text-lg mb-2">
              {{ change.title }}
            </h4>
            <p class="text-base text-gray-600">
              {{ change.description }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="release.makers && release.makers.length > 0" class="changelogs flex flex-col mt-4 pb-4">
        <h3 class="text-lg my-4">Engineers Worked on this Release 👷‍♂️</h3>
        <div class="makers flex flex-row">

        <div
          v-for="(maker, maker_index) in release.makers"
          :key="`change_${maker_index}`"
          class="flex flex-col m-2"
        >
          <a :href="`https://github.com/${maker.github}`" rel="noopener noreferrer" target="_blank">
          <img class="avatar rounded-full" :src="`https://github.com/${maker.github}.png`"/>
          </a>
        </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Button from "~/components/shared/Button";
import NavigationBar from "~/components/NavigationBar.vue";
import ChangeLogs from "~/components/ChangeLogs.vue";
import MIcon from "~/components/shared/m-icon";


const tags = {
  FEATURE: "feature",
  BUG_FIX: "fix",
  PERFORMANCE: "perf",
  CHORE: "chore",
  NEW: "new"
};
export default {
  components: {
    Button,
    NavigationBar,
    ChangeLogs,
    MIcon
  },
  data() {
    return {
      tagDetails: {
        [tags.FEATURE]: {
          name: "FEATURE",
          color: "#3B82F6"
        },
        [tags.BUG_FIX]: {
          name: "FIX",
          color: "#A855F7"
        },
        [tags.PERFORMANCE]: {
          name: "PERF",
          color: "#22C55E"
        },
        [tags.CHORE]: {
          name: "CHORE",
          color: "#6B7280"
        },
        [tags.NEW]: {
          name: "NEW",
          color: "#F59E0B"
        }
      }
    };
  },
  computed: {},
  methods: {
    getTagDetails(tag) {
      return this.tagDetails[tag] || { name: tag, color: "gray-500" };
    }
  },
  mounted() {
    if (this.releases) {
      console.log({ releases: this.releases })
    }
  },
  async asyncData ({ $content, params }) {
    const release = await $content('releases', params.slug).fetch()
    return {
      release  
    }
  }
};
</script>
</script>

<style lang="scss">
@import "~/assets/global/mixins";

.content-holder {
  width: 96%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 15px;

   .nuxt-content {
    a {
      @apply text-blue-500;
    }

    h1 {
      @apply text-2xl; 
      @apply font-semibold;
      @apply pb-2;
      @apply pt-4;
      border-bottom: 1px solid #eee;
    }

    h2 {
      @apply text-xl;
      @apply font-semibold;
      @apply pb-2;
      @apply pt-4;
    }

    h3 {
      @apply text-lg;
      @apply pt-2;
    }

    li {
      @apply py-2;
    }

    img {
      @apply py-4;
    }

    blockquote {
      @apply bg-gray-100;
      @apply p-3;
      @apply rounded;
      @apply my-2;
      @apply text-gray-700;
      border-left: 3px solid #c0c0c0;
    }

  }

  .changelogs {
    border-top: 1px solid #eeeeee;
    // border-bottom: 1px solid #eeeeee;

    .log {
      display: grid;
      grid-template-columns: 100px 1fr;
      @apply my-2;
      @include respond-below(sm) {
        grid-template-columns: 1fr;
        .chit {
          margin-bottom: 10px;

          &.blue {
            @apply bg-blue-500;
          }
          &.purple {
            @apply bg-purple-500;
          }

          &.green {
            @apply bg-green-500;
          }

          &.gray {
            @apply bg-gray-500;
          }

          &.yellow {
            @apply bg-yellow-500;
          }
        }
      }
    }
  }

  .makers {
    flex-wrap: wrap;
    .avatar {
      width: 60px;
      height: 60px;
    }
  }
}
</style>