<template>
  <div>
    <div class="markdown-body font-serif text-lg rounded-lg shadow-lg">
      <RecipesList :list="$site.pages" />
    </div>
  </div>
</template>
<script>
import RecipesList from "@theme/components/RecipesList.vue";

export default {
  components: {
    RecipesList
  }
};
</script>
