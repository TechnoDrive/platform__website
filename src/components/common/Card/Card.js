import React from "react";
import style from "./Card.module.css";
import cx from "classnames";

import CardTitle from "./CardTitle";
import Attachments from "./Attachments";

export default function Card(props) {
  return (
    <div
      className={cx(style.container, {
        [style.containerLarge]: props.size == "large"
      })}
      key={props.i}
      onClick={props.data.onClick}
    >
      <div
        className={cx(style.content, {
          [style.contentLarge]: props.size == "large"
        })}
      >
        <div className={style.imageHolder}>
          <a href={props.data.href} target="_blank">
            <img src={props.data.imageSrc} className={style.image} />
          </a>
        </div>
        <CardTitle data={props.data} />
        <div className={style.description}>{props.data.description}</div>
      </div>
      <div className={style.attachments}>
        {props.data.attachments && (
          <Attachments data={props.data.attachments} />
        )}
      </div>
    </div>
  );
}
