graph [
  comment "Cyclic tree"
  node [ id 1 label "Node 1" ]
  node [ id 2 label "Node 2" ]
  node [ id 3 label "Node 3" ]
  node [ id 4 label "Node 4" ]
  node [ id 5 label "Node 5" ]
  node [ id 6 label "Node 6" ]
  node [ id 7 label "Node 7" ]
  node [ id 8 label "Node 8" ]

  edge [ source 1 target 2 ]
  edge [ source 1 target 3 ]
  edge [ source 2 target 4 ]
  edge [ source 2 target 5 ]
  edge [ source 3 target 6 ]
  edge [ source 3 target 7 ]
  edge [ source 4 target 8 ]
  edge [ source 8 target 1 ]
]

