const canvas = document.getElementById("worldEditor");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const graph = new Graph();
graph.draw(ctx);
