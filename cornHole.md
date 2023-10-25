#1
.cornhole-board {
position: relative;
width: 300px;
height: 600px;
background-color: #0d47a1;
border: 10px solid #fbc02d;
border-radius: 20px;
overflow: hidden;

&::before {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 250px;
height: 500px;
background-color: #fbc02d;
border-radius: 20px;
}

&::after {
content: "";
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%) rotate(45deg);
width: 50px;
height: 500px;
background-color: #0d47a1;
}

.hole {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100px;
height: 100px;
background-color: #fbc02d;
border-radius: 50%;
box-shadow: 0 0 0 10px #0d47a1;
}

.hole:nth-of-type(1) {
top: 25%;
}

.hole:nth-of-type(2) {
top: 75%;
}
}

#################################################
#2
