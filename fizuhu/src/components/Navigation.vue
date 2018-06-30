 <template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-0 sticky-top">
    <a class="navbar-brand fizu" href="index.html">fizu.hu</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">

        <li class="nav-item px-3" v-for="item in itemCollection" :key="item.id" >
          <a class="nav-link" href="" @click.prevent="OnItemClick(item.id)">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    props: ["itemCollection"],
    methods: {
      OnItemClick(id){
        this.$emit('pageChange');
      }
    }
}
</script>
