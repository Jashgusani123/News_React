import React, { Component } from 'react'

export default class News extends Component {
    render() {
        let {title ,href , src ,alt, dec , name  , publishedAt} = this.props
        return (
            <>
                <div className="card" >
                    <img src={src} className="card-img-top" alt={alt} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{dec}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{name}</li>
                            <li className="list-group-item">{publishedAt}</li>
                        </ul>
                        <div className="card-body">
                        <a className="btn btn-primary" href={href} target='_blank' role="button">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}
