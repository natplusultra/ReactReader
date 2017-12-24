import axios from "axios";

export default {
    // gets all articles
    getArticles: function() {
        return axios.get("/api/articles");
    },
    // gets an article by id
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    // deletes the article with the given id
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    // saves an article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    },
    // updates an article to the database
    updateArticle: function(articleData) {
        return axios.put("/api/articles", articleData);
    }
};