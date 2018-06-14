let app = new Vue({
    el: 'main#app',
    data: {
        pageTitle: 'Osztálynapló',
        studentCollection: [
            'Anna',
            'Béla',
            'Tomi',
            'András',
            'Panka',
            'Dóri'
        ],
        newStudent: ''
    },
    methods:{
        AddNewStudent(){
            if(!this.newStudent) {
                return;
            }
            this.studentCollection.push(this.newStudent);
            this.newStudent = '';
        }
    }
});