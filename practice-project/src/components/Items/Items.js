import React from "react";
import Item from "./Item";
import styles from "./Items.module.css";

const Items = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.items.map((item) => (
          <Item>
            {item.age}
            {item.name}
          </Item>
        ))}
      </ul>
    </div>
  );
};

export default Items;
