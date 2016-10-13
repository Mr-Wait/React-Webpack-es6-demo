import React from "react";
import ReactDOM from "react-dom";

export default class MainBox extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div id ="main_content">
            <ContentBox css="new_share" name="最新分享" param="share"/>
            <ContentBox css="new_remend" name="影迷最爱" param="love"/>
            <ContentBox css="high_remark" name="评分最高" param="remark"/>
            <ContentBox css="king_click" name="点击为王" param="click"/>
            </div>
        );
    }
}
class BoxHeader extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="classic">{this.props.name}<a href="#">更多电影</a></div>
);
}
}
class Content extends React.Component{
    constructor(){
        super();
        this.state={
            data:{
                moviename:"",
                movieyear:"",
                movietype:"",
                moviedirector:"",
                movieactors:"",
                movie_image:"",
                movielike:"",
                movielove:"",
                moviemark:"",
                movierecord:""

            },
            movieurl :"#",
            searchurl:"#",
            typeurl:"",
            dirurl:"",
            actor:"",
            mounted:false
        }
    }
    componentWillReceiveProps(nextProp){
        this.state.data = nextProp.data;
        let isData = this.state.data.moviename;
        if(isData!=""){
            this.setState({
                mounted:true
            });
        }
    }
    componentWillUpdate(){
        let sleep = (sleepTime) => {
            let now = new Date().getTime();
            let exitTime = now +sleepTime*1000;
            while(true){
                now = new Date().getTime();
                if(now>exitTime){
                    return true;
                }
            }
        }
        sleep(0.15);
    }
    render(){
        return (
            <div className="share_box">
            <Black mounted={this.state.mounted}/>
            <div className="movie_img_box">
                <div className="movie_img">
                    <div className="img_black">
                        
                    </div>
                    <img src={this.state.data.movie_image} />
                </div>
            </div>
            <div className="movie_description">
                <span>电影名:<a href="#">{this.state.data.moviename}</a></span>
                <span>年份:<a href="#">{this.state.data.movieyear}</a></span>
                <span>类型:<a href="#">{this.state.data.movietype}</a></span>
                <span>导演:<a href="#">{this.state.data.moviedirector}</a></span>
                <span>主演:<a href="#">{this.state.data.movieactors}</a></span>
                <div className="user_zone">
                    <span className="likenum">{this.state.data.movielike}</span>
                    <span className="remarknum">{this.state.data.moviemark}</span>
                    <span className="lovenum">{this.state.data.movielove}</span>
                </div>
            </div>
            <div className="movie_user">
                <strong>上传用户:</strong> 数据待插入
                <span className="remark">{this.state.data.movierecord}</span>
            </div>
            </div>
        );
    }
}
class ContentBox extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentWillMount(){     
        var url = "../app/getData.json";
            $.ajax({
                url:url,
                dataType:"json",
                type:"get",
                success:function (d) {
                    this.setState({
                        data:d
                    });
                }.bind(this)
            });       
    }
    render(){
        return (
            <div className={this.props.css +" module"}>
                <BoxHeader name={this.props.name}/>
                <Content data = {this.state.data[0]}/>
                <Content data = {this.state.data[1]}/>
                <Content data = {this.state.data[2]}/>
                <Content data = {this.state.data[3]}/>
                <Content data = {this.state.data[4]}/>
                <Content data = {this.state.data[5]}/>
            </div>
            );
        }
}
class Black extends React.Component{
    constructor(){
        super();
        this.state = {
            mounted:false
        };
    }
    componentWillUnmount(){
    if(this.state.mounted){
        return true;
    }else{
        return false;
    }
}
    componentWillReceiveProps(nextProps){
        if(nextProps.mounted){
           this.setState({
               mounted:true
           });
        }
    }

    render(){
        if(this.state.mounted){
            return (null);
        }else{
            return (
                <div className="content-black"></div>
            );
        }
    }

}
