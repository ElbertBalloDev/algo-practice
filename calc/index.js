*{
  box-sizing: border-box;
}

body {
  padding:0;
  margin:0;
}

.calc {
  width: 400px;
  background-color: black;
  color:white;
}

.screen{
  font-size:40px;
  font-family: 'Courier New', Courier, monospace;
  text-align: right;
  padding: 20px 5px;
}

.calc-button{
  background-color:#d8d9db;
  color: black;
  height: 100px;
  width: 24.5%;
  border: none;
  border-radius: 0;
  font-size: 40px;
  cursor: pointer;
}

.calc-button:hover{
  background-color: #ebebeb;
}

.calc-button:active{
  background-color: #9b9b9b;
  color:white;
}

.calc-button:last-child{
  background-color: #df974c;
  color:white;
}

.calc-button:last-child:hover{
  background-color: #dba264;
}

.calc-button:last-child:active{
  background-color: #e49036;
  color:black;
}

.double{
  width:49.7%;
}

.triple{
  width:74.8%
}

.calc-row{
  display: flex;
  align-content: stretch;
  justify-content: space-between;
  margin-bottom: 0.5%;
}
