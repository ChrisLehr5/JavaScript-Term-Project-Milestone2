var rooms = {
    "start": {
        "description": "You find yourself in the bright woods outside of your home. It\'s a beautiful day, far too beautiful to be inside.<p> Your feet are itchy for an adventure!" +
            "This is a choose your own adventure text game. Type <b>help</b> to see the options!" + "<p> You have several choices ahead of you: type <b>go north<b> or <b>go west<b>",
        "talk": "There is nobody here to talk with. Unless...you mean yourself?",
        "directions": {
            "north": "clearing1",
            "west": "bridge1"
        }
    },
    "clearing1": {
        "description": "You arrive to a small clearing, filled with flowers and the hum of busy bees.<p> There is a pathway that splits two directions:<b>go north</b> through the bees closer to the flowers or <b>go east</b> back into the woods. Of course, you could also go <b>go south</b> back to the start.<p>To the north you see a tall tower poking above the trees.",
        "look": "The room is small",
        "talk": "The bees are not interested in chatting with you. Too bad you aren't a wizard with a communication spell.",
        "directions": {
            "south": "start",
            "north": "beedeath",
            "east": "caravan",
        }
    },
    "tower": {
        "description": "Rumor is this tower is an old wizrds tower. Perhaps something interesting still lies inside?",

        "directions": {
            "south": "clearing1"
        }

    },
    "caravan": {
        "description": "As you walk back into the woods a curious sound can be heard. Walking around a bend, you find a small traveling caravan. <p>Several dwarves mill around fixing a broken wagon wheel. A tall human dressed in armor stands in the middle of the road, keeping watch. What do you do?",
        "look": "At further inspection the caravan is worn down looking and slightly ragged. You don't get the feeling they have much to trade at the moment of any value.",
        "talk": "The dwarves are too busy fixing the wheel to deal with you. Maybe if you had a spare wheel they'd be interested in you.",
        "directions": {
            "west": "clearing1",
            "south": "clearing2"
        }
    },
    "bridge1": {
        "description": "A wide river is before you with a sturdy wooden bridge. On the far side you know sits the toll booth for town. You also know from experience trying to cross without money gets you tossed into the river. <p>Best avoid that route for now and <b>go east</b>.",
        "look": "You can hear the guard further down whistling. The sun sparkles off the water, making the large town look very tempting. If only you had money to pay the fare...",
        "talk": "You shouldn't say anything to attract that guards attention.",
        "directions": {
            "east": "clearing1",
        }
    },
    "beedeath": {
        "description": "Getting closer to the bees you realize something terrible! The bees are skeletal in appearance, <p> and bear skull markings upon their backs. Realizing your mistake you attempt to back peddle, but you are too slow! <p> As they swarm you, you lament you don't have a torch to smoke them away.<p> Maybe in your next life you\'ll be more prepared!",
        "directions": {
            "north": "tower"
        }
    },
    "clearing2": {
        "description": "There is a game trail running to the <b>east</b> into the deeper woods, and a trail here to the <b>west<b> that you know will eventually lead you back to your home.",
        "look": "This is the furthest you've been into the woods away from your home. The air has a faint tingle of...anticipation. The bird song is quiet here.",
        "talk": "I am ready. Aren't I?",
        "directions": {
            "east": "start2",
            "west": "home",
        }
    },
    "home": {
        "description": "You aren't ready to experience the wide world just yet. Heading home, you do it tomorrow- for sure!!"
    },
    "start2": {
        "description": "Congratulations! You have completed the tutorial- please come back to expereince the full game in the future!!"
    }
}