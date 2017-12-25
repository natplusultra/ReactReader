import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";
import Card from "../Card";
import SearchForm from "../SearchForm";
import Article from "../Article";
import "./Search.css";

class Search extends Component {
    // sets the initial values
    state = {
        articles: [],
        topic: "",
        start_year: "",
        end_year: ""
    };

    // handles any changes to the input fields
    handleInputChange = event => {
        const { name, value } = event.target;
        // sets the state for the appropriate input field
        this.setState({
            [name]: value
        });
    };

    // displays the search form
    searchForm = () => {
        return (
            <SearchForm
                topic={this.state.topic}
                startYear={this.state.start_year}
                endYear={this.state.end_year}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
            />
        )
    }

    // handles the submission of the form
    handleFormSubmit = event => {
        event.preventDefault();

        // form fields
        const topic = this.state.topic;
        let startYear = this.state.start_year;
        let endYear = this.state.end_year;

        // API URL
        const apiKey = "af523dbc174a471891518bdfbb5e0b86";
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${topic}`;

        // appends the month and day to the startYear
        if (startYear) {
            startYear += "0101";
            queryURL = `${queryURL}&begin_date=${startYear}`;
        }

        // appends the month and day to the endYear
        if (endYear) {
            endYear += "0101";
            queryURL = `${queryURL}&end_date=${endYear}`;
        }
        console.log(`queryURL: ${queryURL}`);

        // API get request
        axios.get(queryURL)
            .then(nytimes => {
                console.log(nytimes.data.response.docs);
                this.setState({ articles: nytimes.data.response.docs, topic: "", start_year: "", end_year: "" });
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    // displays search results
    searchResults = () => {
        return (
            <div className="article-grid row">
                {this.state.articles.map(article => (
                    <Article
                        key={article._id}
                        articleId={article._id}
                        articleTitle={article.headline.main}
                        articleDate={article.pub_date}
                        articleUrl={article.web_url}
                        saveArticle={this.saveArticle}
                    />
                ))}
            </div>
        )
    }

    // saves an article
    saveArticle = (title, date, url) => {
        API.saveArticle({
            title: title,
            date: date,
            url: url,
            saved: true
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <Card shadow={true} cardTitle="Search for Articles" cardContent={this.searchForm()}
                />
                { this.state.articles.length ? <Card shadow={false} cardTitle="Search Results" cardContent={this.searchResults()} /> : "" }
            </div>
        );
    }
};

export default Search;