export const mermaidMarkdown =
  "## Mermaid\n\n" +
  "```mermaid\n" +
  `
graph LR
    A[Square Rect] -- Link text --> B((Circle))
    A --> C(Round Rect)
    B --> D{Rhombus}
    C --> D
\n` +
  "```\n" +
  "```mermaid\n" +
  `
gitGraph:
    commit "Ashish"
    branch newbranch
    checkout newbranch
    commit id:"1111"
    commit tag:"test"
    checkout main
    commit type: HIGHLIGHT
    commit
    merge newbranch
    commit
    branch b2
    commit
\n` +
  "```\n";
