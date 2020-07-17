import React from 'react';
import AllArticles from '../articles/allArticles';


class AllHeaders extends React.Component {
    state= {

    }
    render() {
        const { headers } = this.props;
        return (
            <div>
                <div>
                    <ul class='ulContainer'>
                        {headers.map((header) => (
                            <li class='headersCard'>
                            <img class='headersImg' src={header.urlToImage}></img>
                            {/* <strong>Author</strong>: {header.author}<br></br> */}
                            {/* <strong>Content</strong>: {header.content}<br></br> */}
                            <strong>title</strong>: {header.title} <br></br>
                            <strong>description</strong>: {header.description}<br></br>
                            <strong>Source</strong>: {header.source.name}<br></br>
                            <a href={header.url} target='_blank'>Read More...</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
export default AllHeaders;