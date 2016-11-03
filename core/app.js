var app = new Vue({
    el: "#app",
    
    data: {
        books: [],
        search: ""
    },

    methods: {
        
    },
    filters: {
        uppercase: function(value){
            if(!value) return ''
            value = value.toString()
            return value.toUpperCase();
       },
       filterBy: function(data){
       	    
       }

    },
    
    mounted: function(){
        var self = this;
        self.$http.get("core/data-request.json").then(function(response){
            self.books = response.data;
        });
    }

});