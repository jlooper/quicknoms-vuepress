<template>
  <div class="markdown-body">
    <h1 class="text-3xl pb-5 pt-5 ml-5 text-sans">{{$page.frontmatter.title}}</h1>

    <div class="text-gray-800 p-5">
      {{$page.frontmatter.description}}
    </div>
    <h2 class="text-gray-900 text-2xl p-5">
     Ingredients
    </h2>
     <div class="text-gray-800 p-5" v-for="ingredient in $page.frontmatter.ingredients">
      {{ingredient}}
    </div>

     <h2 class="text-gray-900 text-2xl p-5">
     Tools
    </h2>
    <div class="text-gray-800 p-5" v-for="ingredient in $page.frontmatter.tools">
      {{tools}}
    </div>

     <h2 class="text-gray-900 text-2xl p-5">
     Method
    </h2>
    <div class="text-gray-800 p-5">
      {{$page.frontmatter.method}}
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipesLayout"
};
</script>
