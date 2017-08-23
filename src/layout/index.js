 import template from './layout.html';


console.log(template);
export default  class Layout{

    render(){
        //body of the method, fill all the body of the html file
        //remplit le corps de l’élément HTML body avec le contenu du fichier src/layout/layout.html
       document.querySelector('body').innerHTML = template;

    }
}