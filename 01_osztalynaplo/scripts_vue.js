let app = new Vue({
    el: 'main#app',
    data: {
        pageTitle: 'Osztálynapló',
        studentCollection: [
            {name: 'Anna', gender: 'l' },
            {name: 'Béla', gender: 'f' },
            {name: 'Tomi', gender: 'f' },
            {name: 'András', gender: 'f' },
            {name: 'Panka', gender: 'l' },
            {name: 'Dóri', gender: 'l' },
        ],
        newStudent:{
            name: '',
            gender: ''
        }
    },
    methods:{
        AddNewStudent(){
            if(!this.newStudent) {
                return;
            }
            this.studentCollection.push(this.newStudent);
            this.newStudent = {name: '', gender: ''};
        }
    }
});