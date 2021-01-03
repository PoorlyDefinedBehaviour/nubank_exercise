const toadjacencyList = edges => {
  const adjacencyList = {}

  for (const edge of edges) {
    for (let i = 0; i < edge.length; i += 1) {
      const value = edge[i]

      if (!adjacencyList[value]) {
        adjacencyList[value] = []
      }

      adjacencyList[value] = [
        ...new Set([
          ...adjacencyList[value],
          ...edge.slice(0, -i),
          ...edge.slice(i + 1),
        ]),
      ]
    }
  }

  return adjacencyList
}

const graphStringToEdges = graph =>
  graph
    .split("\n")
    .map(line => line.split(" ").filter(Boolean).map(Number))
    .filter(edges => edges.length > 0)

/**
  Assuming we have an adjacency list that looks like this:
  {
    '1': [ 3 ],
    '2': [ 4, 3 ],
    '3': [ 1, 2 ],
    '4': [ 2, 4, 3, 5 ],
    '5': [ 4 ]
  }

  and we want to know if 1 and 2 are connected.

  We start at node 1 and follow it's neighbors, 
  if 2 is one of the neighbors, it means they are connected and we return.
  otherwise we check if 2 is a neighbor of any the neighbors.

  If we have no where else to go and haven't encountered 2 yet, it means
  1 and 2 are not connected.

  In this example, 1 and 2 are connected via the following path:

  1 <-> 3 <-> 2 
 */
const areNodesConnected = (a, b, adjacencyList, visited = new Set()) => {
  if (visited.has(a)) {
    return false
  }

  visited.add(a)

  for (const node of adjacencyList[a]) {
    if (node === b) {
      return true
    }

    if (areNodesConnected(node, b, adjacencyList, visited)) {
      return true
    }
  }

  return false
}

const areNodesInSameCollisionNetwork = (nodes, graph) => {
  const edges = graphStringToEdges(graph)
  const adjacencyList = toadjacencyList(edges)

  return areNodesConnected(nodes[0], nodes[1], adjacencyList)
}

module.exports = {
  areNodesInSameCollisionNetwork,
}
