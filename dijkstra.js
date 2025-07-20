/*                                    
.----. .-.   .-..-..-. .----..-----..---.  .--.  .-. .----.
} {-. \{ |   | || ' / { {__-``-' '-'} }}_}/ {} \ { }{ {__-`
} '-} /| }{`-' }| . \ .-._} }  } {  | } \/  /\  \`-'.-._} }
`----' `-' `---'`-'`-``----'   `-'  `-'-'`-'  `-'   `----' 
  .--.  .-.   .----. .---. .---. .-..-----..-. .-..-.  .-. 
 / {} \ } |   | |--'/ {-. \} }}_}{ |`-' '-'{ {_} |}  \/  { 
/  /\  \} '--.| }-`}\ '-} /| } \ | }  } {  | { } }| {  } | 
`-'  `-'`----'`----' `---' `-'-' `-'  `-'  `-' `-'`-'  `-' 
    Dijkstra's algorithm is a graph search algorithm that finds the shortest path between nodes in a graph.
    It is used to find the shortest path between two nodes in a graph.
    It is a greedy algorithm.
    It is a single-source shortest path algorithm.
    It is a dynamic programming algorithm.
     */

function djkstra(graph,start){
    const distances = {};
    const visited = new Set();
    const queue = [start];

    for(let node in graph){
        distances[node]= Infinity;
    }
    distances[start]=0;
    while(queue.length>0){
        let currentNode=queue.shift();
        if(visited.has(currentNode)) continue;
        visited.add(currentNode);

        let neighbours = graph[currentNode];
        for(let neighbour in neighbours){
            let newDist = distances[currentNode]+neighbours[neighbour];
            if(newDist<distances[neighbour]){
                distances[neighbour]=newDist;
                queue.push(neighbour);
            }
        }
    }
    
    return distances;
}
        

    const graph = {
        A: { B: 2, C: 5 },
        B: { A: 2, C: 1, D: 4 },
        C: { A: 5, B: 1, D: 1 },
        D: { B: 4, C: 1 }
      };

      console.log(djkstra(graph,'A'));

/*
DATA FLOW EXPLANATION WITH STEP-BY-STEP EXAMPLE:

Our Graph Structure:
A: { B: 2, C: 5 }     // A connects to B (weight 2) and C (weight 5)
B: { A: 2, C: 1, D: 4 } // B connects to A (2), C (1), and D (4)
C: { A: 5, B: 1, D: 1 } // C connects to A (5), B (1), and D (1)
D: { B: 4, C: 1 }     // D connects to B (4) and C (1)

STEP-BY-STEP EXECUTION:

INITIALIZATION:
- distances = { A: 0, B: Infinity, C: Infinity, D: Infinity }
- visited = Set() (empty)
- queue = ["A"]

ITERATION 1 - Processing Node A:
- currentNode = "A" (removed from queue)
- visited.add("A") → visited = Set("A")
- neighbors of A: { B: 2, C: 5 }
  
  For neighbor B:
  - newDist = distances["A"] + graph["A"]["B"] = 0 + 2 = 2
  - Is 2 < Infinity? YES
  - distances["B"] = 2
  - queue.push("B") → queue = ["B"]
  
  For neighbor C:
  - newDist = distances["A"] + graph["A"]["C"] = 0 + 5 = 5
  - Is 5 < Infinity? YES
  - distances["C"] = 5
  - queue.push("C") → queue = ["B", "C"]
  
- Current state: distances = { A: 0, B: 2, C: 5, D: Infinity }

ITERATION 2 - Processing Node B:
- currentNode = "B" (removed from queue)
- visited.add("B") → visited = Set("A", "B")
- neighbors of B: { A: 2, C: 1, D: 4 }
  
  For neighbor A:
  - A is already visited, skip (continue)
  
  For neighbor C:
  - newDist = distances["B"] + graph["B"]["C"] = 2 + 1 = 3
  - Is 3 < 5? YES (we found a shorter path to C!)
  - distances["C"] = 3
  - queue.push("C") → queue = ["C", "C"] (C appears twice now)
  
  For neighbor D:
  - newDist = distances["B"] + graph["B"]["D"] = 2 + 4 = 6
  - Is 6 < Infinity? YES
  - distances["D"] = 6
  - queue.push("D") → queue = ["C", "C", "D"]
  
- Current state: distances = { A: 0, B: 2, C: 3, D: 6 }

ITERATION 3 - Processing Node C (first occurrence):
- currentNode = "C" (removed from queue)
- visited.add("C") → visited = Set("A", "B", "C")
- neighbors of C: { A: 5, B: 1, D: 1 }
  
  For neighbor A:
  - A is already visited, skip
  
  For neighbor B:
  - B is already visited, skip
  
  For neighbor D:
  - newDist = distances["C"] + graph["C"]["D"] = 3 + 1 = 4
  - Is 4 < 6? YES (we found a shorter path to D!)
  - distances["D"] = 4
  - queue.push("D") → queue = ["C", "D", "D"] (D appears twice now)
  
- Current state: distances = { A: 0, B: 2, C: 3, D: 4 }

ITERATION 4 - Processing Node C (second occurrence):
- currentNode = "C" (removed from queue)
- visited.has("C") is true, so continue (skip this iteration)
- queue = ["D", "D"]

ITERATION 5 - Processing Node D (first occurrence):
- currentNode = "D" (removed from queue)
- visited.add("D") → visited = Set("A", "B", "C", "D")
- neighbors of D: { B: 4, C: 1 }
  
  For neighbor B:
  - B is already visited, skip
  
  For neighbor C:
  - C is already visited, skip
  
- queue = ["D"]

ITERATION 6 - Processing Node D (second occurrence):
- currentNode = "D" (removed from queue)
- visited.has("D") is true, so continue (skip this iteration)
- queue = [] (empty)

QUEUE IS EMPTY - ALGORITHM COMPLETE!

FINAL RESULT: { A: 0, B: 2, C: 3, D: 4 }

SHORTEST PATHS FOUND:
- A → A: 0 (starting point)
- A → B: 2 (direct path)
- A → C: 3 (A → B → C)
- A → D: 4 (A → B → C → D)

KEY INSIGHTS:
1. The algorithm finds shorter paths as it progresses
2. Node C's distance improved from 5 to 3 when we found A → B → C
3. Node D's distance improved from 6 to 4 when we found A → B → C → D
4. The visited Set prevents infinite loops
5. The queue ensures we process nodes in the order they're discovered
*/


