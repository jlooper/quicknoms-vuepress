<template>
  <div>
    <div class="markdown-body font-serif text-lg rounded-lg shadow-lg">
      <RecipesList :list="$site.pages" />
    </div>
  </div>
</template>
<script>
import VideosList from "@theme/components/VideosList.vue";

export default {
  components: {
    VideosList
  }
};
</script>