import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:200,300,400,600&subset=latin-ext');

  * {
    background: #f5f6fa;
    color: #9c9c9c;
    font: 1rem "PT Sans", sans-serif;
  }

  html,
  body,
  .container {
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .header {
      width: 360px;
      background-color: #7f8ff4;
      color: #f8f8f8;
      padding: 20px;
      margin: 10px;
      text-align: center;
      font-size: 20px;
  }
  .note {
    width: 360px;
    color: #727070;
    padding: 15px;
    margin: 2px;
    background: #fff;
    border: solid 1px #e9e9e9;
    cursor: pointer;
    box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.1);
    -webkit-transition:background-color .2s ease-out;
    -o-transition:background-color .2s ease-out;
    transition:background-color .2s ease-out
  }
  .note:hover {
    transform: scale(1.02);
    background-color: #dbb5c7;
  }
  .button{
    position: absolute;
    z-index: 1;
    top: 16.5%;
    
    margin-left: 170px;
    margin-top: 0;

    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;

    background: #7f8ff4;
    color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 12px 36px;
  }
  .button1 {
    position: fixed;
    display: inline-block;
    background: transparent;
    color: inherit;
    font: inherit;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;

    background: #7f8ff4;
    color: #fff;
    box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    padding: 12px 36px;

    margin-left: -96px;
  }
  .button:hover {
    transform: scale(1.05);
    background: #6c7ff2;
  }
  .button:active {
    background: #7f8ff4;
    box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
  }
 
  .input {
    width: 360px;
    background: #fff;
    color: #a3a3a3;
    font: inherit;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    padding: 22px 18px;
    margin-bottom: 2px;
  }
`;
