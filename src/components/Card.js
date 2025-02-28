import { useState } from "react";

function Card(props) {
    const clickHandler = () => {
        console.log(props.title, props.content, props.id, props.isActive, props.changeActive);
        const changeActive = props.changeActive;
        changeActive(props.id);
        console.log(props.isActive);
    }
    const currentDate = new Date();
    console.log(currentDate)

    const time = useState(currentDate.toLocaleTimeString());

    return (
        <div 
            className={props.isActive ? 'card--active': 'card'}
            onClick={clickHandler}
        >

            <div className="card__content">
                {props.content}
            </div>
            <h4 className="card__title">
                {props.title}
            </h4>
            <h4 className="card__key">
               Date: {currentDate.getUTCFullYear()}/{currentDate.getUTCMonth()+1}/{currentDate.getUTCDate()} <br/>
               Time: {time}
            </h4>
        </div>
    );
}

export default Card;