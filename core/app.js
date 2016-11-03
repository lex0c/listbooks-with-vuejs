var app = new Vue({
    el: "#app",
    
    data: {
        books: []
    },

    methods: {
        
    },
    
    mounted: function(){
        var self = this;
        self.$http.get("core/data-request.json").then(function(response){
            self.books = response.data;
        });
    }

});