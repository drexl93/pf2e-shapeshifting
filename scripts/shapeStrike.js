// ------------------------------------------------------------------
// DECLARE VARIABLES
//

let bonus;

// Dialog Variables
let content = "";

let primeDice; // used to store information for primary damage roll
let wsAttack; // used to store information for the attack roll
let selectedStrike; // used to check if attack is agile; to link primary damage rolls with secondary damage rolls; to flavour attack/damage rolls
let plusDamageData = []; // array used to store all of the secondary damage rolls and their respective types
let mod;
let formData = actor.getFlag("world", "ws_formData");
if (!formData) {
    formData = actor.getFlag("world", "ss_formData");
}
let levelAttributes = actor.getFlag("world", "ws_levelAttributes")
if (!levelAttributes) {
    levelAttributes = actor.getFlag("world", "ss_levelAttributes");
}


// -------------------------------------------------------------------
// DECLARE FUNCTIONS
//

async function roll(){
    let attack = formData.attacks[selectedStrike]
    let flavor = `<div>${selectedStrike} Attack</div>`
    if (attack.addEffect) {
        flavor += `<div style="line-height: normal; padding-bottom: 5px"><span style="font-weight: bold; line-height: 5px">Additional Effect: </span><span>${attack.addEffect}</div>`
    }
    if (attack.traits) {
        flavor += `<div class="tags">`
        for (let trait of attack.traits) {
            flavor += `<span class="tag tag_secondary">${trait}</span>`
        }
        flavor += `</div>`
    }

    let messageData = {
        user: game.user._id,
        speaker: {
            alias: actor.name + ` (${formData.name})`
        },
        flavor,
    }
    await wsAttack.toMessage(messageData);

    // if the level of the spell indicates the damage dice should be doubled, set up the dice to do so
    if (levelAttributes.double) {
        primeDice = `${attack.dnum*2}d${attack.dsize}`
    } else {
        primeDice = `${attack.dnum}d${attack.dsize}`;
    };

    // if the attack has additional damage dice (like the snake's poison bite) set up those dice. Can support multiple additional damage dice
    if (formData.plusattacks?.[selectedStrike]) {
        let plusAttack = formData.plusattacks[selectedStrike]
        let plusAttackDice;
        if (levelAttributes.double) { // double if indicated
            plusAttackDice = `${plusAttack.dnum*2}d${plusAttack.dsize}`
        } else {
            plusAttackDice = `${plusAttack.dnum}d${plusAttack.dsize}`
        }
        plusDamageData.push({
            dice: plusAttackDice, 
            type: plusAttack.type,
            bonus: plusAttack.bonus // in case the additional damage has a flat bonus to it
        })
    }

    let wsDamage;
    if (attack.type !== "None") { // Some attacks (like the Spider's Web attack, do no damage)
        // If there is a form specific bonus to damage (as in Monstrosity Form), use that. Otherwise, use the standard damage bonus from level scaling
        if (attack.bonus) { 
            wsDamage = new Roll(primeDice + "+ @bonus", {bonus: attack.bonus});
        } else {
            wsDamage = new Roll(primeDice + "+ @bonus", {bonus: levelAttributes.damage});
        }
        messageData = {
            user: game.user._id,
            speaker: {
                alias: actor.name + ` (${formData.name})`
            },
            flavor: `${selectedStrike} Damage: ${attack.type}`
        }
        wsDamage.toMessage(messageData);
    }

    // If there is any additional damage to be applied to this attack, roll each of the additional damage dice, applying static bonuses to them if necessary.
    if (plusDamageData.length !== 0) {
        plusDamageData.forEach(plusDamage => {
            let wsDamagePlus;
            if (plusDamage.bonus) {
                wsDamagePlus = new Roll(plusDamage.dice + "+ @bonus", {bonus: plusDamage.bonus});
            } else {
                wsDamagePlus = new Roll(plusDamage.dice);
            }
            messageData = {
                user: game.user._id,
                speaker: {
                    alias: actor.name + ` (${formData.name})`
                },
                flavor: `${selectedStrike} Damage: ${plusDamage.type}`
            }
            wsDamagePlus.toMessage(messageData);
        })
                
    };
}

// --------------------------------------------------------------------------
// CODE
//
// if no formData is loaded on the actor, they aren't transformed
if (!formData) {
    ui.notifications.error("You are not currently transformed."); 
    return;
};

// If there are no attack details for the form (as in Pest Form), it cannot attack
if (!formData.attacks) {
    ui.notifications.error("This form cannot attack"); 
    return;
}

// if there is an ownMod entry, use that as the attack mod instead of the one given by level 
if (levelAttributes.ownMod) {
    mod = levelAttributes.ownMod;
} else {
    mod = levelAttributes.mod;
}

// Populate dropdown with attacks drawn from formData
content += `<div style="text-align: center"><label for="attack">Choose your attack: </label>
<div style="display: inline-block; padding: 0 8px"><select name="attack" id="attack">`
let formAttacks = Object.keys(formData.attacks)
for (let i=0; i<formAttacks.length; i++) {
    content += `<option value="${formAttacks[i]}">${formAttacks[i]}`
    if (formData.attacks[formAttacks[i]].traits) {
        let traitString = formData.attacks[formAttacks[i]].traits.toString();
        let spacedTraitString = traitString.replace(/,/g, ", ")
        content += ` (${spacedTraitString})</option>`
    }
};

content += `</select></div></div>
<hr>
<div style="padding-bottom: 5px; text-align: center">What attack is this?
</div>`

let d = new Dialog({
    title: "Shape Strike",
    content: content,
    buttons: {
        First: {
            icon: "<i class='fas fa-caret-square-right'></i>",
            label: "First",
            callback: (html) => { 
                // selectedStrike is the attack picked in the dropdown menu, matched to its details in the embedded formData array
                selectedStrike = html.find("#attack")[0].value; 
                wsAttack = new Roll("1d20 + @mod", {mod: mod});
                roll();
                this.execute()
            },
        },
        Second: {
            icon: "<i class='far fa-caret-square-right'></i>",
            label: "Second",
            callback: (html) => {
                selectedStrike = html.find("#attack")[0].value; 
                if (attack.traits?.includes("Agile")) {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -4});
                } else {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -5});
                }
                roll();
                this.execute()
            },
        },
        Third: {
            icon: "<i class='fas fa-caret-right'></i>",
            label: "Third+",
            callback: (html) => {
                selectedStrike = html.find("#attack")[0].value; 
                if (attack.traits?.includes("Agile")) {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -8});
                } else {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -10});
                }
                roll();
                this.execute()
            }
        }
    },
}).render(true);