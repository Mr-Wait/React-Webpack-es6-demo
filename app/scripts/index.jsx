//css
 import "../styles/basic.css";
 import "../styles/header.css";
 import "../styles/header_search.css";
 import "../styles/main_content.css";
 import "../styles/button.css";
 import "../styles/DSlider.css";
 //js
 import "../scripts/jquery.min.js";
 import "../scripts/Deng.min.js";
 import "../scripts/jQuerySlider.min.js";
 import "../scripts/json2.js";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.jsx";
import Slider from "./components/Slider.jsx";
import MainBox from "./components/contentBox.jsx";
import Footer from "./components/footer.jsx";
class Index extends React.Component{
    constructor() {
        super();
    }
    componentDidMount(){
        $(".Slider1").Slider({});
    }
    render(){
        //JSX here!
        return (
            <div id="box">
            <Header />
            <Slider />
            <MainBox />
            <Footer />
            </div>
        );
    }
};
ReactDOM.render(
    <Index />,
    document.body
);

