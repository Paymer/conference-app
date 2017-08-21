
export default class SessionsList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        this.talkService.findAllSessions()
            .then((list) => {

                document.querySelector(idView).innerHTML ='<ul>'+ list.map((element) => {
                    return (`<li> ${element.title}</li>`);
                }).join('')+`</ul>`;
            });
            

    }
}