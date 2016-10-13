import React from "react";
import ReactDOM from "react-dom";
export default class Slider extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
        <div id="box_animation">
        <ul className="Slider Slider1">
        <li className="DSlider-item" data-title="宿醉3"><img src="../app/images/1.jpg" alt="11111" /></li>
        <li className="DSlider-item" data-title="星际穿越"><img src="../app/images/2.jpg" alt="22222" /></li>
        <li className="DSlider-item" data-title="环太平洋"><img src="../app/images/3.jpg" alt="33333" /></li>
        <li className="DSlider-item" data-title="变形金刚4"><img src="../app/images/4.jpg" alt="44444" /></li>
        <li className="DSlider-item" data-title="钢铁侠3"><img src="../app/images/5.jpg" alt="55555" /></li>
        </ul>
        </div>
        );
    }
}