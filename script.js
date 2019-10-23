var app = new Vue({
    el: '#app',
    data: {
        typeSelection: "",
        apiKey: "348443-recommen-G0BZJ4EU",
        baseURL: "https://tastedive.com/api/similar?q=",
        cors: "https://cors-anywhere.herokuapp.com/",
        types: ["band", "movie", "TV show", "podcast", "books", "author", "game"],
    },
    methods: {
        getRecommendations() {
            let url = this.cors + this.baseURL + this.apiKey;
            fetch(url)
                .then((response) => {
                    return (response.json());
                })
                .then((json) => {
                    console.log(json);
                });
        }
    }
});
