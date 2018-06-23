let app = new Vue({
    el: "main#app",
    data: {
        itemCollection: [],
        newItem: {
            name: '',
            count: '',
            baseprice: ''
        }
    },
    created() {
        this.itemCollection.push(new cartitem('tej', 2, 200));
        this.itemCollection.push(new cartitem('kenyér', 5, 200));
        this.itemCollection.push(new cartitem('gumicukor', 10, 500));
    },
    methods: {
        GetTotal() {
            return this.itemCollection
                .map(item => {
                    return item.GetTotalPrice();
                })
                .reduce((acc, price) => {
                    return acc + price;
                })
        },
        AddNewItem() {
            if (!cartitem.CanBeConstructed(
                    this.newItem.name,
                    this.newItem.count,
                    this.newItem.baseprice)) {
                return;
            }
            this.itemCollection.push(new cartitem(
                this.newItem.name,
                this.newItem.count,
                this.newItem.baseprice
            ));
            this.newItem = {
                name: '',
                count: '',
                baseprice: ''
            }
        }

    }
});