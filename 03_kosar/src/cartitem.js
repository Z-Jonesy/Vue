class cartitem {
    constructor(name, count, baseprice){
        this.name = name;
        this.count = count;
        this.baseprice = baseprice;
    }

    GetTotalPrice(){
        return this.count * this.baseprice;
    }

    static CanBeConstructed(name, count, baseprice){
        if(!name) {
            return false;
        }
        if(!count) {
            return false;
        }
        if(!baseprice) {
            return false;
        }

    }
}