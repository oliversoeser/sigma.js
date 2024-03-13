import { Meta, StoryObj } from "@storybook/html";
import Graph from "graphology";
import Sigma from "sigma";
import { EdgeDisplayData, NodeDisplayData } from "sigma/types";

import EdgeCurveProgram from "../index.ts";
import data from "./data/les-miserables.json";
import "./stage.css";

const createStage = () => {
  const stage = document.createElement("div");
  stage.classList.add("stage");

  const graph = new Graph();
  graph.import(data);

  let state: { type: "idle" } | { type: "hovered"; edge: string; source: string; target: string } = { type: "idle" };
  const sigma = new Sigma(graph, stage, {
    allowInvalidContainer: true,
    enableEdgeEvents: true,
    defaultEdgeType: "curve",
    zIndex: true,
    edgeProgramClasses: {
      curve: EdgeCurveProgram,
    },
    edgeReducer: (edge, attributes) => {
      const res: Partial<EdgeDisplayData> = { ...attributes };

      if (state.type === "hovered") {
        if (edge === state.edge) {
          res.size = (res.size || 1) * 1.5;
          res.zIndex = 1;
        } else {
          res.color = "#f0f0f0";
          res.zIndex = 0;
        }
      }

      return res;
    },
    nodeReducer: (node, attributes) => {
      const res: Partial<NodeDisplayData> = { ...attributes };

      if (state.type === "hovered") {
        if (node === state.source || node === state.target) {
          res.highlighted = true;
          res.zIndex = 1;
        } else {
          res.label = undefined;
          res.zIndex = 0;
        }
      }

      return res;
    },
  });

  sigma.on("enterEdge", ({ edge }) => {
    state = { type: "hovered", edge, source: graph.source(edge), target: graph.target(edge) };
    sigma.refresh();
  });
  sigma.on("leaveEdge", () => {
    state = { type: "idle" };
    sigma.refresh();
  });

  return stage;
};

const meta: Meta<typeof createStage> = {
  title: "edge-curve",
  render: () => createStage(),
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof createStage>;

export const InteractionsExample: Story = {
  name: "Interactions",
};
