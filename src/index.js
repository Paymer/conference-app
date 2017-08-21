
import TalkService from "./common/talk.service";

alert('Conférence App démarré !');


let tser = new TalkService();

tser.findAllSpeakers()
.then((list)=>{
    //We need a list of names
        return list.map((element) => {
        return (`${element.firstname} ${element.lastname}`);
        });
})
.then((list)=>{
    console.log(list);
})

         