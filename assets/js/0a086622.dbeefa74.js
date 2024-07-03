"use strict";(self.webpackChunk_sigma_website=self.webpackChunk_sigma_website||[]).push([[5414],{7515:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(1085),i=s(1184);const r={title:"Graph data",sidebar_position:1},d="Graph data",a={id:"advanced/data",title:"Graph data",description:"Sigma.js utilizes a specific data model to represent and display graphs. This section provides an overview of the core attributes and functionalities related to nodes and edges in sigma.js.",source:"@site/docs/advanced/data.md",sourceDirName:"advanced",slug:"/advanced/data",permalink:"/docs/advanced/data",draft:!1,unlisted:!1,editUrl:"https://github.com/jacomyal/sigma.js/tree/main/packages/website/docs/advanced/data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Graph data",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lifecycle",permalink:"/docs/advanced/lifecycle"},next:{title:"Customizing appearance",permalink:"/docs/advanced/customization"}},o={},l=[{value:"Graph model: Graphology",id:"graph-model-graphology",level:2},{value:"Node attributes",id:"node-attributes",level:2},{value:"Additional node attributes",id:"additional-node-attributes",level:3},{value:"Edge attributes",id:"edge-attributes",level:2},{value:"Additional edge attributes",id:"additional-edge-attributes",level:3},{value:"Dynamic attribute transformation: reducers",id:"dynamic-attribute-transformation-reducers",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"graph-data",children:"Graph data"}),"\n",(0,t.jsx)(n.p,{children:"Sigma.js utilizes a specific data model to represent and display graphs. This section provides an overview of the core attributes and functionalities related to nodes and edges in sigma.js."}),"\n",(0,t.jsx)(n.h2,{id:"graph-model-graphology",children:"Graph model: Graphology"}),"\n",(0,t.jsxs)(n.p,{children:["Sigma.js uses ",(0,t.jsx)(n.a,{href:"https://graphology.github.io/",children:"graphology"})," as its underlying graph model. Graphology offers a very large ",(0,t.jsx)(n.a,{href:"https://graphology.github.io/standard-library/",children:"standard library"})," of graph algorithms and data structures. It also provides a powerful API for developers to interact with graphs."]}),"\n",(0,t.jsx)(n.h2,{id:"node-attributes",children:"Node attributes"}),"\n",(0,t.jsx)(n.p,{children:"Nodes in sigma.js have several recognized attributes that determine their appearance and behavior:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.code,{children:"x"}),", ",(0,t.jsx)(n.code,{children:"y"})]}),": These attributes determine the position of the node on the canvas. They are typically set using layout algorithms but can also be manually specified."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"type"})}),": This attribute defines the visual representation of the node, such as ",(0,t.jsx)(n.code,{children:"'circle'"}),", ",(0,t.jsx)(n.code,{children:"'square'"}),", etc. If not specified, the ",(0,t.jsx)(n.code,{children:"defaultNodeType"})," setting will be used instead. The type value must match a key in the ",(0,t.jsx)(n.code,{children:"nodeProgramClasses"})," collection from the settings. Please check the ",(0,t.jsx)(n.a,{href:"https://github.com/jacomyal/sigma.js/blob/main/packages/storybook/stories/custom-rendering/index.ts",children:(0,t.jsx)(n.code,{children:"custom-rendering"})})," story to see an actual example."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"size"})}),": Represents the radius of the node. A larger value will render a bigger node."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"color"})}),": Represents the color of the node, as a string. It handles hexadecimal values (",(0,t.jsx)(n.code,{children:'"#e22653"'})," for instance) and ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/named-color",children:"CSS named colors"})," (",(0,t.jsx)(n.code,{children:'"deeppink"'})," for instance)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})}),": The text displayed near the node, typically representing its name or identifier."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-node-attributes",children:"Additional node attributes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"hidden"})}),": A boolean attribute. If set to ",(0,t.jsx)(n.code,{children:"true"}),", the node will not be displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"forceLabel"})}),": When set to ",(0,t.jsx)(n.code,{children:"true"}),", the node's label will always be displayed, regardless of zoom level or other conditions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"zIndex"})}),": Determines the display order of nodes. Nodes with higher zIndex values will be drawn on top of nodes with lower zIndex values. Note: The ",(0,t.jsx)(n.code,{children:"zIndex"})," attribute only works when the setting ",(0,t.jsx)(n.code,{children:"zIndex"})," is set to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"edge-attributes",children:"Edge attributes"}),"\n",(0,t.jsx)(n.p,{children:"Edges have their own set of attributes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"size"})}),": Represents the thickness of the edge. A larger value will render a thicker edge."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"color"})}),": Represents the color of the node, as a string."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"label"})}),": The text displayed near the edge, typically representing its weight or type."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"type"})}),": This attribute defines the visual representation of the edge, such as ",(0,t.jsx)(n.code,{children:"'line'"}),", ",(0,t.jsx)(n.code,{children:"'arrow'"}),", ",(0,t.jsx)(n.code,{children:"'curve''"}),", etc. If not specified, the ",(0,t.jsx)(n.code,{children:"defaultEdgeType"})," setting will be used instead. The type value must match a key in the ",(0,t.jsx)(n.code,{children:"edgeProgramClasses"})," collection from the settings. Please check the ",(0,t.jsx)(n.a,{href:"https://github.com/jacomyal/sigma.js/blob/main/packages/storybook/stories/edge-curve/parallel-edges.ts",children:(0,t.jsx)(n.code,{children:"parallel-edges"})})," story to see an actual example."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"additional-edge-attributes",children:"Additional edge attributes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"hidden"})}),": A boolean attribute. If set to ",(0,t.jsx)(n.code,{children:"true"}),", the edge will not be displayed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"forceLabel"})}),": When set to ",(0,t.jsx)(n.code,{children:"true"}),", the edge's label will always be displayed, regardless of zoom level or other conditions."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"zIndex"})}),": Determines the display order of edges. Edges with higher zIndex values will be drawn on top of edges with lower zIndex values. Note: The ",(0,t.jsx)(n.code,{children:"zIndex"})," attribute only works when the setting ",(0,t.jsx)(n.code,{children:"zIndex"})," is set to ",(0,t.jsx)(n.code,{children:"true"}),", and also edges can never be drawn on top of nodes, regardless of their ",(0,t.jsx)(n.code,{children:"zIndex"})," values."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-attribute-transformation-reducers",children:"Dynamic attribute transformation: reducers"}),"\n",(0,t.jsxs)(n.p,{children:["Sigma.js offers a powerful feature that allows developers to dynamically transform node and edge attributes right before rendering. This is achieved using ",(0,t.jsx)(n.code,{children:"nodeReducer"})," and ",(0,t.jsx)(n.code,{children:"edgeReducer"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"These are functions provided in the settings. They take a node or edge as input and return a new set of attributes for that node or edge. This allows for dynamic visual transformations without modifying the underlying graphology instance."}),"\n",(0,t.jsx)(n.p,{children:"For instance, if developers want to highlight a specific part of the graph, they can use reducers to change the size or color of specific nodes and edges without altering the original graph data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'sigma.setSetting("nodeReducer", (node) => {\n  if (node.id === "specialNode") {\n    return {\n      ...node,\n      size: 10,\n      color: "#ff0000",\n    };\n  }\n  return node;\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the example above, the ",(0,t.jsx)(n.code,{children:"nodeReducer"})," checks if a node has an id of 'specialNode'. If it does, it changes its size and color. This transformation will be applied right before rendering, ensuring that the 'specialNode' stands out in the visualization."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(4041);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);