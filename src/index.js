
import TalkService from "./common/talk.service";
import Layout from "./layout/index";
import SpeakerList from "./speakers/list/index";

alert('Conférence App démarré !');

const lay = new Layout();
const tser = new TalkService();
const spli = new SpeakerList(tser);





lay.render();
spli.render("#main-view");




         