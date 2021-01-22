# Pathfinder 2E Shapeshifting Macros

## NOTE: I strongly recommend returning to your normal shape at the end of a game session, just in case a Pathfinder 2E Game System update occurs that might change the data structures the macros use.



These three macros are intended to simplify the lives of any Druids who need to Wild Shape, or any casters using the plethora of Form Spells available. They require The Furnace module to be enabled.

## Installation
Copy the following link into your Manifest URL bar in the Module Installation window of Foundry VTT: https://raw.githubusercontent.com/drexl93/pf2e-shapeshifting/master/module.json

## Wild Shape Macro
* Full support for all available forms accessible through Wild Shape
* Pairs with the attack macro to roll with the correct level-scaled attack and damage bonuses
* Token size automatically scaled; support for image switching in different forms (but can be disabled)
* Easy reversion back to base form with two clicks
* Level-scaled Temp HP and skill modifiers (Athletics/Acrobatics) are adjusted as well
* Available forms are gated by Feats - including crossovers (such as the Phoenix being a Monstrosity Form but only unlocked if you also have Soaring Form)
* Statistics such as Senses, Resistances, Weaknesses, and Speeds are loaded onto token for reference
* Passive Feat bonuses (such as Ferocious Shape's +1 status bonuses to forms providing an Athletics bonus) are supported
* Though technically not RAW, there is support to 'deheighten' Wild Shape

![Shapeshifting in Action](https://media.giphy.com/media/Rk97paAzUy9l0mrDFY/giphy.gif)

## Spell Shape Macro
* Full support for all available forms accessible through the Form Spells
* Very similar functionality to Wild Shape, without the Feat bonuses or restrictions
* Also pairs with the attack macro, and scales according to the selected spell level

## Shape Strike Macro
* Once transformed, offers a choice of the Form's attacks, using embedded data to roll correct level-scaled damage
* Correctly represents Agile attacks and additional damage dice
* Indicates but does not roll Persistent Damage, as Persistent Damage does not happen immediately
* Uses correct attack modifier, including Wild Shape rules for bonuses using your own modifier rather than the Form's.
* **Note**: does not take into account Conditions like Frightened or Sickened which temporarily reduce attack bonuses

---

### Known Issues
* The Fire Elemental's weakness to water shows up as Undefined (5), because Water weakness is not supported on the current PF2e sheet

### Token Image Change Feature
* If you would like to use the Token Image Change feature, make sure the token has the exact name of the form appended to the end of the name of your token.
* **Original images and Form images must be of the same file type** (e.g. both must be PNG, or both must be JPG, etc)
* For example, if your token is "Bob.png", to set up tokens for the Animal Form spell you would label them as "BobCat.png", "BobBull.png", etc. The full list of the forms and their names are at the start of the macro for reference.
* If you would like to disable the Token Image Change feature for Wild Shape, find the commented out section beginning with "// Change image" in the wildShape macro. Comment out just that section (until before "// Change size") by adding "//" before each of those lines.

---

## Rule Interpretations
As anyone who has played a Wild Shape druid knows, the rules text around transformation can be interpreted in different ways. Pending a clearer explanation from Paizo on the subjects below, the macro supports the following logic. I have provided citations where I could, but this *is* an interpretation. I have documented them here so you are aware of them and can account for them if the interpretation is different at your table.

### Wild Shape Unarmed Attack bonus
> "If your unarmed attack bonus is higher, you can use it instead."

Animal Form https://2e.aonprd.com/Spells.aspx?ID=10

> "When you choose to use your own attack modifier while polymorphed instead of the form's default attack modifier, you gain a +2 status bonus to your attack rolls."

Wild Shape https://2e.aonprd.com/Spells.aspx?ID=481

----> Your unarmed attack bonus MUST exceed the form's attack bonus before you can benefit from the +2 status bonus.  
----> Forms are unable to benefit from item bonuses, however it is unclear whether you factor in your item bonus from Handwraps of Mighty Blows when determining whether you have a higher unarmed attack bonus than your form's attack bonus. I have elected in this macro to take the more conservative route, not counting item bonuses when making the comparison. *However* I have included code in the macro that will allow you to use your Handwraps of Mighty Blows modifier if that is how you run it in your game. Search for "Handwraps" in the code and follow the instructions there.

### Wild Shape Damage and Striking Runes
> "If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties."

Polymorph Trait https://2e.aonprd.com/Traits.aspx?ID=127
> "A striking rune stores destructive magic in the weapon, increasing the weapon damage dice it deals..."

Striking Runes https://pf2.easytool.es/index.php?id=2918&name=striking

----> Striking runes are not circumstance or status bonuses, they directly increase the damage die of weapons they are etched on to. For this reason they will not modify the strikes provided by a form, which are essentially new "weapons" with their own damage dice that the form gives you access to.

### Temp HP
> "You can have temporary Hit Points from only one source at a time. If you gain temporary Hit Points when you already have some, choose whether to keep the amount you already have and their corresponding duration or to gain the new temporary Hit Points and their duration."

Temporary Hit Points https://pf2.easytool.es/index.php?id=5819&name=Temporary_Hit_Points

----> So if you had a lower amount of temp HP before transformation, it will be replaced by the form's temp HP, which will all disappear when you revert (when you accept temp HP, you accept their duration as well).  
----> If you gain a higher amount of temp HP *while transformed*, it will be reduced to 0 upon reversion so you will need to adjust it manually.

### Resistances
> "Whenever you’re polymorphed into **another** form using wild shape, you gain resistance 5 to fire." 

Emphasis mine, Elemental Shape (language identical in Plant Shape, Dragon Shape) https://2e.aonprd.com/Feats.aspx?ID=335

----> You do not gain those resistances while in a shape that that specific feat gave you access to. For example, you do not gain a resistance 5 to fire as an Earth or Air Elemental (Fire/Water Elementals are resistant to fire because it is specifically indicated in their stats). However you would gain fire resistance 5 while being an Ape, or a Bird, or a Dragon.

### Skills
> "If you take on a battle form with a polymorph spell, the special statistics can be adjusted only by circumstance bonuses, status bonuses, and penalties."  

Polymorph Trait https://2e.aonprd.com/Traits.aspx?ID=127
> "(Skill) modifier of +(x), unless your own modifier is higher."  

Rules text from Form spells e.g. https://2e.aonprd.com/Spells.aspx?ID=10

----> You cannot be affected by item bonuses, penalties, or the untyped Armour Check Penalty while transformed. A counterbalancing modifier named "WSForm Balancer" or "Spellform Balancer" is added to the appropriate skills to counterbalance any outstanding item bonuses/penalties or the ACP.

### Changelog v. 6.0.8:
* Modified a few rule interpretations and developed more extensive documentation on them (see above)
* Better commenting throughout
* Armour Check Penalty and Item Bonuses/Penalties will no longer apply while transformed (this is what the 'Balancer' Custom Modifier accounts for

---

### Endnotes
I welcome any and all feedback you have about these macros! The best way to get in touch with me is via Discord (Some Knucklehead#4725).

I only started learning javascript over the past few months, and entirely so that I could tinker around with Foundry. An experienced developer would likely have a heart-attack seeing my code, for which I apologize.

It will be an ongoing project to streamline the code and make it more efficient. This is my first complex macro, and it kept getting bigger the more I worked on it, so I apologize for both its size and any unforseen bugs. I will do my best to help you work through any problems you find, but please note: **I always recommend backing up your characters regularly, and especially before using macros like these. I am not responsible for any loss or alteration of character data.**
