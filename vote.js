let tobyVotes = [];
let scoutVotes = [];

const voteSer = {
    record (petName, ip){
        if(petName == "Toby"){
            tobyVotes.push({
                ip: ip,
                timeStamp: new Date()
            });
        }else(){
            scoutVotes.push({
                ip: ip,
                timeStamp: new Date()
            });
        }
    }
}