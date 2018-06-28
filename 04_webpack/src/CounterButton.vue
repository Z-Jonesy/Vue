<template>
    <button @click="Increase()" v-bind:class="classes">{{ counter }}</button>
    
</template>

<script>
export default {
    props: ["theme", "offset"],
    data: function(){
        return {
            counter: 0
        };
    },
    methods: {
        Increase(){
            this.counter++;
        }
    },
    computed:{
        classes(){
            return this.counter + this.offset
        }
    }
};
</script>
