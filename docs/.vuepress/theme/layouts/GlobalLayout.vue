<template>
  <div class="markdown-body flex-grow font-serif text-lg rounded-lg shadow-lg">
    <Nav />
    <component :is="layout"></component>
    <Footer />
  </div>
</template>
<script>
import Nav from "@theme/components/Nav.vue";
import Footer from "@theme/components/Footer.vue";
import HomeLayout from "@theme/layouts/HomeLayout.vue";
import RecipesLayout from "@theme/layouts/RecipesLayout.vue";
import RecipesListLayout from "@theme/layouts/RecipesListLayout.vue";

export default {
  components: {
    Nav,
    Footer,
    HomeLayout,
    RecipesLayout,
    RecipesListLayout
  },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || "HomeLayout";
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/style.styl';
</style>