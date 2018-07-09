<template>
    <div>

        <Navigation :itemCollection="navItems" @pageChange = "OnPageChange"></Navigation>

    
        <router-view></router-view>

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
    name: "App",
    components:{
        Navigation,
        Footer,
        index,
        blog
    },
    data: function(){
        return {
            currentPage: "",
            navItems: []
        };
    },
    created(){
        this.navItems.push({
            name: "Főoldal",
            id: "index",
            path: "/"
        });
        this.navItems.push({
            name: "Blog",
            id: "blog",
            path: "/blog"
        });
        this.navItems.push({
            name: "Kapcsolat",
            id: "contact",
            path: "/contact"
        })
    },
    methods: {
        OnPageChange(newPage){
            this.currentPage = newPage;
        }
    }
}
</script>
