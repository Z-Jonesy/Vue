<template>
    <button @click="Increase()" v-bind:class="classes">{{ counterPlusOffset }}</button>
    
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
            return ["btn", "btn-", this.theme];
        },
        counterPlusOffset(){
            return this.counter + this.offset
        }
    }
};
</script>
