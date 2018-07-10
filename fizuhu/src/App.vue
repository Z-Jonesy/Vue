<template>
    <div>

        <Navigation></Navigation>
        <router-view></router-view>
        <Footer></Footer>

    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import navItems from './navItems';

export default {
    name: "App",
    components:{
        Navigation,
        Footer
        
    },
    
};
</script>
