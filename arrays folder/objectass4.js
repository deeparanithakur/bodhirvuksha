///Song() using Object() Constructor
///with atleast 5 properties n 2 behaviors and instantiate it 3 times

function song(name, actor, actress, artist ,language) {
    this.name =name;
    this.actor =actor;
    this.actress = actress;
    this.artist = artist;
    this.language = language;
    
    this.sing = function () {
        console.log("Singer");
    }
    this.enjoy = function() {
        console.log("Song enjoyed");
    };
}
let song1 =new song("dilwale dulhaniya le jayenge","shah rukh khan", "kajol","lata mangeshkar", "hindi");
let song2 = new song("Tere naam", "Salman Khan","bhumika","Udit Narayan","hindi");

console.log(song1);
console.log(song2);

song1.sing();
song1.enjoy();