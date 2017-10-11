var tracery = require('tracery-grammar');

//"description":"they seem #emotion#,they slip into the crowd,their mannerisms are #emotion#,their language seems #emotion#,they may be armed,the crowds jostle around them,they have been robbed blind,they are #adjective#,they avoid my gaze,their ticket is invalid,they do not match their identification,I can find no record of their passage,I signal to security,I let them through,I send them back,their paperwork is woefully incomplete,my scanners wail at their approach,we have been searching for them for weeks,there is a lot of money on their head,I believe they are carrying contraband,they have no return ticket,this isn't their destination,their family is waiting for them at the gate,they slip me a bribe,they are clearly #emotion#".split(","),
var grammar = tracery.createGrammar({
    "__ABOUT": [""]
   ,"__MADE BY":["@tolinky"]
   ,"__NOTES":[""],
    "exclamation":["OMG","wow","yo","what?!","huh?!","WTF?","Crazy","Unbelievable","Woah","Shocking"],
    "intro":["You'll never believe how","Find out how","Check out how","Look at how","watch the moment"],
    "introdescconnect":["this","one"],
    "exclamationFlip":["#exclamation.capitalize#! ",""],
    "shockFlip":[""," #confused# #crowd# when #They#"],
    "confused":["stunned","flummoxed","infuriated","confused","shocked","amazed","angered","enraged"],
    "experts":["scientists","lawyers","#Their# lawyer","police","#Their# doctor","doctors","mathematicians"],
    "civilians":["neighbourhood kids","onlookers","passers by","#Their# neighbours","#Their# kids","#Their# friends","the press"],
    "crowd":["#experts#","#civilians#"],
    "descp":"#descriptor# #person#",
    "person":["highschool dropout#genPronouns#","college dropout#genPronouns#","single mother#shePronouns#","single father#hePronouns#","mother#shePronouns#","father#hePronouns#","grandmother#shePronouns#","disgraced scientist#genPronouns#","hobo#genPronouns#","generous stranger#genPronouns#"],
    "oldAge":["70","71","72","73","74","79","81","83","87","89","91","97","99","100","101","103","109"],
    "descriptor":["smart","Texas","Washington","all-American","dirt poor","canny","down-and-out","totally real","entrepeneuring"],
    "genPronouns": ["#theyPronouns#","#shePronouns#","#hePronouns#"],
    "theyPronouns": "[They:they][Them:them][Their:their][Theirs:theirs][Are:are][Were:were][Have:have][S:][Es:][Y:y]",
    "shePronouns": "[They:she][Them:her][Their:her][Theirs:hers][Are:is][Were:was][Have:has][S:s][Es:es][Y:ies]",
    "hePronouns": "[They:he][Them:him][Their:his][Theirs:his][Are:is][Were:was][Have:has][S:s][Es:es][Y:ies]",
    "goodThing": ["found ancient trasure","destroyed a priceless work of art","ruined their dream home","won #prize#","saved a drowning child","cut #Their# #goods# bill in half","cut #Their# #goods# bill by 90%","lost 5 stone overnight","lost 20 inches from #Their# waistline overnight","sold #Their# house for a million dollars","got a million dollars","got paid $500 dollars a day","got a promotion","got #Their# dream job","married #Their# childhood crush"],
    "prize": ["a milion dollars","their dream holiday","their dream house"],
    "amazingDescriptor": ["overnight","by doing absolutely nothing","while in a coma","for free","with these five easy steps","with this one tip","with this ancient wisdom"],
    "amazingDescriptorFlip": [" #amazingDescriptor#",""],
    "goods": ["food","phone","gas","electricity","doctor's"],
    "addition": ["what happens next will shock you","you'll never believe what happens next","#exclamation#","what #They# do#Es# next will shock you","#experts# are #confused#","you can do it too"],
    "additionFlip":[" #addition.capitalize#!",""],
    "origin": "#exclamationFlip##intro.capitalize# #introdescconnect# #descp##shockFlip# #goodThing##amazingDescriptorFlip#!#additionFlip#" ,
   }   
   );

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
/*var string = ""
for (list in e){
    string+="\""+list+"\": ["
    for(i in e[list]){
        string+="\""+e[list][i]+"\",";
    }
    string+="],\n"
}
console.log(string)*/