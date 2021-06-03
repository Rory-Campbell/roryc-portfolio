import React from "react";

const WorkItem = (props) => {
  return (
    <div className="work-item">
      <div className="img-box">
        <img src={props.img} alt="project example" />
      </div>

      <div className="text-content">
        <h3 className="item-title">{props.title}</h3>

        <p className="item-description"> {props.body}</p>
        <a href={props.link} className="item-button">
          View
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
