

(define (domain COFFEE)
    (:requirements :strips :typing)
    (:types
        block
    )
    (:predicates
        (isEmpty ?x - block)
        ;;(isWall ?x - block)
        (isPerson ?x - block)
        (isTop ?x - block ?y - block) ;;x est en haut de y
        (isLeft ?x - block ?y - block) ;;x est a gauche de y
    )

    ;;deplace la personne de la position x à y
    ;;elle peut se déplacer lorsque que la case cible est vide uniquement
    (:action moveTop
        :parameters (?x - block ?y - block)
        :precondition (and (isTop ?y ?x) (isEmpty ?y) (isPerson ?x))
        :effect (and (not (isPerson ?x))
            (isPerson ?y)
            (isEmpty ?x)
            (not (isEmpty ?y))
        )
    )

    ;;deplace la peresonne de la position x à y
    (:action moveBottom
        :parameters (?x - block ?y - block)
        :precondition (and (isTop ?x ?y) (isEmpty ?y) (isPerson ?x))
        :effect (and (not (isPerson ?x))
            (isPerson ?y)
            (isEmpty ?x)
            (not (isEmpty ?y))
        )
    )

    ;;deplace la personne de la position x à y
    (:action moveRight
        :parameters (?x - block ?y - block)
        :precondition (and (isLeft ?x ?y) (isEmpty ?y) (isPerson ?x))
        :effect (and (not (isPerson ?x))
            (isPerson ?y)
            (isEmpty ?x)
            (not (isEmpty ?y))
        )
    )

    ;;deplace la personne de la position x à y
    (:action moveLeft
        :parameters (?x - block ?y - block)
        :precondition (and (isLeft ?y ?x) (isEmpty ?y) (isPerson ?x))
        :effect (and (not (isPerson ?x))
            (isPerson ?y)
            (isEmpty ?x)
            (not (isEmpty ?y))
        )
    )



)















