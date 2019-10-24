var app = new Vue({
    el: '#app',
    data: {
        forms: [],
        numForms: 0,
        inputSelection: [],
        typeSelection: [],
        apiKey: "k=348443-recommen-G0BZJ4EU",
        baseURL: "https://tastedive.com/api/similar?q=",
        verbose: "verbose=1",
        cors: "https://cors-anywhere.herokuapp.com/",
        types: ["author", "band", "book", "game", "movie", "podcast", "TV show", ],
        recommendations: [],
        noRecommendations: false,
    },
    methods: {
        getRecommendations() {
            let url = this.cors + this.baseURL;
            console.log(this.inputSelection);
            for (let i = 0; i < this.forms.length; i++) {
                url += this.typeSelection[i] + ":" + this.inputSelection[i].replace(" ", "+") + ",";
            }
            url += this.apiKey + "&" + this.verbose;
            console.log(url);
            fetch(url)
                .then((response) => {
                    return (response.json());
                })
                .then((json) => {
                    console.log(json);
                    console.log(json.Similar.Results);
                    this.recommendations = json.Similar.Results;
                    if (this.recommendations.length === 0) {
                        this.noRecommendations = true;
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addForm() {
            this.forms.push(this.numForms);
            this.numForms++;
        },
        reset() {
            this.numForms = 0;
            this.forms = [];
            this.typeSelection = [];
            this.inputSelection = [];
            this.addForm();
            this.noRecommendations = false;
        }
    },
    created: function() {
        this.addForm();
    },
});
