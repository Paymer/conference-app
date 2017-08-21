export default class SpeakerList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSpeakers()
            .then((list) => {

                document.querySelector(idView).innerHTML ='<ul>'+ list.map((element) => {
                    return (`<li>${element.firstname} ${element.lastname}</li>`);
                }).join('')+`</ul>`;
            });
            

    }
}