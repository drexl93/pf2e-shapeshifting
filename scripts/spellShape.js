// ----------------------------------------------------------------
// FORM STATS. ADJUST THESE FOR DIFFERENT SPELLS
//

let formGroups = [ // contains Attack info for the forms
    {
        group: "Pest Form", // Doubles as the Feat Name and the Heading under which the form options are displayed in the selection menu
        class: "pestForm", // Used to link to the correct Scaling Attributes group
        forms: [
            {
                name: "Pest",
                attacks: [],
                weaknesses: {piercing: 5, bludgeoning: 5, slashing: 5},
                speed: {value: 10, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision",label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
                skills: {athletics: -4},
            }
        ]
    },
    {
        group: "Animal Form", // Doubles as the Feat Name and the Heading under which the form options are displayed in the selection menu
        class: "wildShape", // Used to link to the correct Scaling Attributes group
        forms: [
            {
                name: "Ape", 
                attacks: [{name: "Fist", dsize: 6, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 30, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "20", exceptions: ""}]}, 
                senses: [{type: "lowLightVision",label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            }, 
            {
                name: "Bear", 
                attacks: [{name: "Jaws", dsize: 8, dnum: 2, type: "Piercing"},{name: "Claw (agile)", dsize: 8, dnum: 1, type: "Slashing"}],
                speed: {value: 30, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            }, 
            {
                name: "Bull", 
                attacks: [{name: "Horn", dsize: 8, dnum: 2, type: "Piercing"}], 
                speed: {value: 30, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Canine", 
                attacks: [{name: "Jaws", dsize: 8, dnum: 2, type: "Piercing"}],
                speed: {value: 40, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Cat", 
                attacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 1, type: "Slashing"}], 
                speed: {value: 40, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Deer", 
                attacks: [{name: "Antler", dsize: 6, dnum: 2, type: "Piercing"}], 
                speed: {value: 50, special: "", otherSpeeds: []}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Frog", 
                attacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Bludgeoning"}, {name: "Tongue", dsize: 4, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 25, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "25", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Shark", 
                attacks: [{name: "Jaws", dsize: 8, dnum: 2, type: "Piercing"}], 
                speed: {value: 0, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "35", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            },
            {
                name: "Snake", 
                attacks: [{name: "Fangs", dsize: 4, dnum: 2, type: "Piercing"}], 
                plusattacks: [{name: "Fangs", dsize: 6, dnum: 1, type: "Poison"}], // plusattacks add additional damage to the same-name primary attack. Can support multiple different instances of additional damage.
                speed: {value: 20, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "20", exceptions: ""}, {type: "swim", label: "Swim", value: "20", exceptions: ""}]}, 
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}]
            } 
        ]
    },
    
    {
        group: "Insect Form",
        class: "insectShape",
        forms: [
            {
                name: "Ant", 
                attacks: [{name: "Mandibles", dsize: 6, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 30, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "30", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
            {
                name: "Beetle",
                attacks: [{name: "Mandibles", dsize: 10, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Centipede", 
                attacks: [{name: "Mandibles", dsize: 8, dnum: 1, type: "Piercing plus 1d4 persistent Poison"}], 
                speed: {value: 25, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "25", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Mantis", 
                attacks: [{name: "Foreleg", dsize: 8, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Scorpion", 
                attacks: [{name: "Stinger", dsize: 8, dnum: 1, type: "Piercing plus 1d4 persistent Poison"}, {name: "Pincer (agile)", dsize: 6, dnum: 1, type: "Bludgeoning"}], 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "tremorsense", label: "Imprecise Tremorsense", value: "60", exceptions: ""}],
            },
            {
                name: "Spider", 
                attacks: [{name: "Fangs", dsize: 6, dnum: 1, type: "Piercing plus 1d4 persistent Poison"}, {name: "Web", dsize: 1, dnum: 0, type: "None"}], 
                speed: {value: 25, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "25", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
        ]
    }, 

    { 
        group: "Aerial Form",
        class: "soaringShape",
        forms: [
            {
                name: "Bat", 
                attacks: [{name: "Fangs", dsize: 8, dnum: 2, type: "Piercing"}, {name: "Wing (agile)", dsize: 6, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 20, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "30", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "echolocation", label: "Precise Echolocation", value: "40", exceptions: ""}],
            }, 
            {
                name: "Bird", 
                attacks: [{name: "Beak", dsize: 8, dnum: 2, type: "Piercing"}, {name: "Talon (agile)", dsize: 10, dnum: 1, type: "Slashing"}], 
                speed: {value: 10, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "50", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Pterosaur", 
                attacks: [{name: "Beak", dsize: 6, dnum: 3, type: "Piercing"}], 
                extraFeat: "Ferocious Shape", 
                speed: {value: 10, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "40", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Wasp", 
                attacks: [{name: "Stinger", dsize: 8, dnum: 1, type: "Piercing plus 1d6 persistent Poison"}], 
                extraFeat: "Insect Shape", 
                speed: {value: 20, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "40", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
        ]
    },

    { 
        group: "Dinosaur Form",
        class: "ferociousShape",
        forms: [
            {
                name: "Ankylosaurus", 
                attacks: [{name: "Tail", dsize: 6, dnum: 2, type: "Bludgeoning"}, {name: "Foot", dsize: 6, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            }, 
            {
                name: "Brontosaurus", 
                attacks: [{name: "Tail", dsize: 6, dnum: 2, type: "Bludgeoning"}, {name: "Foot", dsize: 8, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 25, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            }, 
            {
                name: "Deinonychus", 
                attacks: [{name: "Talon (agile)", dsize: 4, dnum: 2, type: "Piercing plus 1 persistent Bleed"}, {name: "Jaws", dsize: 10, dnum: 1, type: "Piercing"}], 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Stegosaurus", 
                attacks: [{name: "Tail", dsize: 8, dnum: 2, type: "Piercing"}], 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Triceratops", 
                attacks: [{name: "Horn", dsize: 8, dnum: 2, type: "Piercing plus 1d6 persistent Bleed on a Crit"}, {name: "Foot", dsize: 6, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
            {
                name: "Tyrannosaurus", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 1, type: "Piercing"}, {name: "Tail", dsize: 10, dnum: 1, type: "Bludgeoning"}], 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "30", exceptions: ""}],
            },
        ]
    },

    { 
        group: "Elemental Form",
        class: "elementalShape",
        forms: [
            {
                name: "Air", 
                attacks: [{name: "Gust", dsize: 4, dnum: 1, type: "Bludgeoning"}], 
                speed: {value: 0, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "80", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Earth", 
                attacks: [{name: "Fist", dsize: 10, dnum: 2, type: "Bludgeoning"}], 
                speed: {value: 20, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Fire", 
                attacks: [{name: "Tendril", dsize: 8, dnum: 1, type: "Fire plus 1d4 persistent Fire"}], 
                resistances: {fire: 10}, 
                weaknesses: {cold: 5, water: 5}, 
                speed: {value: 50, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Water", 
                attacks: [{name: "Wave", dsize: 12, dnum: 1, type: "Bludgeoning"}], 
                resistances: {fire: 5}, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "60", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
        ]
    },

    { 
        group: "Plant Form",
        class: "plantShape",
        forms: [
            {
                name: "Arboreal", 
                attacks: [{name: "Branch", dsize: 10, dnum: 2, type: "Bludgeoning"}, {name: "Foot", dsize: 8, dnum: 2, type: "Bludgeoning"}], 
                resistances: {poison: 10}, 
                speed: {value: 30, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Flytrap", 
                attacks: [{name: "Leaf", dsize: 8, dnum: 2, type: "Piercing"}], 
                resistances: {poison: 10, acid: 10}, 
                speed: {value: 15, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            }, 
            {
                name: "Shambler", 
                attacks: [{name: "Vine", dsize: 8, dnum: 2, type: "Slashing"}], 
                resistances: {poison: 10, electricity: 10}, 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "20", exceptions: ""}]},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
            },
        ]
    },

    { 
        group: "Dragon Form",
        class: "dragonShape",
        forms: [
            {
                name: "Black", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Horns", dsize: 8, dnum: 3, type: "Piercing"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Acid"}], 
                resistances: {acid: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "60", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "Blue", 
                attacks: [{name: "Jaws", dsize: 10, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Horns", dsize: 8, dnum: 3, type: "Piercing"}], 
                plusattacks: [{name: "Jaws", dsize: 12, dnum: 1, type: "Electricity"}], 
                resistances: {electricity: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "Brass", 
                attacks: [{name: "Jaws", dsize: 8, dnum: 3, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Spikes", dsize: 8, dnum: 3, type: "Piercing"}], 
                plusattacks: [{name: "Jaws", dsize: 4, dnum: 2, type: "Fire"}], 
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "burrow", label: "Burrow", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Bronze", 
                attacks: [{name: "Jaws", dsize: 10, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Wing", dsize: 8, dnum: 3, type: "Slashing"}], 
                plusattacks: [{name: "Jaws", dsize: 12, dnum: 1, type: "Electricity"}], 
                resistances: {electricity: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Copper", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Wing", dsize: 8, dnum: 3, type: "Bludgeoning"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Acid"}], 
                resistances: {acid: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "climb", label: "Climb", value: "25", exceptions: "on stone only"}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Gold", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 6, dnum: 4, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Horns", dsize: 8, dnum: 3, type: "Piercing"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Fire"}], 
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Green", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Horns", dsize: 8, dnum: 3, type: "Piercing"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Poison"}], 
                resistances: {poison: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "swim", label: "Swim", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Red", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 6, dnum: 4, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}, {name: "Wing", dsize: 8, dnum: 3, type: "Bludgeoning"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Fire"}], 
                resistances: {fire: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
            {
                name: "Silver", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Cold"}], 
                resistances: {cold: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            }, 
            {
                name: "White", 
                attacks: [{name: "Jaws", dsize: 6, dnum: 3, type: "Piercing"}, {name: "Claw (agile)", dsize: 10, dnum: 3, type: "Slashing"}, {name: "Tail", dsize: 10, dnum: 3, type: "Bludgeoning"}], 
                plusattacks: [{name: "Jaws", dsize: 6, dnum: 2, type: "Cold"}], 
                resistances: {cold: 10}, 
                speed: {value: 40, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "100", exceptions: ""}, {type: "climb", label: "Climb", value: "25", exceptions: "on ice only"}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}, {type: "scent", label: "Imprecise Scent", value: "60", exceptions: ""}],
            },
        ]
    },

    {
        group: "Monstrosity Form",
        class: "monstrosityShape",
        forms: [ 
            {
                name: "Phoenix", 
                attacks: [{name: "Beak", dsize: 6, dnum: 2, type: "Piercing plus 2d4 persistent Fire", bonus: 12}, {name: "Talon (agile)", dsize: 8, dnum: 2, type: "Slashing", bonus: 12}], 
                plusattacks: [{name: "Beak", dsize: 4, dnum: 2, type: "Fire"}], 
                extraFeat: "Soaring Shape", 
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "90", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Purple Worm", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing", bonus: 20}, {name: "Stinger (agile)", dsize: 8, dnum: 2, type: "Piercing plus 2d6 persistent Poison", bonus: 15}, {name: "Body", dsize: 8, dnum: 2, type: "Bludgeoning", bonus: 20}], 
                speed: {value: 40, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}, {type: "swim", label: "Swim", value: "20", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Sea Serpent", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 2, type: "Piercing", bonus: 20}, {name: "Tail", dsize: 8, dnum: 2, type: "Bludgeoning", bonus: 20}], 
                speed: {value: 20, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "90", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
        ]
    },

    {
        group: "Nature Incarnate",
        class: "trueShapeshifter",
        forms: [ 
            {
                name: "Green Man", 
                attacks: [{name: "Vines", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 12}, {name: "Thorns", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}], 
                extraFeat: "Plant Shape", 
                speed: {value: 40, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "40", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
                size: 1
            },
            {
                name: "Kaiju", 
                attacks: [{name: "Jaws", dsize: 10, dnum: 6, type: "Piercing", bonus: 10}, {name: "Claws (agile)", dsize: 8, dnum: 6, type: "Slashing", bonus: 8}, {name: "Foot (agile)", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 10}], 
                resistances: {piercing: 5, bludgeoning: 5, slashing: 5}, 
                speed: {value: 50, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
        ]
    },

    {
        group: "Avatar",
        class: "avatar",
        forms: [ 
            {
                name: "Abadar", 
                attacks: [{name: "Crossbow", dsize: 10, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Achaekek", 
                attacks: [{name: "Mantis Claw", dsize: 8, dnum: 6, type: "Slashing", bonus: 6}, {name: "Spine Volley", dsize: 6, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Alseta", 
                attacks: [{name: "Dagger", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Portal Toss", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 3}],  
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Arazni", 
                attacks: [{name: "Rapier", dsize: 8, dnum: 6, type: "Piercing", bonus: 6}, {name: "Call Blood", dsize: 6, dnum: 6, type: "Persistent Bleed"}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Asmodeus", 
                attacks: [{name: "Mace", dsize: 10, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Hell Fire", dsize: 6, dnum: 6, type: "Fire", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Besmara", 
                attacks: [{name: "Rapier", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Ship's Cannon", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 3}],  
                speed: {value: 40, special: "", otherSpeeds: [{type: "swim", label: "Swim", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Brigh", 
                attacks: [{name: "Light Hammer", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Bolt of Molten Bronze", dsize: 8, dnum: 6, type: "Fire", bonus: 3}],  
                speed: {value: 60, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Calistria", 
                attacks: [{name: "Whip", dsize: 4, dnum: 6, type: "Slashing", bonus: 6}, {name: "Savoured Sting", dsize: 6, dnum: 6, type: "Poison", bonus: 3}],  
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Casandalee", 
                attacks: [{name: "Polytool", dsize: 6, dnum: 6, type: "Slashing", bonus: 6}, {name: "Logic Blast", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Cayden Cailean", 
                attacks: [{name: "Rapier", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Ale Splash", dsize: 6, dnum: 6, type: "Poison", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Chaldira", 
                attacks: [{name: "Shortsword", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Fistful of Buttons", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Desna", 
                attacks: [{name: "Starknife", dsize: 4, dnum: 6, type: "Piercing", bonus: 6}, {name: "Moonbeam", dsize: 6, dnum: 6, type: "Fire", bonus: 3}],  
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Erastil", 
                attacks: [{name: "Longbow", dsize: 8, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Ghlaunder", 
                attacks: [{name: "Proboscis", dsize: 6, dnum: 6, type: "Piercing plus 3d6 persistent Bleed", bonus: 6}, {name: "Spine Volley", dsize: 6, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Gorum", 
                attacks: [{name: "Greatsword", dsize: 12, dnum: 6, type: "Slashing", bonus: 6}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Gozreh", 
                attacks: [{name: "Waves", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Wind", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 3}],  
                speed: {value: 0, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}, {type: "swim", label: "Swim", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Grandmother Spider", 
                attacks: [{name: "Leg", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Venom Web", dsize: 6, dnum: 6, type: "Poison", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Groetus", 
                attacks: [{name: "War Flail", dsize: 10, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Dreadful Thought", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Gruhastha", 
                attacks: [{name: "Fist", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Arrow of Enlightenment", dsize: 6, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Hei Feng", 
                attacks: [{name: "Drunken Sword", dsize: 6, dnum: 4, type: "Slashing plus 1d6 Electricity splash", bonus: 6}, {name: "Storm Surge", dsize: 6, dnum: 4, type: "Bludgeoning plus 1d6 Electricity splash", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Iomedae", 
                attacks: [{name: "Longsword", dsize: 8, dnum: 6, type: "Slashing", bonus: 6}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Irori", 
                attacks: [{name: "Unfettered Strike", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Wind Strike", dsize: 4, dnum: 6, type: "Bludgeoning", bonus: 6}],  
                speed: {value: 80, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            }, 
            {
                name: "Kazutal", 
                attacks: [{name: "Machete", dsize: 6, dnum: 6, type: "Slashing", bonus: 6}, {name: "Jaguar Pounce", dsize: 6, dnum: 5, type: "Piercing plus 1d6 persistent Bleed", bonus: 3}],  
                speed: {value: 60, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Kurgess", 
                attacks: [{name: "Lashing Chain", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 6}, {name: "Javelin", dsize: 6, dnum: 6, type: "Piercing", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}, {type: "swim", label: "Swim", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Lamashtu", 
                attacks: [{name: "Falchion", dsize: 10, dnum: 6, type: "Slashing", bonus: 6}, {name: "Waters of Lamashtu", dsize: 6, dnum: 6, type: "Poison", bonus: 3}],  
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Milani", 
                attacks: [{name: "Morningstar", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 6}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Nethys", 
                attacks: [{name: "Raw Magic", dsize: 6, dnum: 6, type: "Force"}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Nivi Rhombodazzle", 
                attacks: [{name: "Returning Light Hammer", dsize: 6, dnum: 6, type: "Bludgeoning", bonus: 6}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Nocticula", 
                attacks: [{name: "Tail Stinger", dsize: 6, dnum: 6, type: "Slashing", bonus: 6}, {name: "Magnanimous Smile", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Norgorber", 
                attacks: [{name: "Shortsword", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Blackfinger Toss", dsize: 6, dnum: 6, type: "Poison", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Pharasma", 
                attacks: [{name: "Dagger", dsize: 6, dnum: 6, type: "Slashing", bonus: 6}, {name: "Spiral Blast", dsize: 8, dnum: 6, type: "Positive", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Rovagug", 
                attacks: [{name: "Jaws", dsize: 12, dnum: 6, type: "Piercing", bonus: 6}, {name: "Leg", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 6}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Sarenrae", 
                attacks: [{name: "Scimitar", dsize: 6, dnum: 6, type: "Piercing", bonus: 6}, {name: "Everflame", dsize: 6, dnum: 6, type: "Fire", bonus: 3}],  
                speed: {value: 30, special: "", otherSpeeds: [{type: "fly", label: "Fly", value: "70", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Shelyn", 
                attacks: [{name: "Glaive", dsize: 8, dnum: 6, type: "Slashing", bonus: 6}, {name: "Melody of Inner Beauty", dsize: 6, dnum: 6, type: "Sonic", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Shizuru", 
                attacks: [{name: "Katana", dsize: 6, dnum: 6, type: "Slashing", bonus: 6}, {name: "Sunbolt Arrow", dsize: 6, dnum: 6, type: "Fire", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: [{type: "climb", label: "Climb", value: "50", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Sivanah", 
                attacks: [{name: "Bladed Scarf", dsize: 8, dnum: 6, type: "Slashing", bonus: 6}, {name: "Illusory Assault", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Torag", 
                attacks: [{name: "Warhammer", dsize: 8, dnum: 6, type: "Bludgeoning", bonus: 6}],  
                speed: {value: 50, special: "", otherSpeeds: [{type: "burrow", label: "Burrow", value: "30", exceptions: ""}]},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Tsukiyo", 
                attacks: [{name: "Longspear", dsize: 10, dnum: 6, type: "Piercing", bonus: 6}, {name: "Moonbeam", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Urgathoa", 
                attacks: [{name: "Scythe", dsize: 10, dnum: 6, type: "Slashing", bonus: 6}, {name: "Pallid Plague", dsize: 6, dnum: 6, type: "Negative", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
            {
                name: "Zon-Kuthon", 
                attacks: [{name: "Spiked Chain", dsize: 8, dnum: 6, type: "Slashing", bonus: 6}, {name: "Midnight Pain", dsize: 6, dnum: 6, type: "Mental", bonus: 3}],  
                speed: {value: 70, special: "", otherSpeeds: []},
                senses: [{type: "darkvision", label: "Darkvision", value: "", exceptions: ""}],
            },
        ]
    },

    {
        group: "Primal Herd",
        class: "primalHerd",
        forms: [ 
            {
                name: "Mammoth", 
                attacks: [{name: "Tusk", dsize: 8, dnum: 4, type: "Piercing", bonus: 19}, {name: "Trunk", dsize: 6, dnum: 4, type: "Bludgeoning", bonus: 16}, {name: "Foot (agile)", dsize: 6, dnum: 4, type: "Bludgeoning", bonus: 13}], 
                speed: {value: 40, special: "", otherSpeeds: []},
                senses: [{type: "lowLightVision", label: "Low-Light Vision", value: "", exceptions: ""}],
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

    wildShape:
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
    ],

    avatar:
    [// Avatar form
        {level: 10, mod: 33, ac: 25, temphp: 30, skills: {athletics: 35}, size: 3},
    ],

    primalHerd:
    [// Primal Herd form
        {level: 10, mod: 0, ac: 22, temphp: 20, skills: {athletics: 30}, size: 3},
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
//

// Dialog variables
let content = "";

// For token size adjustment
let width = 1;
let height = 1;

// For stats adjustments
let formValue = 0;
let origValue = 0;
let origSpeeds = {};
let origSenses = [];
let bypassTo = "";

if (!token) {
    ui.notifications.error("Please select a token"); 
    return; 
}
let tempHP = actor.data.data.attributes.hp.temp;
if (!tempHP) {
    tempHP = 0;
}
let formData = actor.getFlag("world", "ss_formData");
let isWildShaped = actor.getFlag("world", "ws_formData");
let levelAttributes;


// -------------------------------------------------------------------
// DECLARE FUNCTIONS
//--------------------------------------------------------------------

async function removeCustomMods() {
    let customMods = Object.keys(actor.data.data.customModifiers)
    for (let element of customMods) {
        for (let mod of actor.data.data.customModifiers[element]) {
            if (mod.name.includes("Spellform")) {
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
    let img = actor.getFlag("world", "ss_origImg");
    if (img) {
        await token.update({ img });
        await actor.update({ "token.img" : img })
    }

    // This resets the token size. If you use small-size tokens in your game, delete the '//'s 
    // preceding the next complete 'if' statement. This will ensure Small PCs revert to their 
    // correct size rather than becoming Medium.
    
    // if (actor.data.data.traits.size.value == "med"){
    await setSize(1);
    // } else if (actor.data.data.traits.size.value == "sm"){
    //    setSize(0.5);
    // };

    // remove all form attributes from token
    await actor.unsetFlag("world", "ss_formData")
    await actor.unsetFlag("world", "ss_levelAttributes")

    // Remove any resistances/weaknesses that were given by transformation
    let filterOut = actor.data.data.traits.dv.filter(element => 
        !element.label.includes("Spellform"))
    await actor.update({ "data.traits.dv" : filterOut });
    filterOut = actor.data.data.traits.dr.filter(element => 
        !element.label.includes("Spellform"))
    await actor.update({ "data.traits.dr" : filterOut });

    // reset Speeds and Senses to normal
    await resetSenses();
    await resetSpeeds();

    // if tempHP was changed, remove tempHP
    await resetTempHP();

    // remove any custom bonuses applied from the transformation
    await removeCustomMods(); 
};

// -------------------------------------------------------------------

async function resetTempHP() {
    let oldTempHP = await actor.getFlag("world", "ss_tempHPChanged")
    if (oldTempHP >= 0) {
        await actor.unsetFlag("world", "ss_tempHPChanged")
        await actor.update({ "data.attributes.hp.temp": oldTempHP });
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
                    label: `Spellform ${type}`, 
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
                    label: `Spellform ${type}`, 
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
    let revert = actor.getFlag("world", "ss_origSpeeds")
    await actor.update({ "data.attributes.speed" : revert})
    await actor.unsetFlag("world", "ss_origSpeeds")
}

// -------------------------------------------------------------------

async function resetSenses() {
    let revert = actor.getFlag("world", "ss_origSenses")
    await actor.update({ "data.traits.senses" : revert})
    await actor.unsetFlag("world", "ss_origSenses")
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
            await actor.addCustomModifier(skill, `Spellform ${skill} Bonus`, formBonus, "untyped")
        }
    }
}

// -------------------------------------------------------------------

// Change the token's speeds to the form's
async function changeSpeeds() {
    // if there are any changes to speed at this level of the spell, use those
    if (levelAttributes.speed) {
        actor.update({ "data.attributes.speed" : levelAttributes.speed })
    } else {  // otherwise use the form's base speeds
        actor.update({ "data.attributes.speed" : formData.speed })
    }
}

// Change the token's senses to the form's
async function setSenses() {
    // if there are any changes to senses at this level of the spell, use those
    if (levelAttributes.senses) {
        actor.update({ "data.traits.senses" : levelAttributes.senses })
    } else { // otherwise use the form's base senses
        actor.update({ "data.traits.senses" : formData.senses })
    }
}

// -------------------------------------------> Main Transform Function Part 1

async function chooseSpell(spellName, className) {
    let content2 = `<div style="text-align: center"><div style="padding: 2px"><label for="forms">Choose your form:</label>
    <select name="forms" id="forms">`
    for (let formGroup of formGroups) {
        if (formGroup.group === spellName) {
            formGroup.forms.forEach(form => {
                content2 += `<option value="${form.name}" class="${formGroup.class}">${form.name}</option>`
            })
        }
    }
    content2 += `</select></div>

    <div style="padding: 2px"><label for="level">What level are you casting at?</label>
    <select name="level" id="level">`
    for (let scalingArray in scalingAttributes) {
        if (scalingArray === className) {
            (scalingAttributes[scalingArray]).forEach(level => {
                content2 += `<option value="${level.level}">${level.level}</option>`
            })
        }
    }
    content2 += `</select></div>`
    content2 += `<div style="padding: 2px"><label for="imgchange" style="display: inline-block; vertical-align: middle; position:relative">
    Change token image?</label>
    <input type="checkbox" name="imgchange" id="imgchange" style="position: relative; vertical-align:middle"></div></div>`

    let d2 = new Dialog({
        title: "Choose Form",
        content: content2,
        buttons: {
            select: {
                icon: "<i class='fas fa-check'></i>",
                label: "Select",
                callback: async (html) => {
                    let actualForm = html.find("#forms")[0].value;
                    let castingLevel = parseInt(html.find("#level")[0].value); 
                    let imgChange = html.find("#imgchange")[0].checked;
                    chooseForm(actualForm, castingLevel, imgChange, className);
                }
            }
        }
    })
    d2.options.width = 300
    d2.position.width = 300
    d2.render(true);
}

// ----------------------------> Main Transform Function Part 2

async function chooseForm(actualForm, castingLevel, imgChange, className) {
    if (!formData) { // if actor isn't already transformed ->
        // add Form Attributes to token for reference
        for (let group of formGroups) {
            if (group.class === className) { // find the class in formGroups that matches the formType from the selected option in the dialog
                formData = (group.forms).find(element => element.name === actualForm)
                await actor.setFlag("world", "ss_formData", formData);
            }
        }
        
        // add the scaling attributes of our selected form to our token for reference
        levelAttributes = scalingAttributes[className].find(element => 
            element.level === castingLevel)
        await actor.setFlag("world", "ss_levelAttributes", levelAttributes)

        
        // if there are any form-specific skills, set those first
        if (formData.skills) {
            let formSkills = Object.keys(formData.skills)
            for (let i = 0; i < formSkills.length; i++) {
                let modSkill = (Object.values(actor.data.data.skills)).find(element => element.name === formSkills[i])
                let modValue;
                if (formData.skills[formSkills[i]] !== modSkill.value) {
                    modValue = formData.skills[formSkills[i]] - modSkill.value
                }
                await actor.addCustomModifier(modSkill.name, "Spellform Value", modValue, "untyped");
            }
        }

        await applyResistances(formData);

        await skillBonus(levelAttributes.skills, actor.data.data.skills, formData.name);

        // if Form AC bonus is greater than base AC, add Form Bonus to AC value
        formValue = levelAttributes.ac + actor.data.data.details.level.value;
        origValue = actor.data.data.attributes.ac.value;
        if (formValue > origValue) {
            const formACBonus = (formValue - origValue);
            await actor.addCustomModifier("ac", "Spellform Bonus AC", formACBonus, "untyped");
        }

        // remember original senses for reset
        origSenses = JSON.parse(JSON.stringify(actor.data.data.traits.senses));
        await actor.setFlag("world", "ss_origSenses", origSenses);
        await setSenses();

        // remember original speed for reset
        origSpeeds = JSON.parse(JSON.stringify(actor.data.data.attributes.speed));
        await actor.setFlag("world", "ss_origSpeeds", origSpeeds);
        await changeSpeeds();

        // add temp HP, if Form Temp HP value is greater than already extant temp HP value
        if (!tempHP || (tempHP < levelAttributes.temphp)) {
            await actor.setFlag("world", "ss_tempHPChanged", tempHP)
            let newTempHP = levelAttributes.temphp
            await actor.update({ "data.attributes.hp.temp": newTempHP });
        };

        // Change image. Make sure your images are labeled with the form name (w/ correct capitalization)
        // at the end of your token name.
        if (imgChange) {
            let origImg = token.data.img;
            await actor.setFlag("world", "ss_origImg", origImg)
            let img = origImg.slice(0, -4) + (formData.name) + ".png";
            await token.update({ img });
            await actor.update({ "token.img" : img})
        }

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

if (isWildShaped) {
    ui.notifications.error("Please use the Wild Shape macro"); 
    return;
}

// Populate dropdown with all Form Spells
content += `<div style="text-align: center; padding: 0 0 10px"><label for="spells">What spell are you casting?</label>
<div style="padding: 5px 0 0"><select name="spells" id="spells">`
for (let formGroup of formGroups) {
    content += `<option value="${formGroup.group}" class="${formGroup.class}">${formGroup.group}</option>`
}
content += `</select></div></div>`

let d = new Dialog({
    title: "Choose Spell",
    content: content,
    buttons: {
        spell: {
            icon: "<i class='fas fa-magic'></i>",
            label: "Next",
            callback: (html) => {
                if (formData) {
                    ui.notifications.error("Please return to normal form before transforming again."); 
                    return;
                }
                let spell = html.find("#spells")[0].value;
                let selected = html.find("#spells")[0].selectedIndex;
                let className = html.find("#spells")[0].options[selected].className;
                chooseSpell(spell, className);
            }
        },
        revert: {
            icon: "<i class='fas fa-undo'></i>",
            label: "Revert",
            callback: () => reset(),
        }
    }
})
d.options.width = 250
d.position.width = 250
d.render(true);