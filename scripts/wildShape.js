// ----------------------------------------------------------------
// FORM STATS.
//

let formGroups = [ // contains Attack info for the forms
    {
        group: "Wild Shape: Pest Form", // Doubles as the Feat Name and the Heading under which the form options are displayed in the selection menu
        class: "pestForm", // Used to link to the correct Scaling Attributes group
        forms: [
            {
                name: "Pest",
                weaknesses: {piercing: "5", bludgeoning: "5", slashing: "5"},
                speed: {value: 10, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
                skills: {athletics: -4},
            }
        ]
    },
    {
        group: "Wild Shape: Animal Form", // Doubles as the Feat Name and the Heading under which the form options are displayed in the selection menu
        class: "animalForm", // Used to link to the correct Scaling Attributes group
        forms: [
            {
                name: "Ape", 
                attacks: {
                    "Fist": {dsize: 6, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 30, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "20", exceptions: ""}]}, 
                senses: [{type: "lowLightVision",label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            }, 
            {
                name: "Bear", 
                attacks: {
                    "Jaws": {dsize: 8, dnum: 2, type: "Piercing"},
                    "Claw": {dsize: 8, dnum: 1, type: "Slashing", traits: ["Agile"]}
                },
                speed: {value: 30, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            }, 
            {
                name: "Bull", 
                attacks: {
                    "Horn": {dsize: 8, dnum: 2, type: "Piercing"}
                }, 
                speed: {value: 30, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Canine", 
                attacks: {
                    "Jaws": {dsize: 8, dnum: 2, type: "Piercing"}
                },
                speed: {value: 40, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Cat", 
                attacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 1, type: "Slashing", traits: ["Agile"]}
                }, 
                speed: {value: 40, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Deer", 
                attacks: {
                    "Antler": {dsize: 6, dnum: 2, type: "Piercing"}
                }, 
                speed: {value: 50, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Frog", 
                attacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Bludgeoning"},
                    "Tongue": {dsize: 4, dnum: 2, type: "Bludgeoning", traits: ["Reach 15 feet"]}
                }, 
                speed: {value: 25, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "25", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Shark", 
                attacks: {
                    "Jaws": {dsize: 8, dnum: 2, type: "Piercing"}
                }, 
                speed: {value: 0, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "35", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
                details: "Breathe underwater but not in air."
            },
            {
                name: "Snake", 
                attacks: {
                    "Fangs": {dsize: 4, dnum: 2, type: "Piercing"}
                }, 
                plusattacks: {
                    "Fangs": {dsize: 6, dnum: 1, type: "Poison"}
                }, // plusattacks add additional damage to the same-name primary attack. Can support multiple different instances of additional damage for the same primary attack.
                speed: {value: 20, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "20", exceptions: ""}, {type: "swim", label: "Swim", value: "20", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            } 
        ]
    },
    
    {
        group: "Insect Shape",
        class: "insectShape",
        forms: [
            {
                name: "Ant", 
                attacks: {
                    "Mandibles": {dsize: 6, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 30, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "30", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
            {
                name: "Beetle",
                attacks: {
                    "Mandibles": {dsize: 10, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Centipede", 
                attacks: {
                    "Mandibles": {dsize: 8, dnum: 1, type: "Piercing plus 1d4 persistent Poison"}
                }, 
                speed: {value: 25, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "25", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Mantis", 
                attacks: {
                    "Foreleg": {dsize: 8, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Scorpion", 
                attacks: {
                    "Stinger": {dsize: 8, dnum: 1, type: "Piercing plus 1d4 persistent Poison"},
                    "Pincer": {dsize: 6, dnum: 1, type: "Bludgeoning", traits: ["Agile"]}
                }, 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "tremorsense", label: "Imprecise Tremorsense", value: "60", exceptions: ""}],
            },
            {
                name: "Spider", 
                attacks: {
                    "Fangs": {dsize: 6, dnum: 1, type: "Piercing plus 1d4 persistent Poison"},
                    "Web": {type: "None", addEffect: "No damage. Entangles the target for one round", traits: ["Range Increment 20 feet"]}
                }, 
                speed: {value: 25, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "25", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
        ]
    }, 
    
    { 
        group: "Soaring Shape",
        class: "soaringShape",
        forms: [
            {
                name: "Bat", 
                attacks: {
                    "Fangs": {dsize: 8, dnum: 2, type: "Piercing"},
                    "Wing": {dsize: 6, dnum: 2, type: "Bludgeoning", traits: ["Agile"]}
                }, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "30", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "echolocation", label: "Precise Echolocation", value: "40", exceptions: ""}],
            }, 
            {
                name: "Bird", 
                attacks: {
                    "Beak": {dsize: 8, dnum: 2, type: "Piercing"},
                    "Talon": {dsize: 10, dnum: 1, type: "Slashing", traits: ["Agile"]}
                }, 
                speed: {value: 10, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "50", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Pterosaur", 
                attacks: {
                    "Beak": {dsize: 6, dnum: 3, type: "Piercing"}
                }, 
                extraFeat: "Ferocious Shape", 
                speed: {value: 10, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "40", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Wasp", 
                attacks: {
                    "Stinger": {dsize: 8, dnum: 1, type: "Piercing plus 1d6 persistent Poison"}
                }, 
                extraFeat: "Insect Shape", 
                speed: {value: 20, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "40", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
        ]
    },
    
    { 
        group: "Ferocious Shape",
        class: "ferociousShape",
        forms: [
            {
                name: "Ankylosaurus", 
                attacks: {
                    "Tail": {dsize: 6, dnum: 2, type: "Bludgeoning", traits: ["Back Swing", "Reach 10 feet"]},
                    "Foot": {dsize: 6, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            }, 
            {
                name: "Brontosaurus", 
                attacks: {
                    "Tail": {dsize: 6, dnum: 2, type: "Bludgeoning", traits: ["Reach 10 feet"]},
                    "Foot": {dsize: 8, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            }, 
            {
                name: "Deinonychus", 
                attacks: {
                    "Talon": {dsize: 4, dnum: 2, type: "Piercing plus 1 persistent Bleed", traits: ["Agile"]},
                    "Jaws": {dsize: 10, dnum: 1, type: "Piercing"}
                }, 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Stegosaurus", 
                attacks: {
                    "Tail": {dsize: 8, dnum: 2, type: "Piercing", traits: ["Back Swing", "Reach 10 feet"]}
                }, 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Triceratops", 
                attacks: {
                    "Horn": {dsize: 8, dnum: 2, type: "Piercing", addEffect: "1d6 persistent Bleed on a Crit"}, 
                    "Foot": {dsize: 6, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Tyrannosaurus", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 1, type: "Piercing", traits: ["Deadly", "Reach 10 feet"]}, 
                    "Tail": {dsize: 10, dnum: 1, type: "Bludgeoning", traits: ["Reach 10 feet"]}
                }, 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
        ]
    },
    
    { 
        group: "Elemental Shape",
        class: "elementalShape",
        forms: [
            {
                name: "Air", 
                attacks: {
                    "Gust": {dsize: 4, dnum: 1, type: "Bludgeoning"}
                }, 
                speed: {value: 0, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "80", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Earth", 
                attacks: {
                    "Fist": {dsize: 10, dnum: 2, type: "Bludgeoning"}
                }, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Fire", 
                attacks: {
                    "Tendril": {dsize: 8, dnum: 1, type: "Fire plus 1d4 persistent Fire"}
                }, 
                resistances: {fire: 10}, 
                weaknesses: {cold: 5, water: 5}, 
                speed: {value: 50, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Water", 
                attacks: {
                    "Wave": {dsize: 12, dnum: 1, type: "Bludgeoning", addEffect: "You can spend an action immediately after a hit to push the target 5 feet with the effects of a successful Shove"}
                }, 
                resistances: {fire: 5}, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "60", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
        ]
    },
    
    { 
        group: "Plant Shape",
        class: "plantShape",
        forms: [
            {
                name: "Arboreal", 
                attacks: {
                    "Branch": {dsize: 10, dnum: 2, type: "Bludgeoning", traits: ["Reach 15 feet"]},
                    "Foot": {dsize: 8, dnum: 2, type: "Bludgeoning"}
                }, 
                resistances: {poison: 10}, 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
                details: "You can speak in this form, but you still can't Cast a Spell or supply verbal components."
            }, 
            {
                name: "Flytrap", 
                attacks: {
                    "Leaf": {dsize: 8, dnum: 2, type: "Piercing", traits: ["Reach 10 feet"], addEffect: "You can spend an action after a hit to Grab the target"}
                }, 
                resistances: {poison: 10, acid: 10}, 
                speed: {value: 15, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Shambler", 
                attacks: {
                    "Vine": {dsize: 8, dnum: 2, type: "Slashing", traits: ["Reach 15 feet"]}
                }, 
                resistances: {poison: 10, electricity: 10}, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "20", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
        ]
    },
    
    { 
        group: "Dragon Shape",
        class: "dragonShape",
        forms: [
            {
                name: "Black", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Horns": {dsize: 8, dnum: 3, type: "Piercing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Acid"}
                }, 
                resistances: {acid: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "60", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "Blue", 
                attacks: {
                    "Jaws": {dsize: 10, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Horns": {dsize: 8, dnum: 3, type: "Piercing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 12, dnum: 1, type: "Electricity"}
                }, 
                resistances: {electricity: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "Brass", 
                attacks: {
                    "Jaws": {dsize: 8, dnum: 3, type: "Piercing"},
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]},
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Spikes": {dsize: 8, dnum: 3, type: "Piercing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 4, dnum: 2, type: "Fire"}, 
                },
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Bronze", 
                attacks: {
                    "Jaws": {dsize: 10, dnum: 2, type: "Piercing"},
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Wing": {dsize: 8, dnum: 3, type: "Slashing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 12, dnum: 1, type: "Electricity"}
                }, 
                resistances: {electricity: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Copper", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"},
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Wing": {dsize: 8, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Acid"}
                }, 
                resistances: {acid: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "climb", label: "Climb", value: "25", exceptions: "on stone only"}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Gold", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 6, dnum: 4, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Horns": {dsize: 8, dnum: 3, type: "Piercing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Fire"}
                }, 
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Green", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Horns": {dsize: 8, dnum: 3, type: "Piercing", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Poison"}
                }, 
                resistances: {poison: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Red", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 6, dnum: 4, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}, 
                    "Wing": {dsize: 8, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Fire"}
                }, 
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Silver", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Cold"}
                }, 
                resistances: {cold: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "White", 
                attacks: {
                    "Jaws": {dsize: 6, dnum: 3, type: "Piercing"}, 
                    "Claw": {dsize: 10, dnum: 3, type: "Slashing", traits: ["Agile"]}, 
                    "Tail": {dsize: 10, dnum: 3, type: "Bludgeoning", traits: ["Reach 10 feet"]}
                }, 
                plusattacks: {
                    "Jaws": {dsize: 6, dnum: 2, type: "Cold"}
                }, 
                resistances: {cold: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "climb", label: "Climb", value: "25", exceptions: "on ice only"}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
        ]
    },
    
    {
        group: "Monstrosity Shape",
        class: "monstrosityShape",
        forms: [ 
            {
                name: "Phoenix", 
                attacks: {
                    "Beak": {dsize: 6, dnum: 2, type: "Piercing plus 2d4 persistent Fire", bonus: 12, traits: ["Reach 15 feet"]},
                    "Talon": {dsize: 8, dnum: 2, type: "Slashing", bonus: 12, traits: ["Agile", "Reach 15 feet"]}
                }, 
                plusattacks: {
                    "Beak": {dsize: 4, dnum: 2, type: "Fire"}
                }, 
                extraFeat: "Soaring Shape", 
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "90", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
                details: "<strong>Shroud of Flame</strong> (aura, evocation, fire, primal) 20 feet. You gain an aura of fire that extends out from you. A creature that enters or ends its turn within the aura takes 2d6 fire damage. A creature can take this damage only once per turn. You can use a single action, which has the concentrate trait, to activate or deactivate this aura."
            }, 
            {
                name: "Purple Worm", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing", bonus: 20, traits: ["Reach 10 feet"]},
                    "Stinger": {dsize: 8, dnum: 2, type: "Piercing plus 2d6 persistent Poison", bonus: 15, traits: ["Agile", "Reach 10 feet"]},
                    "Body": {dsize: 8, dnum: 2, type: "Bludgeoning", bonus: 20, traits: ["Reach 10 feet"]}
                }, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}, {type: "swim", label: "Swim", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
                details: "<strong>Inexorable</strong> You automatically recover from the paralyzed, slowed, and stunned conditions at the end of each of your turns. You're also immune to being immobilized and ignore difficult terrain and greater difficult terrain."
            }, 
            {
                name: "Sea Serpent", 
                attacks: {
                    "Jaws": {dsize: 12, dnum: 2, type: "Piercing", bonus: 20, traits: ["Reach 15 feet"]},
                    "Tail": {dsize: 8, dnum: 2, type: "Bludgeoning", bonus: 20, traits: ["Reach 25 feet"]}
                }, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "90", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
        ]
    },

    {
        group: "True Shapeshifter",
        class: "trueShapeshifter",
        forms: [ 
            {
                name: "Green Man", 
                attacks: {
                    "Vines": {dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 12, traits: ["Reach 30 feet", "Versatile P"]},
                    "Thorns": {dsize: 6, dnum: 6, type: "Piercing", bonus: 6, traits: ["Range 100 feet"]}
                }, 
                extraFeat: "Plant Shape", 
                speed: {value: 40, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
                size: 1,
                details: "<strong>Green Caress</strong> (aura, primal, transmutation) 60 feet. Enemies other than plants must succeed at a Fortitude save against your spell DC or become clumsy 1 for 1 round (clumsy 2 on a critical failure)." 
            },
            {
                name: "Kaiju", 
                attacks: {
                    "Jaws": {dsize: 10, dnum: 6, type: "Piercing", bonus: 10, traits: ["Reach 30 feet"]},
                    "Claws": {dsize: 8, dnum: 6, type: "Slashing", bonus: 8, traits: ["Agile", "Reach 30 feet"]},
                    "Foot": {dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 10, traits: ["Agile", "Reach 15 feet"]}
                }, 
                resistances: {piercing: 5, bludgeoning: 5, slashing: 5}, 
                speed: {value: 50, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
                details: "<strong>Unstoppable</strong> You are immune to being immobilized and ignore difficult terrain and greater difficult terrain."
            }, 
        ]
    },
];

let scalingAttributes = { // for sizes, 1 is Medium, 2 is Large, 3 is Huge, 4 is Gargantuan
    pestForm: // corresponds to the "class" of the formGroups above. Used to link the chosen form to the correct statistics for the level it's being cast at
    [// Pest Form
        {level: 1, mod: 0, ac: 15, temphp: 0, damage: 0, skills: {stealth: 10, acrobatics: 10}, size: 0.25},
        {level: 4, mod: 0, ac: 15, temphp: 0, damage: 0, skills: {stealth: 10, acrobatics: 10}, size: 0.25, 
            speed: {value: 10, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "20", exceptions: ""}]}
        },
    ],

    animalForm:
    [// Animal Forms
        {level: 2, mod: 9, ac: 16, temphp: 5, damage: 1, skills: {athletics: 9}, size: 1},
        {level: 3, mod: 14, ac: 17, temphp: 10, damage: 5, skills: {athletics: 14}, size: 1},
        {level: 4, mod: 16, ac: 18, temphp: 15, damage: 9, skills: {athletics: 16}, size: 2},
        {level: 5, mod: 18, ac: 18, temphp: 20, damage: 7, skills: {athletics: 20}, size: 3, double: true}
    ],
    
    insectShape:
    [// Insect Forms
        {level: 3, mod: 13, ac: 18, temphp: 10, damage: 2, skills: {athletics: 13}, size: 1},
        {level: 4, mod: 16, ac: 18, temphp: 15, damage: 6, skills: {athletics: 16}, size: 2},
        {level: 5, mod: 18, ac: 18, temphp: 20, damage: 2, skills: {athletics: 20}, size: 3, double: true},
    ],

    soaringShape:
    [// Soaring Forms
        {level: 4, mod: 16, ac: 18, temphp: 5, damage: 5, skills: {acrobatics: 16}, size: 1},
        {level: 5, mod: 18, ac: 18, temphp: 10, damage: 8, skills: {acrobatics: 20}, size: 2},
        {level: 6, mod: 21, ac: 21, temphp: 15, damage: 4, skills: {acrobatics: 23}, size: 3, double: true},
    ],

    ferociousShape:
    [// Ferocious Forms
        {level: 4, mod: 16, ac: 18, temphp: 15, damage: 9, skills: {athletics: 18}, size: 2},
        {level: 5, mod: 18, ac: 18, temphp: 20, damage: 6, skills: {athletics: 21}, size: 3, double: true},
        {level: 7, mod: 25, ac: 21, temphp: 25, damage: 15, skills: {athletics: 25}, size: 4, double: true},
    ],

    elementalShape:
    [// Elemental Forms
        {level: 5, mod: 18, ac: 18, temphp: 10, damage: 9, skills: {athletics: 20, acrobatics: 20}, size: 1},
        {level: 6, mod: 23, ac: 22, temphp: 15, damage: 13, skills: {athletics: 23, acrobatics: 20}, size: 2},
        {level: 7, mod: 25, ac: 22, temphp: 20, damage: 11, skills: {athletics: 25, acrobatics: 20}, size: 3, double: true},
    ],

    plantShape:
    [// Plant Forms
        {level: 5, mod: 17, ac: 19, temphp: 12, damage: 11, skills: {athletics: 19}, size: 2},
        {level: 6, mod: 21, ac: 22, temphp: 24, damage: 16, skills: {athletics: 22}, size: 3},
    ],

    dragonShape:
    [// Dragon Forms
        {level: 6, mod: 22, ac: 18, temphp: 10, damage: 6, skills: {athletics: 23}, size: 2},
        {level: 8, mod: 28, ac: 21, temphp: 15, damage: 12, skills: {athletics: 28}, size: 3},
    ],

    monstrosityShape:
    [// Monstrosity Forms
        {level: 8, mod: 28, ac: 20, temphp: 20, skills: {athletics: 30}, size: 3},
        {level: 9, mod: 31, ac: 22, temphp: 25, skills: {athletics: 33}, size: 3},
    ],

    trueShapeshifter:
    [// True Shapeshifter form
        {level: 10, mod: 34, ac: 25, temphp: 30, skills: {athletics: 36}, size: 4},
    ]
};

let skillRefs = {
    acrobatics: "acr",
    arcana: "arc",
    athletics: "ath",
    crafting: "cra",
    deception: "dec",
    diplomacy: "dip",
    intimidation: "itm",
    medicine: "med",
    nature: "nat",
    occultism: "occ",
    performance: "prf",
    religion: "rel",
    society: "soc",
    stealth: "ste",
    survival: "sur",
    thievery: "thi",
};

// ------------------------------------------------------------------
// DECLARE VARIABLES
// ------------------------------------------------------------------

// Dialog variable
let content = "";

// For token size adjustment
let width = 1;
let height = 1;

// For stats adjustments
let formValue = 0;
let origValue = 0;
let origSpeeds = {};
let origSenses = [];
let length = 0;

if (!token) {
    ui.notifications.error("Please select a token"); 
    return; 
}
let tempHP = actor.data.data.attributes.hp.temp;
if (!tempHP) {
    tempHP = 0;
}
let formData = actor.getFlag("world", "ws_formData");
let isSpellShaped = actor.getFlag("world", "ss_formData");
let levelAttributes;
let heightenedLevel = Math.ceil((actor.data.data.details.level.value) / 2); 


// -------------------------------------------------------------------
// DECLARE FUNCTIONS
// -------------------------------------------------------------------

function runDialog(dialog, height, width) {
    if (height) {
        dialog.options.height = height;
        dialog.position.height = height;
    }
    if (width) {
        dialog.options.width = width;
        dialog.position.width = width;
    }
    dialog.render(true);
}   

// -------------------------------------------------------------------

async function removeCustomMods() {
    let customMods = Object.keys(actor.data.data.customModifiers)
    for (let element of customMods) {
        for (let mod of actor.data.data.customModifiers[element]) {
            if (mod.name.includes("WSForm")) {
                await removeMod(element, mod.name)
            }
        }
    }
}

// -------------------------------------------------------------------

async function removeMod(type, label) {
    if (actor.data.data.customModifiers[type]) {
        await actor.removeCustomModifier(`${type}`, label);
    }
}

// -------------------------------------------------------------------

async function reset(){
    // back to default image, if we changed it
    let img = actor.getFlag("world", "ws_origImg");
    if (img) {
        await token.update({ img });
        await actor.update({ "token.img" : img })
    }

    // This resets the token size. If you use small-size tokens in your game, delete the '//'s 
    // preceding the next complete 'if' statement. This will ensure Small PCs revert to their 
    // correct size rather than becoming Medium.
    
    // if (actor.data.data.traits.size.value === "med"){
    await setSize(1);
    // } else if (actor.data.data.traits.size.value === "sm"){
    //    await setSize(0.5);
    // };

    // remove all form attributes from token
    await actor.unsetFlag("world", "ws_formData")
    await actor.unsetFlag("world", "ws_levelAttributes")

    // Remove any resistances/weaknesses that were given by transformation
    let filterOut = actor.data.data.traits.dv.filter(element => 
        !element.label.includes("WSForm"))
    await actor.update({ "data.traits.dv" : filterOut });
    filterOut = actor.data.data.traits.dr.filter(element => 
        !element.label.includes("WSForm"))
    await actor.update({ "data.traits.dr" : filterOut });

    // reset Speeds and Senses to normal
    await resetSenses();
    await resetSpeeds();

    // if tempHP was changed, remove tempHP
    await resetTempHP();

    // remove any custom bonuses applied from the transformation
    await removeCustomMods();

    // removeFormDetails();
};

// -------------------------------------------------------------------

async function resetTempHP() {
    let oldTempHP = await actor.getFlag("world", "ws_tempHPChanged")
    if (oldTempHP >= 0) {
        await actor.unsetFlag("world", "ws_tempHPChanged")
        await actor.update({ "data.attributes.hp.temp": oldTempHP });
    }  
}

// -------------------------------------------------------------------

// Apply wide ranging bonuses gained from having specific wild shape feats
async function featCheck(formData, formType){
    // If the actor has the feat, and is not transforming into one of the forms granted
    // by that feat, they get the appropriate resistance
    if (wsFeats.includes("Elemental Shape") && formType !== "elementalShape") {
        // if the form doesn't have any resistances, add fire resistance 5
        if (!formData.resistances) {
            formData.resistances = {fire: 5};
        // if the form has resistances, but no fire resistance, OR if they have fire resistance,
        // but not fire resistance of 5 or greater, they have fire resistance 5
        } else if (!formData.resistances.fire || (formData.resistances.fire && (formData.resistances.fire < 5))) {
            formData.resistances.fire = 5
        }
    }

    // same logic as for plant form
    if (wsFeats.includes("Plant Shape") && formType !== "plantShape") {
        if (!formData.resistances) {
            formData.resistances = {poison: 5};
        } else if (!formData.resistances.poison || (formData.resistances.poison && (formData.resistances.poison < 5))) {
            formData.resistances.poison = 5
        }
    }

    if (wsFeats.includes("Dragon Shape") && formType !== "dragonShape") {
        dragonResistance();
    }
}

// -------------------------------------------------------------------

// If the form has resistances or weaknesses, add them
async function applyResistances(formData) {
    if (formData.resistances) {
        let resistances = formData.resistances;
        for (let type in resistances) {
            if (resistances.hasOwnProperty(type)) {
                actor.data.data.traits.dr.push({
                    type: type, 
                    label: `WSForm ${type}`, 
                    value: resistances[type], 
                    exceptions: ""
                })
            }
        }

        // create a copy of the resistances array and set resistances to that, so
        // it is preserved when game is reloaded (owing to pass by reference)
        let newResistances = JSON.parse(JSON.stringify(actor.data.data.traits.dr))
        await actor.update({ "data.traits.dr" : newResistances })
    }

    if (formData.weaknesses) {
        let weaknesses = formData.weaknesses;
        for (let type in weaknesses) {
            if (weaknesses.hasOwnProperty(type)) {
                actor.data.data.traits.dv.push({
                    type: type, 
                    label: `WSForm ${type}`, 
                    value: weaknesses[type], 
                    exceptions: ""
                })
            }
        }
        let newWeaknesses = JSON.parse(JSON.stringify(actor.data.data.traits.dv))
        await actor.update({ "data.traits.dv" : newWeaknesses })
    }
}

// -------------------------------------------------------------------

async function resetSpeeds() {
    let revert = actor.getFlag("world", "ws_origSpeeds")
    await actor.update({ "data.attributes.speed" : revert})
    await actor.unsetFlag("world", "ws_origSpeeds")
}

// -------------------------------------------------------------------

async function resetSenses() {
    let revert = actor.getFlag("world", "ws_origSenses")
    await actor.update({ "data.traits.senses" : revert})
    await actor.unsetFlag("world", "ws_origSenses")
}

// -------------------------------------------------------------------

// scales up token depending on the provided size of the new form
async function setSize(newSize){ 
    if (formData && formData.size) {
        token.update({ width: formData.size, height: formData.size });
        await actor.update({ "token.width": formData.size, "token.height": formData.size });
    } else {
        token.update({ width: newSize, height: newSize });
        await actor.update({ "token.width" : newSize, "token.height" : newSize})
    }
};

// -------------------------------------------------------------------

// if the form level's skill bonuses are greater than the character's, use those
// apply any feat bonuses if applicable
async function skillBonus(levelSkills, baseSkills, formName) {
    // 'skills' will become an array of the skills the form at this level gives you access to
    let skills = Object.keys(levelSkills)
    // for each item of the 'skills' array, find the appropriate skill abbreviation from the 
    // skillrefs array. This logic allows for a single form to grant new values to multiple skills
    for (let skill of skills) {
        // Earth/Water elementals get only a bonus to atheltics, Air/Fire only to acrobatics
        if (formName === "Earth" || formName === "Water") { skill = "athletics"; }
        else if (formName === "Air" || formName === "Fire") { skill = "acrobatics" }
        let abbr = skillRefs[skill];
        origValue = baseSkills[abbr].value // the original value the actor has for that skill
        formValue = levelSkills[skill] // get the new (form) value of the skill

        if (formValue > origValue) {
            const formBonus = formValue - origValue;
            await actor.addCustomModifier(skill, `WSForm ${skill} Bonus`, formBonus, "untyped")
        }
        if (wsFeats.includes("Ferocious Shape") && skill === "athletics") {
            await actor.addCustomModifier("athletics", "WSForm Ferocious Bonus", 1, "status");
        }
        if (wsFeats.includes("Soaring Shape") && skill === "acrobatics") {
            await actor.addCustomModifier("acrobatics", "WSForm Soaring Bonus", 1, "status");
        }
    }
}

// -------------------------------------------------------------------

// if the druid has Dragon Shape, this will pop up a dialog to choose your resistance when transforming
// into a non-Dragon form
async function dragonResistance() {
    let content2 = "";
    content2 += `<div style="text-align: center"><label for="resistance">Choose your resistance:</label>
                        <select name="resistance" id="resistance" style="margin: 5px 0">
                        <option value="acid">Acid</option>
                        <option value="cold">Cold</option>
                        <option value="electricity">Electricity</option>
                        <option value="fire">Fire</option>
                        <option value="poison">Poison</option></select></div>`
    let d2 = new Dialog({
        title: "Draconic Resistance",
        content: content2,
        buttons: {
            select: {
                icon: "<i class='fas fa-dragon'></i>",
                label: "Select",
                callback: async (html) => {
                    let type = html.find("#resistance")[0].value;
                    if (!formData.resistances) {
                        formData.resistances = {[type]: 5};
                    } else if (!formData.resistances[type] || 
                        ((formData.resistances[type]) && (formData.resistances[type]<5))) {
                        formData.resistances[type] = 5
                    }
                    await applyResistances(formData);
                }
            },
        }
    })
    runDialog(d2, 135, 210);
}

// -------------------------------------------------------------------

// Change the token's speeds to the form's
async function changeSpeeds() {
    // if there are any changes to speed at this level of the spell, use those
    if (levelAttributes.speed) {
        await actor.update({ "data.attributes.speed" : levelAttributes.speed })
    } else {  // otherwise use the form's base speeds
        await actor.update({ "data.attributes.speed" : formData.speed })
    }
}

// -------------------------------------------------------------------

// Change the token's senses to the form's
async function setSenses() {
    // if there are any changes to senses at this level of the spell, use those
    if (levelAttributes.senses) {
        await actor.update({ "data.traits.senses" : levelAttributes.senses })
    } else { // otherwise use the form's base senses
        await actor.update({ "data.traits.senses" : formData.senses })
    }
}

// ----------------------------------------------------> Main Transform Function

async function transform(html) {
        if (!formData) { // if actor isn't already transformed ->
            let castingLevel = html.find("#level")[0].value;
            let formType = html.find('#forms')[0].selectedOptions[0].className;
            let actualForm = html.find('#forms')[0].value;

            // Set up level variables
            let maxLevel = scalingAttributes[formType][scalingAttributes[formType].length - 1].level;
            let minLevel = scalingAttributes[formType][0].level
            if (castingLevel === "Auto") {
                // if heightened level is lower than the min level of transformation, you cannot transform
                if (heightenedLevel < minLevel) { 
                    ui.notifications.error("You are not a high enough level to transform into that form."); 
                    return;
                }
            } else {
                heightenedLevel = parseInt(castingLevel)
                if (heightenedLevel < minLevel) { 
                    ui.notifications.error("You cannot transform into that form at the selected spell level."); 
                    return;
                }
            }
             
            // add Form Attributes to token for reference
            for (let group of formGroups) {
                // find the class in formGroups that matches the formType from the selected option in the dialog
                if (group.class === formType) { 
                    formData = (group.forms).find(element => element.name === actualForm);
                    await actor.setFlag("world", "ws_formData", formData);
                }
            }

            if (heightenedLevel > maxLevel) { // if heightened level exceeds max level of spell, set it to work at max level
                heightenedLevel = maxLevel;
            };
            
            // add the scaling attributes of our selected form to our token for reference
            // if the spell is being cast at less than max level, but not at a level for which there is a specific entry,
            // find the next lowest level and cast it at that level
            for (let i = 0; i <= heightenedLevel; i++) {
                if (!levelAttributes) {
                    scalingAttributes[formType].forEach(element => {
                        if ((element.level + i) === heightenedLevel) {
                            levelAttributes = element;
                            actor.setFlag("world", "ws_levelAttributes", levelAttributes)
                            return;
                        }
                    })

                }
            }
            
            // if there are any form-specific skills, set those first
            if (formData.skills) {
                let formSkills = Object.keys(formData.skills)
                for (let i = 0; i < formSkills.length; i++) {
                    let modSkill = (Object.values(actor.data.data.skills)).find(element => element.name === formSkills[i])
                    let modValue;
                    if (formData.skills[formSkills[i]] !== modSkill.value) {
                        modValue = formData.skills[formSkills[i]] - modSkill.value
                    }
                    await actor.addCustomModifier(modSkill.name, "WSForm Value", modValue, "untyped");
                }
            }

            await featCheck(formData, formType);
            await applyResistances(formData)

            // if Form Athletics/Acrobatics bonus is greater than base Athletics/Acrobatics, add
            // Form Bonus to Athletics/Acrobatics value

            await skillBonus(levelAttributes.skills, actor.data.data.skills, formData.name);

            // if Form AC bonus is greater than base AC, add Form Bonus to AC value
            formValue = levelAttributes.ac + actor.data.data.details.level.value;
            origValue = actor.data.data.attributes.ac.value;
            if (formValue > origValue) {
                const formACBonus = (formValue - origValue);
                await actor.addCustomModifier("ac", "WSForm Bonus AC", formACBonus, "untyped");
            }

            // if Form Attack Mod is less than Unarmed Attack mod of the actor, add a +2 to Unarmed
            // Attack mod and let the form attacks use that instead
            formValue = levelAttributes.mod
            if ((actor.data.data.actions).find(action =>  action.name.includes("Handwraps of Mighty Blows") )) {
                origValue = (actor.data.data.actions).find(action => action.name.includes("Handwraps of Mighty Blows")).totalModifier
            } else {
                origValue = ((actor.data.data.actions).find(action => action.name === "Fist")).totalModifier
            }
            if (formValue < (origValue + 2)) {
                await actor.addCustomModifier("attack", "WSForm Bonus", 2, "status");
                levelAttributes.ownMod = (origValue + 2);
                await actor.setFlag("world", "ws_levelAttributes", levelAttributes)
            }

            // rememeber original senses for reset
            origSenses = JSON.parse(JSON.stringify(actor.data.data.traits.senses));
            await actor.setFlag("world", "ws_origSenses", origSenses);
            await setSenses();

            // remember original speed for reset
            origSpeeds = JSON.parse(JSON.stringify(actor.data.data.attributes.speed));
            await actor.setFlag("world", "ws_origSpeeds", origSpeeds);
            await changeSpeeds();

            // add temp HP, if Form Temp HP value is greater than already extant temp HP value
            if (!tempHP || (tempHP < levelAttributes.temphp)) {
                await actor.setFlag("world", "ws_tempHPChanged", tempHP)
                let newTempHP = levelAttributes.temphp
                await actor.update({ "data.attributes.hp.temp": newTempHP });
            };

            // Change image. Make sure your images are labeled with the form name (w/ correct capitalization)
            // at the end of your token name. Comment out the next three if you don't want the image to change
            let origImg = token.data.img;
            await actor.setFlag("world", "ws_origImg", origImg)
            let extensionIndex = (origImg.lastIndexOf('.') - origImg.length)
            let img = origImg.slice(0, extensionIndex) + (formData.name) + origImg.slice(extensionIndex);
            await token.update({ img });
            await actor.update({ "token.img" : img})

            // Change size
            if (formData.size) {
                await setSize(formData.size);
            } else {
                await setSize(levelAttributes.size);
            }

        } else {
            ui.notifications.error("Please return to normal form before transforming again."); 
            return;
        }
}

// --------------------------------------------------------------------------
// INIT
// --------------------------------------------------------------------------

if (actor.data.type !== "character") {
    ui.notifications.error("Please select a player character token."); 
    return; 
}

if (isSpellShaped) {
    ui.notifications.error("Please use the Spell Shape macro"); 
    return;
}

// Populate the featNames array with the name of the required feat for each formGroup e.g "Insect Shape" or "Dragon Shape".
let featNames = [];
formGroups.forEach(group => featNames.push(group.group)) 

// From all the actor's feats, find the ones that match the names of the Wild Shape feats and put them in the wsFeats array - this will determine what forms they have access to in the dropdown.
let wsFeats = [];
const allFeats = (actor.data.items).filter(item => item.type === "feat") 
for (let i=0; i<allFeats.length; i++) {
    let findFeat = featNames.filter(name => name.includes(allFeats[i].name))
    wsFeats = wsFeats.concat(findFeat);
}

// Populate dropdown based on what Wild Shape feats the actor has, and divide them by group
content += `<div style="padding: 0 10px"><label for="forms">Choose your form</label>
<select name="forms" id="forms">`
for (let formGroup of formGroups) {
    if (wsFeats.includes(formGroup.group)) {
        content += `<optgroup label="${formGroup.group}">`
        formGroup.forms.forEach(form => {
            if ( !form.extraFeat || wsFeats.includes(form.extraFeat) ) {
                content += `<option value="${form.name}" class="${formGroup.class}">${form.name}</option>`
            }
        })
        content += `</optgroup>`
    };
}
content += `</select>`

content += `<div style="padding: 5px 0"><label for="level">What level are you casting at?</label>
<select name="level" id="level">
<option value="Auto" selected>Auto</option>`
for (let i = 1; i <= heightenedLevel; i++){
    content += `<option value=${i}>${i}</option>`
}
content += `</select></div></div>`

// Generate dialog

let d = new Dialog({
    title: "Wild Shape",
    content: content,
    buttons: {
      morph: {
        icon: "<i class='fas fa-magic'></i>",
        label: "Transform!",
        callback: (html) => transform(html),
      },
      revert: {
          icon: "<i class='fas fa-undo'></i>",
          label: "Revert",
          callback: () => reset(),
      },
    },
})
runDialog(d, null, 300);