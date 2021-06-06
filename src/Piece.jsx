import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";

function Piece({ piece: { type, color }, position }) {
  const [{ isDragging }, drag, preview] = useDrag({
    type: "piece",
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging()}
    },
    item: () => ({ id: `${position}_${type}_${color}` }),
  });

  var pieceImg = require(`./assets/${type}_${color}.png`).default;

  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg} />
      <div
        className="piece-container"
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img src={pieceImg} alt="" className="piece" />
      </div>
    </>
  );
}

export default Piece;
