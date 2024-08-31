import { Chess } from "chess.js";

const stockfish = require("stockfish");

const analyzeGame = async (pgn) => {
  const chess = new Chess();
  chess.loadPgn(pgn);
  const moves = chess.history({ verbose: true });

  const evaluations = await analyzeMoves(moves);
  return evaluations;
};

const analyzeMoves = async (moves) => {
  const engine = stockfish();
  engine.postMessage("uci");
  const evaluations = [];

  for (let move of moves) {
    const fen = moveAfterMove(moves, move);
    engine.postMessage(`position fen ${fen}`);
    engine.postMessage("go depth 15");

    const evaluation = await new Promise((resolve) => {
      engine.onmessage = function (event) {
        if (event && event.includes("info depth 15")) {
          const parts = event.split(" ");
          const scoreIdx = parts.indexOf("score") + 2;
          const score = parseInt(parts[scoreIdx], 10);
          resolve({ move: move.san, score });
        }
      };
    });

    evaluations.push(evaluation);
  }

  return evaluations;
};

const moveAfterMove = (moves, move) => {
  const chess = new Chess();
  moves.forEach((m) => chess.move(m.san));
  return chess.fen();
};

export { analyzeGame };
