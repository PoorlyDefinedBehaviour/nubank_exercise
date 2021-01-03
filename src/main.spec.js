const { areNodesInSameCollisionNetwork } = require("./main")

test("check if two nodes are in the same collision network", () => {
  const testCases = [
    {
      nodes: [1, 2],
      graph: `
        1 3
        2 3
        4 5
      `,
      expected: true,
    },
    {
      nodes: [1, 2],
      graph: `
        1 3
        2 4
        4 5
      `,
      expected: false,
    },
    {
      nodes: [1, 5],
      graph: `
        1 3
        2 4 3
        4 5
      `,
      expected: true,
    },
    {
      nodes: [4, 5],
      graph: `
        1 3
        2 4
        4 5
      `,
      expected: true,
    },
    {
      nodes: [1, 5],
      graph: `
        1 3
        2 4
        4 5
      `,
      expected: false,
    },
    {
      nodes: [1, 42],
      graph: `
        1 3
        2 4
        3 7 8 9
        4 5
        9 10 13 48
        48 48 1 3 51
        42 51
      `,
      expected: true,
    },
    {
      nodes: [1, 5],
      graph: `
        1 3
        3 4
        4 5
      `,
      expected: true,
    },
  ]

  for (const { nodes, graph, expected } of testCases) {
    expect(areNodesInSameCollisionNetwork(nodes, graph)).toBe(expected)
  }
})
