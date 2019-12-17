/**
 * Pokemon Showdown Dex Data
 *
 * A collection of data and definitions for src/battle-dex.ts.
 *
 * Larger data has their own files in data/, so this is just for small
 * miscellaneous data that doesn't need its own file.
 *
 * Licensing note: PS's client has complicated licensing:
 * - The client as a whole is AGPLv3
 * - The battle replay/animation engine (battle-*.ts) by itself is MIT
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license MIT
 */






var BattleNatures={
Adamant:{
plus:'atk',
minus:'spa'},

Bashful:{},
Bold:{
plus:'def',
minus:'atk'},

Brave:{
plus:'atk',
minus:'spe'},

Calm:{
plus:'spd',
minus:'atk'},

Careful:{
plus:'spd',
minus:'spa'},

Docile:{},
Gentle:{
plus:'spd',
minus:'def'},

Hardy:{},
Hasty:{
plus:'spe',
minus:'def'},

Impish:{
plus:'def',
minus:'spa'},

Jolly:{
plus:'spe',
minus:'spa'},

Lax:{
plus:'def',
minus:'spd'},

Lonely:{
plus:'atk',
minus:'def'},

Mild:{
plus:'spa',
minus:'def'},

Modest:{
plus:'spa',
minus:'atk'},

Naive:{
plus:'spe',
minus:'spd'},

Naughty:{
plus:'atk',
minus:'spd'},

Quiet:{
plus:'spa',
minus:'spe'},

Quirky:{},
Rash:{
plus:'spa',
minus:'spd'},

Relaxed:{
plus:'def',
minus:'spe'},

Sassy:{
plus:'spd',
minus:'spe'},

Serious:{},
Timid:{
plus:'spe',
minus:'atk'}};


var BattleStatIDs={
HP:'hp',
hp:'hp',
Atk:'atk',
atk:'atk',
Def:'def',
def:'def',
SpA:'spa',
SAtk:'spa',
SpAtk:'spa',
spa:'spa',
spc:'spa',
Spc:'spa',
SpD:'spd',
SDef:'spd',
SpDef:'spd',
spd:'spd',
Spe:'spe',
Spd:'spe',
spe:'spe'};

var BattlePOStatNames={
hp:'HP',
atk:'Atk',
def:'Def',
spa:'SAtk',
spd:'SDef',
spe:'Spd'};

var BattleStatNames={
hp:'HP',
atk:'Atk',
def:'Def',
spa:'SpA',
spd:'SpD',
spe:'Spe'};

var BattleStats={
hp:'HP',
atk:'Attack',
def:'Defense',
spa:'Special Attack',
spd:'Special Defense',
spe:'Speed',
accuracy:'accuracy',
evasion:'evasiveness',
spc:'Special'};


var BattleBaseSpeciesChart=[
'pikachu',
'pichu',
'unown',
'castform',
'deoxys',
'burmy',
'wormadam',
'cherrim',
'shellos',
'gastrodon',
'rotom',
'giratina',
'shaymin',
'arceus',
'basculin',
'darmanitan',
'deerling',
'sawsbuck',
'tornadus',
'thundurus',
'landorus',
'kyurem',
'keldeo',
'meloetta',
'genesect',
'vivillon',
'flabebe',
'floette',
'florges',
'furfrou',
'aegislash',
'pumpkaboo',
'gourgeist',
'meowstic',
'hoopa',
'zygarde',
'lycanroc',
'wishiwashi',
'minior',
'mimikyu',
'greninja',
'oricorio',
'silvally',
'necrozma',


'raticate',
'marowak',
'kommoo',


'charizard',
'mewtwo'];



var BattlePokemonIconIndexes={
egg:900+1,
pikachubelle:900+2,
pikachulibre:900+3,
pikachuphd:900+4,
pikachupopstar:900+5,
pikachurockstar:900+6,
pikachucosplay:900+7,

castformrainy:900+35,
castformsnowy:900+36,
castformsunny:900+37,
deoxysattack:900+38,
deoxysdefense:900+39,
deoxysspeed:900+40,
burmysandy:900+41,
burmytrash:900+42,
wormadamsandy:900+43,
wormadamtrash:900+44,
cherrimsunshine:900+45,
shelloseast:900+46,
gastrodoneast:900+47,
rotomfan:900+48,
rotomfrost:900+49,
rotomheat:900+50,
rotommow:900+51,
rotomwash:900+52,
giratinaorigin:900+53,
shayminsky:900+54,
unfezantf:900+55,
basculinbluestriped:900+56,
darmanitanzen:900+57,
deerlingautumn:900+58,
deerlingsummer:900+59,
deerlingwinter:900+60,
sawsbuckautumn:900+61,
sawsbucksummer:900+62,
sawsbuckwinter:900+63,
frillishf:900+64,
jellicentf:900+65,
tornadustherian:900+66,
thundurustherian:900+67,
landorustherian:900+68,
kyuremblack:900+69,
kyuremwhite:900+70,
keldeoresolute:900+71,
meloettapirouette:900+72,
vivillonarchipelago:900+73,
vivilloncontinental:900+74,
vivillonelegant:900+75,
vivillonfancy:900+76,
vivillongarden:900+77,
vivillonhighplains:900+78,
vivillonicysnow:900+79,
vivillonjungle:900+80,
vivillonmarine:900+81,
vivillonmodern:900+82,
vivillonmonsoon:900+83,
vivillonocean:900+84,
vivillonpokeball:900+85,
vivillonpolar:900+86,
vivillonriver:900+87,
vivillonsandstorm:900+88,
vivillonsavanna:900+89,
vivillonsun:900+90,
vivillontundra:900+91,
pyroarf:900+92,
flabebeblue:900+93,
flabebeorange:900+94,
flabebewhite:900+95,
flabebeyellow:900+96,
floetteblue:900+97,
floetteeternal:900+98,
floetteorange:900+99,
floettewhite:900+100,
floetteyellow:900+101,
florgesblue:900+102,
florgesorange:900+103,
florgeswhite:900+104,
florgesyellow:900+105,
furfroudandy:900+106,
furfroudebutante:900+107,
furfroudiamond:900+108,
furfrouheart:900+109,
furfroukabuki:900+110,
furfroulareine:900+111,
furfroumatron:900+112,
furfroupharaoh:900+113,
furfroustar:900+114,
meowsticf:900+115,
aegislashblade:900+116,
hoopaunbound:900+118,
rattataalola:900+119,
raticatealola:900+120,
raichualola:900+121,
sandshrewalola:900+122,
sandslashalola:900+123,
vulpixalola:900+124,
ninetalesalola:900+125,
diglettalola:900+126,
dugtrioalola:900+127,
meowthalola:900+128,
persianalola:900+129,
geodudealola:900+130,
graveleralola:900+131,
golemalola:900+132,
grimeralola:900+133,
mukalola:900+134,
exeggutoralola:900+135,
marowakalola:900+136,
greninjaash:900+137,
zygarde10:900+138,
zygardecomplete:900+139,
oricoriopompom:900+140,
oricoriopau:900+141,
oricoriosensu:900+142,
lycanrocmidnight:900+143,
wishiwashischool:900+144,
miniormeteor:900+145,
miniororange:900+146,
minioryellow:900+147,
miniorgreen:900+148,
miniorblue:900+149,
miniorviolet:900+150,
miniorindigo:900+151,
magearnaoriginal:900+152,
pikachuoriginal:900+153,
pikachuhoenn:900+154,
pikachusinnoh:900+155,
pikachuunova:900+156,
pikachukalos:900+157,
pikachualola:900+158,
pikachupartner:900+159,
lycanrocdusk:900+160,
necrozmaduskmane:900+161,
necrozmadawnwings:900+162,
necrozmaultra:900+163,
pikachustarter:900+164,
eeveestarter:900+165,
meowthgalar:900+166,
ponytagalar:900+167,
rapidashgalar:900+168,
farfetchdgalar:900+169,
weezinggalar:900+170,
mrmimegalar:900+171,
corsolagalar:900+172,
zigzagoongalar:900+173,
linoonegalar:900+174,
darumakagalar:900+175,
darmanitangalar:900+176,
darmanitanzengalar:900+177,
yamaskgalar:900+178,
stunfiskgalar:900+179,
cramorantgulping:900+180,
cramorantgorging:900+181,
toxtricitylowkey:900+182,








eiscuenoice:900+191,
indeedeef:900+192,
morpekohangry:900+193,
zaciancrowned:900+194,
zamazentacrowned:900+195,

gumshoostotem:735,
raticatealolatotem:900+120,
marowakalolatotem:900+136,
araquanidtotem:752,
lurantistotem:754,
salazzletotem:758,
vikavolttotem:738,
togedemarutotem:777,
mimikyutotem:778,
mimikyubustedtotem:778,
ribombeetotem:743,
kommoototem:784,

venusaurmega:1104+0,
charizardmegax:1104+1,
charizardmegay:1104+2,
blastoisemega:1104+3,
beedrillmega:1104+4,
pidgeotmega:1104+5,
alakazammega:1104+6,
slowbromega:1104+7,
gengarmega:1104+8,
kangaskhanmega:1104+9,
pinsirmega:1104+10,
gyaradosmega:1104+11,
aerodactylmega:1104+12,
mewtwomegax:1104+13,
mewtwomegay:1104+14,
ampharosmega:1104+15,
steelixmega:1104+16,
scizormega:1104+17,
heracrossmega:1104+18,
houndoommega:1104+19,
tyranitarmega:1104+20,
sceptilemega:1104+21,
blazikenmega:1104+22,
swampertmega:1104+23,
gardevoirmega:1104+24,
sableyemega:1104+25,
mawilemega:1104+26,
aggronmega:1104+27,
medichammega:1104+28,
manectricmega:1104+29,
sharpedomega:1104+30,
cameruptmega:1104+31,
altariamega:1104+32,
banettemega:1104+33,
absolmega:1104+34,
glaliemega:1104+35,
salamencemega:1104+36,
metagrossmega:1104+37,
latiasmega:1104+38,
latiosmega:1104+39,
kyogreprimal:1104+40,
groudonprimal:1104+41,
rayquazamega:1104+42,
lopunnymega:1104+43,
garchompmega:1104+44,
lucariomega:1104+45,
abomasnowmega:1104+46,
gallademega:1104+47,
audinomega:1104+48,
dianciemega:1104+49,
charizardgmax:1104+50,
butterfreegmax:1104+51,
pikachugmax:1104+52,
meowthgmax:1104+53,
machampgmax:1104+54,
gengargmax:1104+55,
kinglergmax:1104+56,
laprasgmax:1104+57,
eeveegmax:1104+58,
snorlaxgmax:1104+59,
garbodorgmax:1104+60,
melmetalgmax:1104+61,
corviknightgmax:1104+62,
orbeetlegmax:1104+63,
drednawgmax:1104+64,
coalossalgmax:1104+65,
flapplegmax:1104+66,
appletungmax:1104+67,
sandacondagmax:1104+68,
toxtricitygmax:1104+69,
centiskorchgmax:1104+70,
hatterenegmax:1104+71,
grimmsnarlgmax:1104+72,
alcremiegmax:1104+73,
copperajahgmax:1104+74,
duraludongmax:1104+75,
eternatuseternamax:1104+76,

syclant:1296+0,
revenankh:1296+1,
pyroak:1296+2,
fidgit:1296+3,
stratagem:1296+4,
arghonaut:1296+5,
kitsunoh:1296+6,
cyclohm:1296+7,
colossoil:1296+8,
krilowatt:1296+9,
voodoom:1296+10,
tomohawk:1296+11,
necturna:1296+12,
mollux:1296+13,
aurumoth:1296+14,
malaconda:1296+15,
cawmodore:1296+16,
volkraken:1296+17,
plasmanta:1296+18,
naviathan:1296+19,
crucibelle:1296+20,
crucibellemega:1296+21,
kerfluffle:1296+22,
pajantom:1296+23,
jumbao:1296+24,
caribolt:1296+25,
smokomodo:1296+26,
snaelstrom:1296+27,
equilibra:1296+28,

syclar:1332+0,
embirch:1332+1,
flarelm:1332+2,
breezi:1332+3,
scratchet:1332+4,
necturine:1332+5,
cupra:1332+6,
argalis:1332+7,
brattler:1332+8,
cawdet:1332+9,
volkritter:1332+10,
snugglow:1332+11,
floatoy:1332+12,
caimanoe:1332+13,
pluffle:1332+14,
rebble:1332+15,
tactite:1332+16,
privatyke:1332+17,
nohface:1332+18,
monohm:1332+19,
duohm:1332+20,

voodoll:1332+22,
mumbao:1332+23,
fawnifer:1332+24,
electrelk:1332+25,
smogecko:1332+26,
smoguana:1332+27,
swirlpool:1332+28,
coribalis:1332+29};



var BattlePokemonIconIndexesLeft={
pikachubelle:1188+0,
pikachupopstar:1188+1,
clefairy:1188+2,
clefable:1188+3,
jigglypuff:1188+4,
wigglytuff:1188+5,
dugtrioalola:1188+6,
poliwhirl:1188+7,
poliwrath:1188+8,
mukalola:1188+9,
kingler:1188+10,
croconaw:1188+11,
cleffa:1188+12,
igglybuff:1188+13,
politoed:1188+14,

sneasel:1188+35,
teddiursa:1188+36,
roselia:1188+37,
zangoose:1188+38,
seviper:1188+39,
castformsnowy:1188+40,
absolmega:1188+41,
absol:1188+42,
regirock:1188+43,
torterra:1188+44,
budew:1188+45,
roserade:1188+46,
magmortar:1188+47,
togekiss:1188+48,
rotomwash:1188+49,
shayminsky:1188+50,
emboar:1188+51,
pansear:1188+52,
simisear:1188+53,
drilbur:1188+54,
excadrill:1188+55,
sawk:1188+56,
lilligant:1188+57,
garbodor:1188+58,
solosis:1188+59,
vanilluxe:1188+60,
amoonguss:1188+61,
klink:1188+62,
klang:1188+63,
klinklang:1188+64,
litwick:1188+65,
golett:1188+66,
golurk:1188+67,
kyuremblack:1188+68,
kyuremwhite:1188+69,
kyurem:1188+70,
keldeoresolute:1188+71,
meloetta:1188+72,
greninja:1188+73,
greninjaash:1188+74,
furfroudebutante:1188+75,
barbaracle:1188+76,
clauncher:1188+77,
clawitzer:1188+78,
sylveon:1188+79,
klefki:1188+80,
zygarde:1188+81,
zygarde10:1188+82,
zygardecomplete:1188+83,
dartrix:1188+84,
steenee:1188+85,
tsareena:1188+86,
comfey:1188+87,
miniormeteor:1188+88,
minior:1188+89,
miniororange:1188+90,
minioryellow:1188+91,
miniorgreen:1188+92,
miniorblue:1188+93,
miniorviolet:1188+94,
miniorindigo:1188+95,
dhelmise:1188+96,
necrozma:1188+97,
marshadow:1188+98,
pikachuoriginal:1188+99,
pikachupartner:1188+100,
necrozmaduskmane:1188+101,
necrozmadawnwings:1188+102,
necrozmaultra:1188+103,
stakataka:1188+104,
blacephalon:1188+105};


var BattleAvatarNumbers={
1:'lucas',
2:'dawn',
3:'youngster-gen4',
4:'lass-gen4dp',
5:'camper',
6:'picnicker',
7:'bugcatcher',
8:'aromalady',
9:'twins-gen4dp',
10:'hiker-gen4',
11:'battlegirl-gen4',
12:'fisherman-gen4',
13:'cyclist-gen4',
14:'cyclistf-gen4',
15:'blackbelt-gen4dp',
16:'artist-gen4',
17:'pokemonbreeder-gen4',
18:'pokemonbreederf-gen4',
19:'cowgirl',
20:'jogger',
21:'pokefan-gen4',
22:'pokefanf-gen4',
23:'pokekid',
24:'youngcouple-gen4dp',
25:'acetrainer-gen4dp',
26:'acetrainerf-gen4dp',
27:'waitress-gen4',
28:'veteran-gen4',
29:'ninjaboy',
30:'dragontamer',
31:'birdkeeper-gen4dp',
32:'doubleteam',
33:'richboy-gen4',
34:'lady-gen4',
35:'gentleman-gen4dp',
36:'madame-gen4dp',
37:'beauty-gen4dp',
38:'collector',
39:'policeman-gen4',
40:'pokemonranger-gen4',
41:'pokemonrangerf-gen4',
42:'scientist-gen4dp',
43:'swimmer-gen4dp',
44:'swimmerf-gen4dp',
45:'tuber',
46:'tuberf',
47:'sailor',
48:'sisandbro',
49:'ruinmaniac',
50:'psychic-gen4',
51:'psychicf-gen4',
52:'gambler',
53:'guitarist-gen4',
54:'acetrainersnow',
55:'acetrainersnowf',
56:'skier',
57:'skierf-gen4dp',
58:'roughneck-gen4',
59:'clown',
60:'worker-gen4',
61:'schoolkid-gen4dp',
62:'schoolkidf-gen4',
63:'roark',
64:'barry',
65:'byron',
66:'aaron',
67:'bertha',
68:'flint',
69:'lucian',
70:'cynthia-gen4',
71:'bellepa',
72:'rancher',
73:'mars',
74:'galacticgrunt',
75:'gardenia',
76:'crasherwake',
77:'maylene',
78:'fantina',
79:'candice',
80:'volkner',
81:'parasollady-gen4',
82:'waiter-gen4dp',
83:'interviewers',
84:'cameraman',
85:'reporter',
86:'idol',
87:'cyrus',
88:'jupiter',
89:'saturn',
90:'galacticgruntf',
91:'argenta',
92:'palmer',
93:'thorton',
94:'buck',
95:'darach',
96:'marley',
97:'mira',
98:'cheryl',
99:'riley',
100:'dahlia',
101:'ethan',
102:'lyra',
103:'twins-gen4',
104:'lass-gen4',
105:'acetrainer-gen4',
106:'acetrainerf-gen4',
107:'juggler',
108:'sage',
109:'li',
110:'gentleman-gen4',
111:'teacher',
112:'beauty',
113:'birdkeeper',
114:'swimmer-gen4',
115:'swimmerf-gen4',
116:'kimonogirl',
117:'scientist-gen4',
118:'acetrainercouple',
119:'youngcouple',
120:'supernerd',
121:'medium',
122:'schoolkid-gen4',
123:'blackbelt-gen4',
124:'pokemaniac',
125:'firebreather',
126:'burglar',
127:'biker-gen4',
128:'skierf',
129:'boarder',
130:'rocketgrunt',
131:'rocketgruntf',
132:'archer',
133:'ariana',
134:'proton',
135:'petrel',
136:'eusine',
137:'lucas-gen4pt',
138:'dawn-gen4pt',
139:'madame-gen4',
140:'waiter-gen4',
141:'falkner',
142:'bugsy',
143:'whitney',
144:'morty',
145:'chuck',
146:'jasmine',
147:'pryce',
148:'clair',
149:'will',
150:'koga',
151:'bruno',
152:'karen',
153:'lance',
154:'brock',
155:'misty',
156:'ltsurge',
157:'erika',
158:'janine',
159:'sabrina',
160:'blaine',
161:'blue',
162:'red',
163:'red',
164:'silver',
165:'giovanni',
166:'unknownf',
167:'unknown',
168:'unknown',
169:'hilbert',
170:'hilda',
171:'youngster',
172:'lass',
173:'schoolkid',
174:'schoolkidf',
175:'smasher',
176:'linebacker',
177:'waiter',
178:'waitress',
179:'chili',
180:'cilan',
181:'cress',
182:'nurseryaide',
183:'preschoolerf',
184:'preschooler',
185:'twins',
186:'pokemonbreeder',
187:'pokemonbreederf',
188:'lenora',
189:'burgh',
190:'elesa',
191:'clay',
192:'skyla',
193:'pokemonranger',
194:'pokemonrangerf',
195:'worker',
196:'backpacker',
197:'backpackerf',
198:'fisherman',
199:'musician',
200:'dancer',
201:'harlequin',
202:'artist',
203:'baker',
204:'psychic',
205:'psychicf',
206:'cheren',
207:'bianca',
208:'plasmagrunt-gen5bw',
209:'n',
210:'richboy',
211:'lady',
212:'pilot',
213:'workerice',
214:'hoopster',
215:'scientistf',
216:'clerkf',
217:'acetrainerf',
218:'acetrainer',
219:'blackbelt',
220:'scientist',
221:'striker',
222:'brycen',
223:'iris',
224:'drayden',
225:'roughneck',
226:'janitor',
227:'pokefan',
228:'pokefanf',
229:'doctor',
230:'nurse',
231:'hooligans',
232:'battlegirl',
233:'parasollady',
234:'clerk',
235:'clerk-boss',
236:'backers',
237:'backersf',
238:'veteran',
239:'veteranf',
240:'biker',
241:'infielder',
242:'hiker',
243:'madame',
244:'gentleman',
245:'plasmagruntf-gen5bw',
246:'shauntal',
247:'marshal',
248:'grimsley',
249:'caitlin',
250:'ghetsis-gen5bw',
251:'depotagent',
252:'swimmer',
253:'swimmerf',
254:'policeman',
255:'maid',
256:'ingo',
257:'alder',
258:'cyclist',
259:'cyclistf',
260:'cynthia',
261:'emmet',
262:'hilbert-dueldisk',
263:'hilda-dueldisk',
264:'hugh',
265:'rosa',
266:'nate',
267:'colress',
268:'beauty-gen5bw2',
269:'ghetsis',
270:'plasmagrunt',
271:'plasmagruntf',
272:'iris-gen5bw2',
273:'brycenman',
274:'shadowtriad',
275:'rood',
276:'zinzolin',
277:'cheren-gen5bw2',
278:'marlon',
279:'roxie',
280:'roxanne',
281:'brawly',
282:'wattson',
283:'flannery',
284:'norman',
285:'winona',
286:'tate',
287:'liza',
288:'juan',
289:'guitarist',
290:'steven',
291:'wallace',
292:'bellelba',
293:'benga',
294:'ash',
'#bw2elesa':'elesa-gen5bw2',
'#teamrocket':'teamrocket',
'#yellow':'yellow',
'#zinnia':'zinnia',
'#clemont':'clemont',
'#wally':'wally',
breeder:'pokemonbreeder',
breederf:'pokemonbreederf',

1001:'#1001',
1002:'#1002',
1003:'#1003',
1005:'#1005',
1010:'#1010'};var

























PureEffect=





function PureEffect(id,name){this.effectType='PureEffect';
this.id=id;
this.name=name;
this.gen=0;
this.exists=false;
};var


Item=

























function Item(id,name,data){this.effectType='Item';
if(!data||typeof data!=='object')data={};
if(data.name)name=data.name;
this.name=Dex.sanitizeName(name);
this.id=id;
this.gen=data.gen||0;
this.exists='exists'in data?!!data.exists:true;

this.num=data.num||0;
this.spritenum=data.spritenum||0;
this.desc=data.desc||data.shortDesc||'';
this.shortDesc=data.shortDesc||this.desc;

this.megaStone=data.megaStone||'';
this.megaEvolves=data.megaEvolves||'';
this.zMove=data.zMove||null;
this.zMoveType=data.zMoveType||'';
this.zMoveFrom=data.zMoveFrom||'';
this.zMoveUser=data.zMoveUser||null;
this.onPlate=data.onPlate||'';
this.onMemory=data.onMemory||'';
this.onDrive=data.onDrive||'';
this.fling=data.fling||null;
this.naturalGift=data.naturalGift||null;
this.isPokeball=!!data.isPokeball;

if(!this.gen){
if(this.num>=577){
this.gen=6;
}else if(this.num>=537){
this.gen=5;
}else if(this.num>=377){
this.gen=4;
}else{
this.gen=3;
}
}
};var















































Move=







































function Move(id,name,data){this.effectType='Move';
if(!data||typeof data!=='object')data={};
if(data.name)name=data.name;
this.name=Dex.sanitizeName(name);
this.id=id;
this.gen=data.gen||0;
this.exists='exists'in data?!!data.exists:true;

this.basePower=data.basePower||0;
this.accuracy=data.accuracy||0;
this.pp=data.pp||1;
this.type=data.type||'???';
this.category=data.category||'Physical';
this.priority=data.priority||0;
this.target=data.target||'normal';
this.flags=data.flags||{};
this.critRatio=data.critRatio===0?0:data.critRatio||1;


this.desc=data.desc;
this.shortDesc=data.shortDesc;
this.isViable=!!data.isViable;
this.isNonstandard=data.isNonstandard||null;
this.isZ=data.isZ||'';
this.zMovePower=data.zMovePower||0;
this.zMoveEffect=data.zMoveEffect||'';
this.zMoveBoost=data.zMoveBoost||null;
this.ohko=data.ohko||null;
this.recoil=data.recoil||null;
this.heal=data.heal||null;
this.multihit=data.multihit||null;
this.hasCustomRecoil=data.hasCustomRecoil||false;
this.noPPBoosts=data.noPPBoosts||false;
this.secondaries=data.secondaries||(data.secondary?[data.secondary]:null);

this.gmaxPower=data.gmaxPower||0;
if(this.category!=='Status'&&!this.gmaxPower){
if(!this.basePower){
this.gmaxPower=100;
}else if(['Fighting','Poison'].includes(this.type)){
if(this.basePower>=150){
this.gmaxPower=100;
}else if(this.basePower>=110){
this.gmaxPower=95;
}else if(this.basePower>=75){
this.gmaxPower=95;
}else if(this.basePower>=65){
this.gmaxPower=85;
}else if(this.basePower>=45){
this.gmaxPower=75;
}else{
this.gmaxPower=10;
}
}else{
if(this.basePower>=150){
this.gmaxPower=150;
}else if(this.basePower>=110){
this.gmaxPower=140;
}else if(this.basePower>=75){
this.gmaxPower=130;
}else if(this.basePower>=65){
this.gmaxPower=120;
}else if(this.basePower>=55){
this.gmaxPower=110;
}else if(this.basePower>=45){
this.gmaxPower=100;
}else{
this.gmaxPower=90;
}
}
}
if(this.category!=='Status'&&!this.zMovePower){
var basePower=this.basePower;
if(Array.isArray(this.multihit))basePower*=3;
if(!basePower){
this.zMovePower=100;
}else if(basePower>=140){
this.zMovePower=200;
}else if(basePower>=130){
this.zMovePower=195;
}else if(basePower>=120){
this.zMovePower=190;
}else if(basePower>=110){
this.zMovePower=185;
}else if(basePower>=100){
this.zMovePower=180;
}else if(basePower>=90){
this.zMovePower=175;
}else if(basePower>=80){
this.zMovePower=160;
}else if(basePower>=70){
this.zMovePower=140;
}else if(basePower>=60){
this.zMovePower=120;
}else{
this.zMovePower=100;
}
}

this.num=data.num||0;
if(!this.gen){
if(this.num>=560){
this.gen=6;
}else if(this.num>=468){
this.gen=5;
}else if(this.num>=355){
this.gen=4;
}else if(this.num>=252){
this.gen=3;
}else if(this.num>=166){
this.gen=2;
}else if(this.num>=1){
this.gen=1;
}
}
};var


Ability=











function Ability(id,name,data){this.effectType='Ability';
if(!data||typeof data!=='object')data={};
if(data.name)name=data.name;
this.name=Dex.sanitizeName(name);
this.id=id;
this.gen=data.gen||0;
this.exists='exists'in data?!!data.exists:true;
this.num=data.num||0;
this.shortDesc=data.shortDesc||data.desc||'';
this.desc=data.desc||data.shortDesc||'';
if(!this.gen){
if(this.num>=234){
this.gen=8;
}else if(this.num>=192){
this.gen=7;
}else if(this.num>=165){
this.gen=6;
}else if(this.num>=124){
this.gen=5;
}else if(this.num>=77){
this.gen=4;
}else if(this.num>=1){
this.gen=3;
}
}
};var


Template=























































function Template(id,name,data){this.effectType='Template';
if(!data||typeof data!=='object')data={};
if(data.name||data.species)name=data.name||data.species;
this.name=Dex.sanitizeName(name);
this.id=id;
this.gen=data.gen||0;
this.exists='exists'in data?!!data.exists:true;
this.species=this.name;
this.speciesid=this.id;
if(!data.abilities&&
!['hooh','hakamoo','jangmoo','kommoo','porygonz'].includes(this.id)){
var dashIndex=name.indexOf('-');
if(this.id==='kommoototem'){
data.baseSpecies='Kommo-o';
data.forme='Totem';
}else if(dashIndex>0){
data.baseSpecies=name.slice(0,dashIndex);
data.forme=name.slice(dashIndex+1);
}
}
if(!data.abilities){for(var _i=0;_i<

BattleBaseSpeciesChart.length;_i++){var baseid=BattleBaseSpeciesChart[_i];
if(this.id.length>baseid.length&&this.id.slice(0,baseid.length)===baseid){
data.baseSpecies=baseid;
data.forme=this.id.slice(baseid.length);
}
}
if(this.id!=='yanmega'&&this.id.slice(-4)==='mega'){
data.baseSpecies=this.id.slice(0,-4);
data.forme=this.id.slice(-4);
}else if(this.id.slice(-6)==='primal'){
data.baseSpecies=this.id.slice(0,-6);
data.forme=this.id.slice(-6);
}else if(this.id.slice(-5)==='alola'){
data.baseSpecies=this.id.slice(0,-5);
data.forme=this.id.slice(-5);
}
}
this.baseSpecies=data.baseSpecies||name;
this.forme=data.forme||'';
var baseId=toID(this.baseSpecies);
this.formeid=baseId===this.id?'':'-'+toID(this.forme);
this.spriteid=baseId+this.formeid;
if(this.spriteid.slice(-5)==='totem')this.spriteid=this.spriteid.slice(0,-5);
if(this.spriteid.slice(-1)==='-')this.spriteid=this.spriteid.slice(0,-1);
this.baseForme=data.baseForme||'';

this.num=data.num||0;
this.types=data.types||['???'];
this.abilities=data.abilities||{0:"No Ability"};
this.baseStats=data.baseStats||{hp:0,atk:0,def:0,spa:0,spd:0,spe:0};
this.weightkg=data.weightkg||0;

this.heightm=data.heightm||0;
this.gender=data.gender||'';
this.color=data.color||'';
this.genderRatio=data.genderRatio||null;
this.eggGroups=data.eggGroups||[];

this.otherFormes=data.otherFormes||null;
this.otherForms=data.otherForms||null;
this.evos=data.evos||null;
this.prevo=data.prevo||'';
this.evoType=data.evoType||'';
this.evoLevel=data.evoLevel||0;
this.evoMove=data.evoMove||'';
this.evoItem=data.evoItem||'';
this.evoCondition=data.evoCondition||'';
this.requiredItem=data.requiredItem||'';
this.tier=data.tier||'';

this.isTotem=false;
this.isMega=false;
this.isGigantamax=!!(this.forme&&this.forme.endsWith('Gmax'));
this.isPrimal=false;
this.battleOnly=!!data.battleOnly;
this.isNonstandard=data.isNonstandard||null;
this.unreleasedHidden=!!data.unreleasedHidden;
if(!this.gen){
if(this.num>=810||this.forme==='Galar'||this.isGigantamax){
this.gen=8;
}else if(this.num>=722||this.formeid==='-alola'||this.formeid==='-starter'){
this.gen=7;
}else if(this.forme&&['-mega','-megax','-megay'].includes(this.formeid)){
this.gen=6;
this.isMega=true;
this.battleOnly=true;
}else if(this.formeid==='-primal'){
this.gen=6;
this.isPrimal=true;
this.battleOnly=true;
}else if(this.formeid==='-totem'||this.formeid==='-alolatotem'){
this.gen=7;
this.isTotem=true;
}else if(this.num>=650){
this.gen=6;
}else if(this.num>=494){
this.gen=5;
}else if(this.num>=387){
this.gen=4;
}else if(this.num>=252){
this.gen=3;
}else if(this.num>=152){
this.gen=2;
}else if(this.num>=1){
this.gen=1;
}
}
};


if(typeof require==='function'){

global.BattleBaseSpeciesChart=BattleBaseSpeciesChart;
global.BattleStats=BattleStats;
global.BattleNatures=BattleNatures;
global.PureEffect=PureEffect;
global.Template=Template;
global.Ability=Ability;
global.Item=Item;
global.Move=Move;
}