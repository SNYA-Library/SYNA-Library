import React from 'react';


class AllHeaders extends React.Component {
    state= {

    }
    render() {
        const { headers } = this.props;
        return (
            <div>
                <ul>
                    {headers.map((header) => (
                        <li>
                        <strong>Author</strong>: {header.author}<br></br>
                        <strong>Content</strong>: {header.content}<br></br>
                        <strong>description</strong>: {header.description}<br></br>
                        <strong>Source</strong>: {header.source.name}<br></br>
                        <strong>title</strong>: {header.title} <br></br>
                        <strong>url</strong>: {header.url}
                        <img src={header.urlToImage}></img>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default AllHeaders;