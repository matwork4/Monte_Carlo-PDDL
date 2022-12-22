(define (problem COFFEE-1)
(:domain COFFEE)
(:objects
    0b0 0b1 0b2 0b3 0b4 0b5 0b6 0b7 0b8 0b9 0b10 0b11 0b12 0b13 0b14 0b15 0b16 0b17 0b18 - block
    1b0 1b1 1b2 1b3 1b4 1b5 1b6 1b7 1b8 1b9 1b10 1b11 1b12 1b13 1b14 1b15 1b16 1b17 1b18 - block
    2b0 2b1 2b2 2b3 2b4 2b5 2b6 2b7 2b8 2b9 2b10 2b11 2b12 2b13 2b14 2b15 2b16 2b17 2b18 - block
    3b0 3b1 3b2 3b3 3b4 3b5 3b6 3b7 3b8 3b9 3b10 3b11 3b12 3b13 3b14 3b15 3b16 3b17 3b18 - block
    4b0 4b1 4b2 4b3 4b4 4b5 4b6 4b7 4b8 4b9 4b10 4b11 4b12 4b13 4b14 4b15 4b16 4b17 4b18 - block
    5b0 5b1 5b2 5b3 5b4 5b5 5b6 5b7 5b8 5b9 5b10 5b11 5b12 5b13 5b14 5b15 5b16 5b17 5b18 - block
    6b0 6b1 6b2 6b3 6b4 6b5 6b6 6b7 6b8 6b9 6b10 6b11 6b12 6b13 6b14 6b15 6b16 6b17 6b18 - block
    7b0 7b1 7b2 7b3 7b4 7b5 7b6 7b7 7b8 7b9 7b10 7b11 7b12 7b13 7b14 7b15 7b16 7b17 7b18 - block
    8b0 8b1 8b2 8b3 8b4 8b5 8b6 8b7 8b8 8b9 8b10 8b11 8b12 8b13 8b14 8b15 8b16 8b17 8b18 - block
    9b0 9b1 9b2 9b3 9b4 9b5 9b6 9b7 9b8 9b9 9b10 9b11 9b12 9b13 9b14 9b15 9b16 9b17 9b18 - block
    10b0 10b1 10b2 10b3 10b4 10b5 10b6 10b7 10b8 10b9 10b10 10b11 10b12 10b13 10b14 10b15 10b16 10b17 10b18 - block
    11b0 11b1 11b2 11b3 11b4 11b5 11b6 11b7 11b8 11b9 11b10 11b11 11b12 11b13 11b14 11b15 11b16 11b17 11b18 - block
    12b0 12b1 12b2 12b3 12b4 12b5 12b6 12b7 12b8 12b9 12b10 12b11 12b12 12b13 12b14 12b15 12b16 12b17 12b18 - block
    13b0 13b1 13b2 13b3 13b4 13b5 13b6 13b7 13b8 13b9 13b10 13b11 13b12 13b13 13b14 13b15 13b16 13b17 13b18 - block
)
(:INIT
    ;;On définit la personne
    (isPerson 2b5)

    ;;On rend vide les cases
    (isEmpty 1b1)(isEmpty 1b2)(isEmpty 1b3)(isEmpty 1b4)(isEmpty 1b5)(isEmpty 1b6)(isEmpty 1b8)(isEmpty 1b9)(isEmpty 1b10)(isEmpty 1b11)(isEmpty 1b12)(isEmpty 1b13)(isEmpty 1b14)(isEmpty 1b15)(isEmpty 1b16)(isEmpty 1b17)
    (isEmpty 2b1)(isEmpty 2b2)(isEmpty 2b3)(isEmpty 2b4)(isEmpty 2b5)(isEmpty 2b6)(isEmpty 2b8)(isEmpty 2b9)(isEmpty 2b10)(isEmpty 2b11)(isEmpty 2b12)(isEmpty 2b13)(isEmpty 2b14)(isEmpty 2b15)(isEmpty 2b16)(isEmpty 2b17)
    (isEmpty 3b1)(isEmpty 3b2)(isEmpty 3b3)(isEmpty 3b4)(isEmpty 3b5)(isEmpty 3b6)(isEmpty 3b8)(isEmpty 3b9)(isEmpty 3b10)(isEmpty 3b11)(isEmpty 3b12)(isEmpty 3b13)(isEmpty 3b14)(isEmpty 3b15)(isEmpty 3b16)(isEmpty 3b17)
    (isEmpty 4b1)(isEmpty 4b2)(isEmpty 4b3)(isEmpty 4b4)(isEmpty 4b5)(isEmpty 4b6)(isEmpty 4b8)(isEmpty 4b9)(isEmpty 4b10)(isEmpty 4b11)(isEmpty 4b12)(isEmpty 4b13)(isEmpty 4b14)(isEmpty 4b15)(isEmpty 4b16)(isEmpty 4b17)
    (isEmpty 5b1)(isEmpty 5b2)(isEmpty 5b8)(isEmpty 5b9)(isEmpty 5b10)(isEmpty 5b11)(isEmpty 5b12)(isEmpty 5b13)(isEmpty 5b14)(isEmpty 5b15)(isEmpty 5b16)(isEmpty 5b17)
    (isEmpty 6b1)(isEmpty 6b2)(isEmpty 6b3)(isEmpty 6b4)(isEmpty 6b5)(isEmpty 6b6)(isEmpty 6b7)(isEmpty 6b8)(isEmpty 6b9)(isEmpty 6b10)(isEmpty 6b11)(isEmpty 6b12)(isEmpty 6b13)(isEmpty 6b14)(isEmpty 6b15)(isEmpty 6b16)(isEmpty 6b17)
    (isEmpty 7b1)(isEmpty 7b2)(isEmpty 7b3)(isEmpty 7b4)(isEmpty 7b5)(isEmpty 7b6)(isEmpty 7b7)(isEmpty 7b8)(isEmpty 7b9)(isEmpty 7b10)(isEmpty 7b11)(isEmpty 7b12)(isEmpty 7b13)(isEmpty 7b14)(isEmpty 7b15)(isEmpty 7b16)(isEmpty 7b17)
    (isEmpty 8b1)(isEmpty 8b2)(isEmpty 8b3)(isEmpty 8b4)(isEmpty 8b5)(isEmpty 8b6)(isEmpty 8b7)(isEmpty 8b8)(isEmpty 8b9)(isEmpty 8b10)(isEmpty 8b11)(isEmpty 8b12)(isEmpty 8b13)(isEmpty 8b14)(isEmpty 8b15)(isEmpty 8b16)(isEmpty 8b17)
    (isEmpty 9b1)(isEmpty 9b2)(isEmpty 9b3)(isEmpty 9b4)(isEmpty 9b5)(isEmpty 9b6)(isEmpty 9b7)(isEmpty 9b8)(isEmpty 9b9)(isEmpty 9b10)(isEmpty 9b11)(isEmpty 9b12)(isEmpty 9b13)(isEmpty 9b14)(isEmpty 9b15)(isEmpty 9b16)(isEmpty 9b17)
    (isEmpty 10b1)(isEmpty 10b2)(isEmpty 10b3)(isEmpty 10b4)(isEmpty 10b5)(isEmpty 10b6)(isEmpty 10b7)(isEmpty 10b8)(isEmpty 10b9)(isEmpty 10b10)(isEmpty 10b11)(isEmpty 10b12)(isEmpty 10b13)(isEmpty 10b14)(isEmpty 10b15)(isEmpty 10b16)(isEmpty 10b17)
    (isEmpty 11b1)(isEmpty 11b2)(isEmpty 11b3)(isEmpty 11b4)(isEmpty 11b5)(isEmpty 11b6)(isEmpty 11b7)(isEmpty 11b8)(isEmpty 11b9)(isEmpty 11b10)(isEmpty 11b11)(isEmpty 11b12)(isEmpty 11b13)(isEmpty 11b14)(isEmpty 11b15)(isEmpty 11b16)(isEmpty 11b17)
    (isEmpty 12b1)(isEmpty 12b2)(isEmpty 12b3)(isEmpty 12b4)(isEmpty 12b5)(isEmpty 12b6)(isEmpty 12b7)(isEmpty 12b8)(isEmpty 12b9)(isEmpty 12b10)(isEmpty 12b11)(isEmpty 12b12)(isEmpty 12b13)(isEmpty 12b14)(isEmpty 12b15)(isEmpty 12b16)(isEmpty 12b17)

    ;;On definit les TOPs
    (isTop 0b0 1b0)(isTop 0b1 1b1)(isTop 0b2 1b2)(isTop 0b3 1b3)(isTop 0b4 1b4)(isTop 0b5 1b5)(isTop 0b6 1b6)(isTop 0b7 1b7)(isTop 0b8 1b8)(isTop 0b9 1b9)(isTop 0b10 1b10)(isTop 0b11 1b11)(isTop 0b12 1b12)(isTop 0b13 1b13)(isTop 0b14 1b14)(isTop 0b15 1b15)(isTop 0b16 1b16)(isTop 0b17 1b17)(isTop 0b18 1b18)
    (isTop 1b0 2b0)(isTop 1b1 2b1)(isTop 1b2 2b2)(isTop 1b3 2b3)(isTop 1b4 2b4)(isTop 1b5 2b5)(isTop 1b6 2b6)(isTop 1b7 2b7)(isTop 1b8 2b8)(isTop 1b9 2b9)(isTop 1b10 2b10)(isTop 1b11 2b11)(isTop 1b12 2b12)(isTop 1b13 2b13)(isTop 1b14 2b14)(isTop 1b15 2b15)(isTop 1b16 2b16)(isTop 1b17 2b17)(isTop 1b18 2b18)
    (isTop 2b0 3b0)(isTop 2b1 3b1)(isTop 2b2 3b2)(isTop 2b3 3b3)(isTop 2b4 3b4)(isTop 2b5 3b5)(isTop 2b6 3b6)(isTop 2b7 3b7)(isTop 2b8 3b8)(isTop 2b9 3b9)(isTop 2b10 3b10)(isTop 2b11 3b11)(isTop 2b12 3b12)(isTop 2b13 3b13)(isTop 2b14 3b14)(isTop 2b15 3b15)(isTop 2b16 3b16)(isTop 2b17 3b17)(isTop 2b18 3b18)
    (isTop 3b0 4b0)(isTop 3b1 4b1)(isTop 3b2 4b2)(isTop 3b3 4b3)(isTop 3b4 4b4)(isTop 3b5 4b5)(isTop 3b6 4b6)(isTop 3b7 4b7)(isTop 3b8 4b8)(isTop 3b9 4b9)(isTop 3b10 4b10)(isTop 3b11 4b11)(isTop 3b12 4b12)(isTop 3b13 4b13)(isTop 3b14 4b14)(isTop 3b15 4b15)(isTop 3b16 4b16)(isTop 3b17 4b17)(isTop 3b18 4b18)
    (isTop 4b0 5b0)(isTop 4b1 5b1)(isTop 4b2 5b2)(isTop 4b3 5b3)(isTop 4b4 5b4)(isTop 4b5 5b5)(isTop 4b6 5b6)(isTop 4b7 5b7)(isTop 4b8 5b8)(isTop 4b9 5b9)(isTop 4b10 5b10)(isTop 4b11 5b11)(isTop 4b12 5b12)(isTop 4b13 5b13)(isTop 4b14 5b14)(isTop 4b15 5b15)(isTop 4b16 5b16)(isTop 4b17 5b17)(isTop 4b18 5b18)
    (isTop 5b0 6b0)(isTop 5b1 6b1)(isTop 5b2 6b2)(isTop 5b3 6b3)(isTop 5b4 6b4)(isTop 5b5 6b5)(isTop 5b6 6b6)(isTop 5b7 6b7)(isTop 5b8 6b8)(isTop 5b9 6b9)(isTop 5b10 6b10)(isTop 5b11 6b11)(isTop 5b12 6b12)(isTop 5b13 6b13)(isTop 5b14 6b14)(isTop 5b15 6b15)(isTop 5b16 6b16)(isTop 5b17 6b17)(isTop 5b18 6b18)
    (isTop 6b0 7b0)(isTop 6b1 7b1)(isTop 6b2 7b2)(isTop 6b3 7b3)(isTop 6b4 7b4)(isTop 6b5 7b5)(isTop 6b6 7b6)(isTop 6b7 7b7)(isTop 6b8 7b8)(isTop 6b9 7b9)(isTop 6b10 7b10)(isTop 6b11 7b11)(isTop 6b12 7b12)(isTop 6b13 7b13)(isTop 6b14 7b14)(isTop 6b15 7b15)(isTop 6b16 7b16)(isTop 6b17 7b17)(isTop 6b18 7b18)
    (isTop 7b0 8b0)(isTop 7b1 8b1)(isTop 7b2 8b2)(isTop 7b3 8b3)(isTop 7b4 8b4)(isTop 7b5 8b5)(isTop 7b6 8b6)(isTop 7b7 8b7)(isTop 7b8 8b8)(isTop 7b9 8b9)(isTop 7b10 8b10)(isTop 7b11 8b11)(isTop 7b12 8b12)(isTop 7b13 8b13)(isTop 7b14 8b14)(isTop 7b15 8b15)(isTop 7b16 8b16)(isTop 7b17 8b17)(isTop 7b18 8b18)
    (isTop 8b0 9b0)(isTop 8b1 9b1)(isTop 8b2 9b2)(isTop 8b3 9b3)(isTop 8b4 9b4)(isTop 8b5 9b5)(isTop 8b6 9b6)(isTop 8b7 9b7)(isTop 8b8 9b8)(isTop 8b9 9b9)(isTop 8b10 9b10)(isTop 8b11 9b11)(isTop 8b12 9b12)(isTop 8b13 9b13)(isTop 8b14 9b14)(isTop 8b15 9b15)(isTop 8b16 9b16)(isTop 8b17 9b17)(isTop 8b18 9b18)
    (isTop 9b0 10b0)(isTop 9b1 10b1)(isTop 9b2 10b2)(isTop 9b3 10b3)(isTop 9b4 10b4)(isTop 9b5 10b5)(isTop 9b6 10b6)(isTop 9b7 10b7)(isTop 9b8 10b8)(isTop 9b9 10b9)(isTop 9b10 10b10)(isTop 9b11 10b11)(isTop 9b12 10b12)(isTop 9b13 10b13)(isTop 9b14 10b14)(isTop 9b15 10b15)(isTop 9b16 10b16)(isTop 9b17 10b17)(isTop 9b18 10b18)
    (isTop 10b0 11b0)(isTop 10b1 11b1)(isTop 10b2 11b2)(isTop 10b3 11b3)(isTop 10b4 11b4)(isTop 10b5 11b5)(isTop 10b6 11b6)(isTop 10b7 11b7)(isTop 10b8 11b8)(isTop 10b9 11b9)(isTop 10b10 11b10)(isTop 10b11 11b11)(isTop 10b12 11b12)(isTop 10b13 11b13)(isTop 10b14 11b14)(isTop 10b15 11b15)(isTop 10b16 11b16)(isTop 10b17 11b17)(isTop 10b18 11b18)
    (isTop 11b0 12b0)(isTop 11b1 12b1)(isTop 11b2 12b2)(isTop 11b3 12b3)(isTop 11b4 12b4)(isTop 11b5 12b5)(isTop 11b6 12b6)(isTop 11b7 12b7)(isTop 11b8 12b8)(isTop 11b9 12b9)(isTop 11b10 12b10)(isTop 11b11 12b11)(isTop 11b12 12b12)(isTop 11b13 12b13)(isTop 11b14 12b14)(isTop 11b15 12b15)(isTop 11b16 12b16)(isTop 11b17 12b17)(isTop 11b18 12b18)
    (isTop 12b0 13b0)(isTop 12b1 13b1)(isTop 12b2 13b2)(isTop 12b3 13b3)(isTop 12b4 13b4)(isTop 12b5 13b5)(isTop 12b6 13b6)(isTop 12b7 13b7)(isTop 12b8 13b8)(isTop 12b9 13b9)(isTop 12b10 13b10)(isTop 12b11 13b11)(isTop 12b12 13b12)(isTop 12b13 13b13)(isTop 12b14 13b14)(isTop 12b15 13b15)(isTop 12b16 13b16)(isTop 12b17 13b17)(isTop 12b18 13b18)
    
    ;;On définit les LEFTs
    (isLeft 0b0 0b1)(isLeft 0b1 0b2)(isLeft 0b2 0b3)(isLeft 0b3 0b4)(isLeft 0b4 0b5)(isLeft 0b5 0b6)(isLeft 0b6 0b7)(isLeft 0b7 0b8)(isLeft 0b8 0b9)(isLeft 0b9 0b10)(isLeft 0b10 0b11)(isLeft 0b11 0b12)(isLeft 0b12 0b13)(isLeft 0b13 0b14)(isLeft 0b14 0b15)(isLeft 0b15 0b16)(isLeft 0b16 0b17)(isLeft 0b17 0b18)
    (isLeft 1b0 1b1)(isLeft 1b1 1b2)(isLeft 1b2 1b3)(isLeft 1b3 1b4)(isLeft 1b4 1b5)(isLeft 1b5 1b6)(isLeft 1b6 1b7)(isLeft 1b7 1b8)(isLeft 1b8 1b9)(isLeft 1b9 1b10)(isLeft 1b10 1b11)(isLeft 1b11 1b12)(isLeft 1b12 1b13)(isLeft 1b13 1b14)(isLeft 1b14 1b15)(isLeft 1b15 1b16)(isLeft 1b16 1b17)(isLeft 1b17 1b18)
    (isLeft 2b0 2b1)(isLeft 2b1 2b2)(isLeft 2b2 2b3)(isLeft 2b3 2b4)(isLeft 2b4 2b5)(isLeft 2b5 2b6)(isLeft 2b6 2b7)(isLeft 2b7 2b8)(isLeft 2b8 2b9)(isLeft 2b9 2b10)(isLeft 2b10 2b11)(isLeft 2b11 2b12)(isLeft 2b12 2b13)(isLeft 2b13 2b14)(isLeft 2b14 2b15)(isLeft 2b15 2b16)(isLeft 2b16 2b17)(isLeft 2b17 2b18)
    (isLeft 3b0 3b1)(isLeft 3b1 3b2)(isLeft 3b2 3b3)(isLeft 3b3 3b4)(isLeft 3b4 3b5)(isLeft 3b5 3b6)(isLeft 3b6 3b7)(isLeft 3b7 3b8)(isLeft 3b8 3b9)(isLeft 3b9 3b10)(isLeft 3b10 3b11)(isLeft 3b11 3b12)(isLeft 3b12 3b13)(isLeft 3b13 3b14)(isLeft 3b14 3b15)(isLeft 3b15 3b16)(isLeft 3b16 3b17)(isLeft 3b17 3b18)
    (isLeft 4b0 4b1)(isLeft 4b1 4b2)(isLeft 4b2 4b3)(isLeft 4b3 4b4)(isLeft 4b4 4b5)(isLeft 4b5 4b6)(isLeft 4b6 4b7)(isLeft 4b7 4b8)(isLeft 4b8 4b9)(isLeft 4b9 4b10)(isLeft 4b10 4b11)(isLeft 4b11 4b12)(isLeft 4b12 4b13)(isLeft 4b13 4b14)(isLeft 4b14 4b15)(isLeft 4b15 4b16)(isLeft 4b16 4b17)(isLeft 4b17 4b18)
    (isLeft 5b0 5b1)(isLeft 5b1 5b2)(isLeft 5b2 5b3)(isLeft 5b3 5b4)(isLeft 5b4 5b5)(isLeft 5b5 5b6)(isLeft 5b6 5b7)(isLeft 5b7 5b8)(isLeft 5b8 5b9)(isLeft 5b9 5b10)(isLeft 5b10 5b11)(isLeft 5b11 5b12)(isLeft 5b12 5b13)(isLeft 5b13 5b14)(isLeft 5b14 5b15)(isLeft 5b15 5b16)(isLeft 5b16 5b17)(isLeft 5b17 5b18)
    (isLeft 6b0 6b1)(isLeft 6b1 6b2)(isLeft 6b2 6b3)(isLeft 6b3 6b4)(isLeft 6b4 6b5)(isLeft 6b5 6b6)(isLeft 6b6 6b7)(isLeft 6b7 6b8)(isLeft 6b8 6b9)(isLeft 6b9 6b10)(isLeft 6b10 6b11)(isLeft 6b11 6b12)(isLeft 6b12 6b13)(isLeft 6b13 6b14)(isLeft 6b14 6b15)(isLeft 6b15 6b16)(isLeft 6b16 6b17)(isLeft 6b17 6b18)
    (isLeft 7b0 7b1)(isLeft 7b1 7b2)(isLeft 7b2 7b3)(isLeft 7b3 7b4)(isLeft 7b4 7b5)(isLeft 7b5 7b6)(isLeft 7b6 7b7)(isLeft 7b7 7b8)(isLeft 7b8 7b9)(isLeft 7b9 7b10)(isLeft 7b10 7b11)(isLeft 7b11 7b12)(isLeft 7b12 7b13)(isLeft 7b13 7b14)(isLeft 7b14 7b15)(isLeft 7b15 7b16)(isLeft 7b16 7b17)(isLeft 7b17 7b18)
    (isLeft 8b0 8b1)(isLeft 8b1 8b2)(isLeft 8b2 8b3)(isLeft 8b3 8b4)(isLeft 8b4 8b5)(isLeft 8b5 8b6)(isLeft 8b6 8b7)(isLeft 8b7 8b8)(isLeft 8b8 8b9)(isLeft 8b9 8b10)(isLeft 8b10 8b11)(isLeft 8b11 8b12)(isLeft 8b12 8b13)(isLeft 8b13 8b14)(isLeft 8b14 8b15)(isLeft 8b15 8b16)(isLeft 8b16 8b17)(isLeft 8b17 8b18)
    (isLeft 9b0 9b1)(isLeft 9b1 9b2)(isLeft 9b2 9b3)(isLeft 9b3 9b4)(isLeft 9b4 9b5)(isLeft 9b5 9b6)(isLeft 9b6 9b7)(isLeft 9b7 9b8)(isLeft 9b8 9b9)(isLeft 9b9 9b10)(isLeft 9b10 9b11)(isLeft 9b11 9b12)(isLeft 9b12 9b13)(isLeft 9b13 9b14)(isLeft 9b14 9b15)(isLeft 9b15 9b16)(isLeft 9b16 9b17)(isLeft 9b17 9b18)
    (isLeft 10b0 10b1)(isLeft 10b1 10b2)(isLeft 10b2 10b3)(isLeft 10b3 10b4)(isLeft 10b4 10b5)(isLeft 10b5 10b6)(isLeft 10b6 10b7)(isLeft 10b7 10b8)(isLeft 10b8 10b9)(isLeft 10b9 10b10)(isLeft 10b10 10b11)(isLeft 10b11 10b12)(isLeft 10b12 10b13)(isLeft 10b13 10b14)(isLeft 10b14 10b15)(isLeft 10b15 10b16)(isLeft 10b16 10b17)(isLeft 10b17 10b18)
    (isLeft 11b0 11b1)(isLeft 11b1 11b2)(isLeft 11b2 11b3)(isLeft 11b3 11b4)(isLeft 11b4 11b5)(isLeft 11b5 11b6)(isLeft 11b6 11b7)(isLeft 11b7 11b8)(isLeft 11b8 11b9)(isLeft 11b9 11b10)(isLeft 11b10 11b11)(isLeft 11b11 11b12)(isLeft 11b12 11b13)(isLeft 11b13 11b14)(isLeft 11b14 11b15)(isLeft 11b15 11b16)(isLeft 11b16 11b17)(isLeft 11b17 11b18)
    (isLeft 12b0 12b1)(isLeft 12b1 12b2)(isLeft 12b2 12b3)(isLeft 12b3 12b4)(isLeft 12b4 12b5)(isLeft 12b5 12b6)(isLeft 12b6 12b7)(isLeft 12b7 12b8)(isLeft 12b8 12b9)(isLeft 12b9 12b10)(isLeft 12b10 12b11)(isLeft 12b11 12b12)(isLeft 12b12 12b13)(isLeft 12b13 12b14)(isLeft 12b14 12b15)(isLeft 12b15 12b16)(isLeft 12b16 12b17)(isLeft 12b17 12b18)
    (isLeft 13b0 13b1)(isLeft 13b1 13b2)(isLeft 13b2 13b3)(isLeft 13b3 13b4)(isLeft 13b4 13b5)(isLeft 13b5 13b6)(isLeft 13b6 13b7)(isLeft 13b7 13b8)(isLeft 13b8 13b9)(isLeft 13b9 13b10)(isLeft 13b10 13b11)(isLeft 13b11 13b12)(isLeft 13b12 13b13)(isLeft 13b13 13b14)(isLeft 13b14 13b15)(isLeft 13b15 13b16)(isLeft 13b16 13b17)(isLeft 13b17 13b18)
)

;;goal = la personne est arrivée à la machine à café
(:goal (AND
    (isPerson 10b15)
    )
)
)