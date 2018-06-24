Vue.component('counter-button',{

    props: [
        "theme", "offset"
    ],

    data: function(){
        return {
            counter:0
        };
    },

    template: '<button @click="Increase()" v-bind:class="classes">{{counterPlusOffset}}</button>',
    methods: {
        Increase(){
            this.counter++;
            
        }
    },
    computed: {
        counterPlusOffset(){
            return this.counter + +this.offset;
        },
        classes(){
            return ["btn","btn-"+this.theme];
        }
    }
});