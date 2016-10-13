import React from "react";
import ReactDOM from "react-dom";
class HeadLogo extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="header_logo"></div>
    );
    }
}
class HeadSearch extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="header_search">
        <form className="wrapper" action="#" method="get">
        <input type="text" placeholder="电影名/演员/导演/年份/分类" name="searchValue" required/>
        <button type="submit">搜索</button>
        </form>
            <div className="near_search">最热搜索:
            <a href="#" >星际穿越</a>
            </div>
        </div>
    );
    }
}
class HeadLogin extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="log_in">
                <a></a>
                <div className="">
                    <input id="log_in_username" type="text" minlength="6" maxlength="32" name ="username" className ="blue" placeholder="邮箱/昵称" required/><span className="empty"></span>
                </div>
                <div className="" >
                    <input id="log_in_password" type="password" minlength="6" maxlength="16" name ="password" required/><span className="empty">9~16字符</span>
                </div>
                <div id="log_in_captcha">
                    <input type="text"  name="checkStr" size="5" maxlength="5" /><img src="captcha.php" alt ="" title ="输入图中的字符" />
                    <span className="empty">请输入图中的字符</span>
                </div>
                <a href="javascript:return false;" className="button gray smail" id="loginSubmit">登录</a>
            </div>
    );
    }
}
class HeadNoLogin extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
        <div className="nologin" style={{width:270,height:150,float:'left'}}>
        <div id="user_nologin">10位来访者有8位<a href="javascript:return false;">登录</a>或<a href="#">注册</a>了，您呢？</div>
        <div className="user_img" id="user_img" ><img src="" alt="" title="不满意默认头像，修改走起" /></div>
        <div className="user_help " id="user_help">
        <a className="up" href='#'></a>
        <a className='up up2'> <ul></ul></a>
        <a className="down" href="#"></a>
        </div>
        </div>
        );
    }
}
export default class Header extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="header">
                <HeadLogo />
                <HeadSearch />
                <HeadNoLogin />
            </div>
        );
    }
}
