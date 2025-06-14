import React from 'react';
import styled from 'styled-components';

const Switch = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <div className="toggle-button-cover">
        <div id="button-3" className="button r">
          <input
            className="checkbox"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
          <div className="knobs" />
          <div className="layer" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .toggle-button-cover {
    position: relative;
    width: 74px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 100px;
  }

  .button {
    position: relative;
    width: 74px;
    height: 36px;
    margin: auto;
    overflow: hidden;
  }

  .checkbox {
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 3;
    cursor: pointer;
    position: absolute;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
    border-radius: 100px;
  }

  .button.r {
    border-radius: 100px;
  }

  #button-3 .knobs:before {
    content: "YES";
    position: absolute;
    top: 3px;
    left: 4px;
    width: 30px;
    height: 30px;
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    line-height: 30px;
    text-align: center;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  #button-3 .checkbox:checked + .knobs:before {
    content: "NO";
    left: 40px;
    background-color: #f44336;
  }

  #button-3 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  #button-3 .checkbox:active + .knobs:before {
    width: 46px;
    border-radius: 100px;
  }

  #button-3 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }
`;


export default Switch;
