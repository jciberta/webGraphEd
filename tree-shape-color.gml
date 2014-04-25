graph [
  node [
    id 1
    label "ORG RECT"
    graphics [
      w 10.000
      h 10.000
      type "rectangle"
      fill "Orange"
    ]
  ]
  node [
    id 2
    label "RED RECT"
    graphics [
      w 10.000
      h 10.000
      type "rectangle"
      fill "Red"
    ]
  ]
  node [
    id 3
    label "Node 3"
    graphics [
      w 10.000
      h 10.000
      type "oval"
      fill "Yellow"
    ]
  ]
  node [
    id 4
    label "Node 4"
    graphics [
      w 10.000
      h 10.000
      type "oval"
      fill "White"
    ]
  ]
  node [ id 5 label "Node 5" ]

  edge [ source 1 target 2 ]
  edge [ source 1 target 3 ]
  edge [ source 2 target 4 ]
  edge [ source 2 target 5 ]
]
