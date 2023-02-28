import React, { useState } from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

import styles from './CourseGoalList.module.css';

const CourseGoalList = (props) => {
  // made just for testing purposes
  const [isValid, setIsValid] = useState(true);

  return (
    <ul className={`${styles['goal-list']} ${!isValid && styles.invalid}`}>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
