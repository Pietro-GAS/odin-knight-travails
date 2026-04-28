import { Square, printMoves } from "./scripts/move.js";

const square = new Square(3, 3);
console.log(`x: ${square.x}`);
console.log(`y: ${square.y}`);
console.log(`neighbors:`);
for (let neighbor of square.neighbors) {
    console.log(neighbor);
}

let target = new Square(4, 1);
console.log(`is [4, 1] a neigbor of [3, 3]? ${square.isNeighbor(target)}`);
//console.log(`moves: ${knightMoves(square, target)}`);
printMoves(square, target);
target = new Square(7, 7);
console.log(`is [7, 7] a neigbor of [3, 3]? ${square.isNeighbor(target)}`);
//console.log(`moves: ${knightMoves(square, target)}`);
printMoves(square, target);


