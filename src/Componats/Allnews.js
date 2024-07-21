import React, { Component } from 'react'
import News from './News.js'
import "../App.css"
import Spinar from './Spinar.js'

let imgs = ["https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg", "https://static9.depositphotos.com/1011646/1236/i/950/depositphotos_12369509-stock-photo-breaking-news-screen.jpg", "https://cdn.create.vista.com/api/media/small/2605601/stock-photo-latest-news", "https://c8.alamy.com/comp/CTG496/breaking-news-daily-newspaper-headline-CTG496.jpg"]

 function rendom() {
  return imgs[Math.floor(Math.random() * 4)]
}

export default class Allnews extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loding: false,
            page : 1,
            pageSize:10,
            totalResualts:0,
        }


    }
    async componentDidMount() {
        let url = "";
        if(this.props.value === "Apple-news"){
            this.setState({totalResualts:40})
            url = `https://newsapi.org/v2/everything?q=${this.props.value}&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        }else if(this.props.value === "BBC-news") {
            this.setState({totalResualts:10})
            url = `https://newsapi.org/v2/top-headlines?sources=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        }else {
            this.setState({totalResualts:38})
            url = `https://newsapi.org/v2/top-headlines?country=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        }
        console.log(this.state.vala);
        console.log(url);
        this.setState({ loding: true })
        let data = await fetch(url)
        let mainData = await data.json();
        this.setState({ articles: mainData.articles, loding: false })
    }
    priviusitem = async()=>{
        let url = "";
        if(this.props.value === "Apple-news"){
            this.setState({totalResualts:40})
            url = `https://newsapi.org/v2/everything?q=${this.props.value}&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        }else if(this.props.value === "BBC-news") {
            this.setState({totalResualts:10})
            url = `https://newsapi.org/v2/top-headlines?sources=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        }else {
            this.setState({totalResualts:38})
            url = `https://newsapi.org/v2/top-headlines?country=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
        }
        this.setState({ loding: true })
        let data = await fetch(url)
        let mainData = await data.json();
        this.setState({ articles: mainData.articles, loding: false  ,page : this.state.page-1 })
    }
    nextitem = async()=>{
        let url = "";
        if(this.props.value === "Apple-news"){
            this.setState({totalResualts:40})
            url = `https://newsapi.org/v2/everything?q=${this.props.value}&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
        }else if(this.props.value === "BBC-news") {
            this.setState({totalResualts:10})
            url = `https://newsapi.org/v2/top-headlines?sources=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
        }else {
            this.setState({totalResualts:38})
            url = `https://newsapi.org/v2/top-headlines?country=${ this.props.value }&apiKey=4a315674c23c4ab787318548ebabdb69&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
        }
        this.setState({ loding: true })
        let data = await fetch(url)
        let mainData = await data.json();
        this.setState({ articles: mainData.articles, loding: false ,page : this.state.page+1 })
    }
    render() {
        
        return (
            <>
                {this.state.loding && <Spinar />}
                <div className="containar my-3">
                    {!this.state.loding && <h1 className='mx-3'>News</h1>}
                    <div className="newscon">
                        {!this.state.loding && this.state.articles.map((element) => {
                            if(element.source.id === null){
                                return 
                            }else{
                            return <div key={element.url}>
                                <News src={element.urlToImage === null ? rendom() : element.urlToImage} alt={"Image Is Not Available"} title={element.title} dec={element.description} name={element.source.name} publishedAt={element.publishedAt} href={element.url} />
                            </div>}

                        })}
                        
                    </div>
                    <div className="npbtn">
                            <button disabled={this.state.page <=1} className="btn btn-primary" onClick={this.priviusitem} type="button"> Privius</button>
                            <span>{this.state.page}</span>
                            <button disabled={this.state.page +1 > Math.ceil(this.state.totalResualts/this.state.pageSize)} className="btn btn-primary" onClick={this.nextitem} type="button">Next </button>
                    </div>
                </div>

            </>
        )
    }
}
