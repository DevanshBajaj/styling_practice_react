import React from 'react';

import styles from './Button.module.css';


//import styled from 'styled-components';

//const Button = styled.button`
  //width: 100%;
  //font: inherit;
  //padding: 0.5rem 1.5rem;
  //border: 1px solid #CE828E;
  //color: white;
  //background: #CE828E;
  //box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  //cursor: pointer;
  //border-radius: 6px;
//
  //@media (min-width: 768px) {
  //  width: auto;
  //}
//
  //&:focus {
  //outline: none;
//
  //&:hover,
  //&:active {
  //background: #ca6c7a;
  //border-color: #ca6c7a;
  //box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  //}
//`;

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
