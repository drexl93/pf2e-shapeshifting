// ------------------------------------------------------------------
// DECLARE VARIABLES
//

const tok = canvas.tokens.controlled[0].actor;
let bonus;

// Dialog Variables
let content = "";

let primeDice; // used to store information for primary damage roll
let wsAttack; // used to store information for the attack roll
let attackName; // used to check if attack is agile; to link primary damage rolls with secondary damage rolls; to flavour attack/damage rolls
let plusDamageData = []; // array used to store all of the secondary damage rolls and their respective types
let selectedStrike;
let mod;
let formData = tok.getFlag("world", "ws_formData");
if (!formData) {
    formData = tok.getFlag("world", "ss_formData");
}
let levelAttributes = tok.getFlag("world", "ws_levelAttributes")
if (!levelAttributes) {
    levelAttributes = tok.getFlag("world", "ss_levelAttributes");
}


// -------------------------------------------------------------------
// DECLARE FUNCTIONS
//

async function roll(){
    await wsAttack.toMessage({ flavor : `${attackName} Attack`});

    // if the level of the spell indicates the damage dice should be doubled, set up the dice to do so
    if (levelAttributes.double) {
        primeDice = `${selectedStrike.dnum*2}d${selectedStrike.dsize}`
    } else {
        primeDice = `${selectedStrike.dnum}d${selectedStrike.dsize}`;
    };

    // if the attack has additional damage dice (like the snake's poison bite) set up those dice. Can support multiple additional damage dice
    if (formData.plusattacks) {
        for (let element of formData.plusattacks) {
            if (element.name === attackName) { // if the name of the additional damage attack corresponds to the attack being rolled, add its info to the additional damage array
                let plusDamageDice;
                if (levelAttributes.double) { // double if indicated
                    plusDamageDice = `${element.dnum*2}d${element.dsize}`
                } else {
                    plusDamageDice = `${element.dnum}d${element.dsize}`
                }
                plusDamageData.push({
                    dice: plusDamageDice, 
                    type: element.type,
                    bonus: element.bonus // in case the additional damage has a flat bonus to it
                })
            }
        }
    }

    let wsDamage;
    // If there is a form specific bonus to damage (as in Monstrosity Form), use that. Otherwise, use the standard damage bonus from level scaling
    if ((selectedStrike.bonus) || (selectedStrike.bonus === 0)) { // Second statement account for attacks that have an attack roll but no damage (the Spider's Web Attack)
        wsDamage = new Roll(primeDice + "+ @bonus", {bonus: selectedStrike.bonus});
    } else {
        wsDamage = new Roll(primeDice + "+ @bonus", {bonus: levelAttributes.damage});
    }
    wsDamage.toMessage({ flavor : `${attackName} Damage: ${selectedStrike.type}` });

    // If there is any additional damage to be applied to this attack, roll each of the additional damage dice, applying static bonuses to them if necessary.
    if (plusDamageData.length !== 0) {
        plusDamageData.forEach(plusDamage => {
            let wsDamagePlus;
            if (plusDamage.bonus) {
                wsDamagePlus = new Roll(plusDamage.dice + "+ @bonus", {bonus: plusDamage.bonus});
            } else {
                wsDamagePlus = new Roll(plusDamage.dice);
            }
            wsDamagePlus.toMessage({ flavor : `${attackName} Damage: ${plusDamage.type}` });
        })
                
    };
}

// --------------------------------------------------------------------------
// CODE
//
// if no formData is loaded on the token, they aren't transformed
if (!formData) {
    ui.notifications.error("You are not currently transformed."); 
    return;
};

if (!(formData.attacks.length > 0)) {
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
content += `<div><label for="attack">Choose your attack</label>
<select name="attack" id="attack">`
for (let i=0; i<formData.attacks.length; i++) {
    content += `<option value="${i}">${formData.attacks[i].name}</option> `
};

content += `</select></div>
<div>What attack is this?
</div>`

new Dialog({
    title: "Multiple Attack Penalty",
    content: content,
    buttons: {
        First: {
            icon: "<i class='fas fa-caret-square-right'></i>",
            label: "First",
            callback: (html) => { 
                // selectedStrike is the attack picked in the dropdown menu, matched to its details in the embedded formData array
                selectedStrike = formData.attacks[(html.find("#attack")[0].value)]; 
                attackName = selectedStrike.name;
                wsAttack = new Roll("1d20 + @mod", {mod: mod});
                roll();
            },
        },
        Second: {
            icon: "<i class='far fa-caret-square-right'></i>",
            label: "Second",
            callback: (html) => {
                selectedStrike = formData.attacks[(html.find("#attack")[0].value)]; 
                attackName = selectedStrike.name;
                let isAgile = (attackName.toLowerCase()).search("agile")
                if (isAgile !== -1) {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -4});
                } else {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -5});
                }
                roll();
            },
        },
        Third: {
            icon: "<i class='fas fa-caret-right'></i>",
            label: "Third+",
            callback: (html) => {
                selectedStrike = formData.attacks[(html.find("#attack")[0].value)];
                attackName = selectedStrike.name;
                let isAgile = (attackName.toLowerCase()).search("agile")
                if (isAgile !== -1) {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -8});
                } else {
                    wsAttack = new Roll("1d20 + @mod + @pen", {mod: mod, pen: -10});
                }
                roll();
            }
        }
    },
}).render(true);