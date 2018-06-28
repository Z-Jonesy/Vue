<template>
    <div>
        {{message}}
        <div>
            <CounterButton></CounterButton>
        </div>
    </div>
</template>

<script>
import CounterButton from './CounterButton.vue';
export default {
    components: { CounterButton },
    data: function() {
        return {
            message: 'Sikerült a vue behúzás'
        }
    }
}
</script>

