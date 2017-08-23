
import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";
import SessionsList from "./sessions/list/index";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

alert('Conférence App démarré !');

const lay = new Layout();
const tser = new TalkService();
const spli = new SpeakerList(tser);
const sesli = new SessionsList(tser);

 
        lay.render();

var router = () => {
    if (location.hash == '#speakers-list') {
        // afficher vue liste des présentateurs
        spli.render("#main-view");

    } else if (location.hash == '#sessions-list') {
        // afficher vue liste des sessions
         sesli.render("#main-view");
         
    } else {
        // afficher vue par défaut
       
    }
}
    window.addEventListener('load', () => {
    window.onhashchange = () => {
    router();
    };
    router();
    });

         