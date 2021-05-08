import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button`
  border: none;
  padding: 0;
  position: relative;
  display: inline-block;
  min-width: 80px;
  background: none;
  cursor: pointer;

  &:after {
    content: '';
    height: 100%;
    width: 100%;
    padding: 4px;
    position: absolute;
    bottom: -15px;
    left: -4px;
    z-index: -1;
    background-color: #2b1800;
    border-radius: 50%;
  }

  .button__inner {
    color: white;
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    background-color: #00cc00;
    display: block;
    position: relative;
    padding: 15px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-shadow: 0px 1px 0px #000;
    filter: dropshadow(color=#000, offx=0px, offy=1px);
    box-shadow: inset 0 1px 0 #ffe5c4, 0 10px 0 #006600;
    border-radius: 50%;
  }

  .active,
  .button__inner:active {
    top: 10px;
    background-color: #00b300;
    box-shadow: inset 0 1px 0 #ffe5c4, inset 0 -3px 0 #006600;
  }

  .button__subtitle {
    font-size: 12px;
    color: #eceeee;
  }
`;

export const RunButton = React.forwardRef(({ onClick, active }, ref) => (
  <Button ref={ref} onClick={onClick} className="button">
    <div className={`button__inner ${active ? 'active' : ''}`} href="#">
      <span className="button__title">RUN ⌘⏎</span>
    </div>
  </Button>
));

export default RunButton;
