import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Article.css";

const Article = props => (
    <div id={props.articleId} className="article-item col s12 l6">
        <div className="card article-card">
            <div className="card-content">
                <span className="card-title"><Link to={props.articleUrl} target="_blank">{props.articleTitle}</Link></span>
                <div className="row">
                    <div className="view col s12 l6">
                        <Link to={props.articleUrl} target="_blank"><i className="material-icons tiny">open_in_new</i> View Article</Link>
                    </div>
                    <div className="col s12 l6 text-right">
                        <small>Published: {moment(props.articleDate).format("MM/DD/YYYY")}</small>
                    </div>
                </div>
            </div>

            <div className="card-action">
                {props.saveArticle ?  <Link to="#" className="btn-unsave" onClick={() => props.saveArticle(props.articleTitle, props.articleDate, props.articleUrl)}> <i className="material-icons tiny">bookmark</i> Save Article</Link> : null}


                {props.deleteArticle ?  <Link to="#" className="btn-unsave" onClick={() => props.deleteArticle(props.articleId)}> <i className="material-icons tiny">delete</i> Delete Article</Link> : null}
            </div>
        </div>
    </div>
);

export default Article;