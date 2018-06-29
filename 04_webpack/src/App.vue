<template>
    <div>
        <div class="mb-3">
            <input type="text" v-model="theme">
            <input type="number" v-model="offset">
        </div>
        <div>
            <CounterButton :theme="theme" :offset="offset"></CounterButton>
            <CounterButton :theme="theme" :offset="offset"></CounterButton>
            <CounterButton :theme="theme" :offset="offset"></CounterButton>
        </div>
    </div>
</template>

<script>
import CounterButton from './CounterButton.vue';
export default {
    name: 'App',
    components: { CounterButton },
    data: function() {
        return {
            theme: 'success',
            offset: 2
        }
    }
}
</script>

