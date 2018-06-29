<template>
    <div>

    <Navigation></Navigation>
    <div>{{ message }}</div>
    <Footer></Footer>
    </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';

export default {
    components:{
        Navigation,
        Footer
    },
    data: function(){
        return {message: 'OK'}
    }
}
</script>
