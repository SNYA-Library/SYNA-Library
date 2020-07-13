import React from 'react';
import ReactDOM from 'react-dom';

class AllArticles extends React.Component {
    state = {
    }
    render() {
        const { articles } = this.props;
        return (
            <div>
                <ul class='ArticlesUlContainer'>
                    {articles.map((article) => (
                        <li class='articlesCard'>
                        <div>
                            {/* <strong>Author</strong>: {article.author}<br></br> */}
                            <strong>Source</strong>: {article.source.name}<br></br>
                            <strong>title</strong>: {article.title} <br></br>
                            {/* <strong>Content</strong>: {article.content}<br></br> */}
                            {/* <strong>description</strong>: {article.description}<br></br> */}
                            <strong>url</strong>: <a href={article.url}>{article.url}</a>
                        </div>
                        <div>
                            <img class='articlesImg' src={article.urlToImage}></img>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default AllArticles;