/**
 * Phone number extraction from multiple strings using Bluebird promises
 */
const extractor = require('../lib/extractor')
    , Promise = require('bluebird');

var texts = [
   "Air Conditioned, Power Steering, SUPER DOOPER LOW KLM's @ 78,238, SET AND FORGET REGO Until June 2016!!, Power Mirrors, Tinted Windows, Central Locking, CD Mp3/AUX/USB AM/FM Stereo, Bluetooth Connectivity, Partial Leather Interior, Dual SRS Air Bags, In Cabin Roll Bar, Rear Tow Bar Accessory, EFS Lift Kit Upgrade, Side Steps,  Added Essential Upgrades: - Shovel - Farm Jack - Sand Ladder - CB Radio (Oricom) - Brand New Mud Tyres with Sunraysia Rims - Dual Front ARB LED Spot Lights (2 x 185W) - Front Bull Bar - Full Length Top Luggage Rack - Fire Extinguisher - Rear Cabin Cage - Genuine Snorkel - Fuel Cans A STEAL at This Price! What a GEM! This Is a Must See!!! Immaculate Condition Inside & Out, Nothing To Spend!!!  Enquire Today!! DO NOT MISS OUT! We offer: *5 Year Unlimited Klms Warranty Plus 24/7 Roadside Service Australia Wide (terms & conditions apply) *100% clear title includes -No Accident History (no written off) -No Encumbrance Owing (no money owing) *Trades-Ins & Test Drive Available *Extended Trading Hours: Open 7 Days A Week: -Mon-Fri 9am - 5:30 pm -Sat 9am- 5pm -Sun 10am - 4pm (after hour appointments available) *Contact Us For On 0254 123 123 + click to reveal *Website: http://www.stevesautoworld.com.au *Find Us On Facebook & Like Our Page, https://www.facebook.com/steves.autoworld"
 , "Sliding door, screen door and 2 windows. Pulled out of a granny flat. $200. Pick up Kambah. 0398 432 432 or 03-98 777-777"
 , "Secure undercover car spaces available for long term rental. Access is by security fob 24⁄7. The space is in a high security complex on Campbell Street Surry Hills, a very short walk to Taylor Square, Bourke and Crown Streets. $370 per month. Call (04)34.432.112 between 9am and 5pm."
];

var tasks = [];

texts.forEach(function(text){
    tasks.push(
        extractor.getCandidates(text, 'au')
    )
});

Promise.all(tasks)
    .spread(function(result1, result2, result3){
        console.log(result1); // [ '0254123123' ]
        console.log(result2); // [ '0398432432', '0398777777' ]
        console.log(result3); // [ '0434432112' ]
    })

    .catch(function(err){
        throw err;
    });
