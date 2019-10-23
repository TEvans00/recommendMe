var app = new Vue({
    el: '#app',
    data: {
        inputSelection: "",
        typeSelection: "",
        apiKey: "k=348443-recommen-G0BZJ4EU",
        baseURL: "https://tastedive.com/api/similar?q=",
        verbose: "verbose=1",
        cors: "https://cors-anywhere.herokuapp.com/",
        types: ["author", "band", "book", "game", "movie", "podcast", "TV show", ],
        recommendations: [],
    },
    methods: {
        getRecommendations() {
            let url = this.cors + this.baseURL + this.typeSelection + ":" + this.modifiedInput + "," + this.apiKey + "&" + this.verbose;
            console.log(url)
            fetch(url)
                .then((response) => {
                    return (response.json());
                })
                .then((json) => {
                    console.log(json);
                    console.log(json.Similar.Results);
                    this.recommendations = json.Similar.Results;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    computed: {
        modifiedInput: function() {
            return this.inputSelection.replace(" ", "+");
        }
    }
});
