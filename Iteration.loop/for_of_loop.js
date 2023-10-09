const coding=["js","cpp","c","perl","swift","rubby"];
for(const it of coding){
    console.log(it);
}
const myObjarr={
        lang:"c++",
        extension:"cpp/c++"
    };
    // for (const iterator of myObjarr) {
    //     console.log(iterator)
    // } it loop does not work for object
    // Map;
    const map = new Map();
       map.set( "IN","INDIA");
        map.set("USA","UNITED STATE OF AMERICA");
       map.set( "FR","FRANCE");
    
        // console.log(map)
    
// for (const key of map) {// if we write key this os it five us array of [key,val] of map[ 'IN', 'INDIA' ][ 'USA', 'UNITED STATE OF AMERICA' ][ 'FR', 'FRANCE' ]
        
//     console.log(key);
// }


for (const [key ,value] of map) {
    console.log(key,":=>",value);
}

// for of working for string array and map it does not work for object
