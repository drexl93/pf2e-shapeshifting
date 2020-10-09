# Pathfinder 2E Shapeshifting Macros

## NOTE: I strongly recommend returning to your normal shape at the end of a game session, just in case a Pathfinder 2E Game System update occurs which changes the data structures the macros use.

These three macros are intended to simplify the lives of any Druids who need to Wild Shape, or any casters using the plethora of Form Spells available. They require The Furnace to be enabled, and the player using them must have at least Trusted permissions:

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

---

### Known Issues
* The Fire Elemental's weakness to water shows up as Undefined (5), because Water weakness is not supported on the current PF2e sheet
* Special properties of certain attacks (such as the Flytrap's ability to Grab after a successful Strike) are not yet indicated or supported

### Token Image Change Feature
* If you would like to use the Token Image Change feature, make sure the token has the exact name of the form appended to the end of the name of your token.
* For example, if your token is "Bob.png", to set up tokens for the Animal Form spell you would label them as "BobCat.png", "BobBull.png", etc. The full list of the forms and their names are at the start of the macro for reference.
* If you would like to disable the Token Image Change feature for Wild Shape, find the commented out section beginning with "// Change image" in the wildShape macro. Comment out just that section (until before "// Change size") by adding "//" before each of those lines.

---

### Future Plans
* Look into ways of representing special properties of creatures (such as the White Dragon's ability to climb only ice, or the Flytrap's ability to spend an action after a hit to Grab the target)
* For Wild Shape, check whether Focus Point is available and deduct one per usage

### Endnotes
I welcome any and all feedback you have about these macros!

I only started learning javascript over the past few months, and entirely so that I could tinker around with Foundry. An experienced developer would likely have a heart-attack seeing my code, for which I apologize.

I am considering making this into a module, once I figure out how that would work.

It will be an ongoing project to streamline the code and make it more efficient. This is my first complex macro, and it kept getting bigger the more I worked on it, so I apologize for both its size and any unforseen bugs. I will do my best to help you work through any problems you find, but please note: **I always recommend backing up your characters regularly, and especially before using macros like these. I am not responsible for any loss or alteration of character data.**
