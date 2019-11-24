<template>
	<div class="blog-list__container"> 
        <div class="blog-list__header">
            <h1>All Recipes</h1>    
        </div>

        
       
        <ul class="blog-list">
            <li v-for="(item, index) in filteredList"
                class="blog-list__item">
                <div>
                    {{item.frontmatter.title}}
                </div>

            </li>
        </ul>

       
    </div>
</template>
<script>
export default {
    name: 'RecipesList',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    
    computed: {
        filteredList() {
            const props = this.$options.propsData
            if (props) {
                if (props.list && props.list.length > 0) {
                    return props.list.filter(item => {
                        const isRecipe = item.frontmatter.type == 'recipe'
                        if (isRecipe)
                            {
                                return item
                            }
                        
                    })
                }
            }
        },
    }
    
}
</script>