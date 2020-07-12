import React from 'react';
import ReactDOM from 'react-dom';

class AllArticles extends React.Component {
    state = {
    }
    render() {
        const { articles } = this.props;
        return (
            <div>
                <ul>
                    {articles.map((article) => (
                        <li>
                        <strong>Author</strong>: {article.author}<br></br>
                        <strong>Content</strong>: {article.content}<br></br>
                        <strong>description</strong>: {article.description}<br></br>
                        <strong>Source</strong>: {article.source.name}<br></br>
                        <strong>title</strong>: {article.title} <br></br>
                        <strong>url</strong>: {article.url}
                        <img src={article.urlToImage}></img>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default AllArticles;