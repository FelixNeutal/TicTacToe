const canvas = document.getElementById("ticTacToeScreen");
const ctx = canvas.getContext("2d");
const player1 = 'X';
const player2 = 'O';
const boardWidth = 540;
const boardHeight = 540;
const cellWidth = boardWidth / 3;
const cellHeight = boardHeight / 3;
const offset = 20;
const radius = 60;
/*
00, 10, 20
01, 11, 21
02, 12, 22
*/
let board = [
	['', '', ''],
	['', '', ''],
	['', '', '']
];

async function startGame() {
	drawBoard();
}

function drawBoard() {

	ctx.lineWidth = 10;
	ctx.beginPath();
	//Vertical lines
	drawLine(cellWidth * 0, 0, 0, boardHeight);
	drawLine(cellWidth * 1, 0, cellWidth * 1, boardHeight);
	drawLine(cellWidth * 2, 0, cellWidth * 2, boardHeight);
	drawLine(cellWidth * 3, 0, cellWidth * 3, boardHeight);
	
	//Horizontal lines
	drawLine(0, cellHeight * 0, boardWidth, cellHeight * 0);
	drawLine(0, cellHeight * 1, boardWidth, cellHeight * 1);
	drawLine(0, cellHeight * 2, boardWidth, cellHeight * 2);
	drawLine(0, cellHeight * 3, boardWidth, cellHeight * 3);
	ctx.closePath();
	for (let y = 0; y < 1; y++) {
		for (let x = 0; x < 3; x++) {
			drawO(x, y);
		}
	}
}

function drawLine(fromX, fromY, toX, toY) {
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.stroke();
}

function drawX(x, y) {
	drawLine(x * cellWidth + offset, y * cellHeight + offset, x * cellWidth + cellWidth - offset, y * cellHeight + cellHeight - offset);
	drawLine(x * cellWidth + offset, y * cellHeight + cellHeight - offset, x * cellWidth + cellWidth - offset, y * cellHeight + offset);
}

function drawO(x, y) {
	ctx.moveTo((x * cellWidth + cellWidth) / 2 + radius, (y * cellHeight + cellHeight) / 2);
	ctx.arc((x * cellWidth + cellWidth) / 2, (y * cellHeight + cellHeight) / 2, radius, 0, 2 * Math.PI, true);
	ctx.stroke();
}