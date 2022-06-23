

console.log(process.pid)
console.log(process.versions.node)
console.log(process.argv)


// node globalProcess utente Ale saluti  "Oh, ciao" --segno "doppio meno come nome dell attributo""

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]; 
}

const saluti = grab("saluti")
const usr = grab("utente")
const betterWriteItSo = grab("--segno")



console.log(`${usr} ${saluti} ${betterWriteItSo}`)