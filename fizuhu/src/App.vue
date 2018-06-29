<template>
    <div>

        <Navigation></Navigation>
            <keep-alive>
                <component :is="currentPage"></component>
            </keep-alive>      
        <Footer></Footer>

    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
//pages
import index from './pages/index.vue';
import blog from './pages/blog.vue';

export default {
    components:{
        Navigation,
        Footer,
        index,
        blog
    },
    data: function(){
        return {
            currentPage: "blog"
        };
    }
}
</script>
