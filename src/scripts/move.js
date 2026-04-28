export class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.neighbors = this.getNeighbors(x, y);
    }

    getNeighbors() {
        let neighbors = [];
        const offsets = [1, 2, -1, -2];
        for (let i = 0; i < offsets.length; i++) {
            for (let j = 0; j < offsets.length; j++) {
                if (Math.abs(offsets[i]) !== Math.abs(offsets[j])) {
                    const x = this.x + offsets[i];
                    const y = this.y + offsets[j];
                    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                        neighbors.push([x, y]);
                    }
                }
            }
        }
        return neighbors;
    }

    isNeighbor(square) {
        const neighbors = this.getNeighbors();
        //can't use array.includes because it compares objects directly, which would return false
        return neighbors.some((element) => element[0] === square.x && element[1] === square.y);
    }
}

export function knightMoves(start, target) {
    const queue = [];
    const visited = [];
    const moves = [];

    queue.push([start.x, start.y]);
    visited.push([start.x, start.y].toString());

    while (queue.length > 0) {
        const current = queue.shift()
        const currentSquare = new Square(current[0], current[1]);
        //possible moves
        const nextSquares = currentSquare.neighbors;
        nextSquares.forEach((square) => {
            const squareStr = square.toString();
            //if sqare was not already visited, track it, log the move, and enqueue it
            if(!visited.includes(squareStr)) {
                visited.push(squareStr);
                queue.push(square);
                const currentSquareStr = [currentSquare.x, currentSquare.y].toString();

                moves.push({start: currentSquareStr, end: squareStr});
            }
        });

        //check if we reached the target
        if(current[0] === target.y && current[1] === target.y) {
            const path = [];
            let currentStr = [target.x, target.y].toString();

            //reconstruct the sequence of moves
            while(currentStr) {
                path.push(currentStr.split(",").map(Number));
                currentStr = moves.find((move) => move.end === currentStr);
                if(currentStr) {
                    currentStr = currentStr.start;
                }
            }
            path.reverse();
            return path;
        }
    }
}

export function printMoves(start, target) {
    const moves = knightMoves(start, target);
    console.log(`You reached the target in ${moves.length} moves:`)
    for (let move of moves) {
        console.log(move);
    }
}