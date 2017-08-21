


export default class TalkService {


    //return list of all the speakers
    findAllSpeakers() {
        //PROMISE
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/speakers', true);
            req.onreadystatechange = (aEvt) => {
                // 4 the answr is ready
                if (req.readyState == 4) {
                    // the answer is correct
                    if (req.status == 200) {
                            //the response is a string, so it is necessary to transform it into JS
                            resolve(JSON.parse(req.responseText));
                           
                    } else {
                        reject(`Erreur pendant le chargement de la page`)
                    }
                }; 
            }
            req.send(null);
        })
    }

//return list of all the sessions
    findAllSessions() {
        //PROMISE
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('GET', 'http://localhost:3000/sessions', true);
            req.onreadystatechange = (aEvt) => {
                // 4 the answr is ready
                if (req.readyState == 4) {
                    // the answer is correct
                    if (req.status == 200) {
                            //the response is a string, so it is necessary to transform it into JS
                            resolve(JSON.parse(req.responseText));
                           
                    } else {
                        reject(`Erreur pendant le chargement de la page`)
                    }
                }; 
            }
            req.send(null);
        })
    }


}