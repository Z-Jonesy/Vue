let app = new Vue({
    el: 'main#app',
    data: {
        nameFilter: '',
        filmCollection: []
    },
    created() {
        this.filmCollection = [
            'Raging bull',
            'Aliens',
            'Reservoir dogs',
            'Wall - e',
            'The tresor of sierra madre',
            'Whiplash',
            'Some like it hot',
            'Double indemnity',
            'Taxi driver',
            'Vertigo',
            'On the waterfront',
            'Saving private ryan',
            'Inception',
            'The lord of the rings',
            'The silence of the lambs'
        ];
        this.filmCollection.sort(function(a,b){
            return a.localCompare(b);
        })
    },
    methods: {
        GetFilteredList(){
            return this.filmCollection.filter(item => {
                if (this.nameFilter == '') {
                    return true;
                }

                //pozíció megállapítása
                let position = item.toLowerCase().indexOf(this.nameFilter.toLowerCase());
                return position != -1;
            });
        }
    }
});