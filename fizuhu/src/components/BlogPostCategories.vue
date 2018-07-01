<template>
    <div class="mt-5">
                <h3>Kategóriák</h3>
                <ul class="list-group list-group-flush">

                  <li class="list-group-item"> 
                  <a href="" @click.prevent="OnCategoryClick()">Összes</a></li>

                  <li class="list-group-item" 
                  v-for="(category, index) in categoryCollection" 
                  :key="index">
                  <a href="" @click.prevent=OnCategoryClick(category)>{{ category }}</a></li>
                 
                </ul>
              </div>
</template>

<script>
export default {
    props: [
        'postCollection'
    ],
    computed:{
        categoryCollection(){
            const categories = this.postCollection.map(post =>{
                return post.category;
            });
            return categories.filter((category, index) => {
                return categories.indexOf(category) == index;
            });
        }
    },
    methods:{
        OnCategoryClick(category){
            if(category){
                this.$emit('categoryChange', category);
            } else{
                this.$emit('categoryChange');
            }
        }
    }
};
</script>
