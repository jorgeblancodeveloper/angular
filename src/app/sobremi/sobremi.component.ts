import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sobremi',
    template: `
  <div class="info">
  
      <h3>Jorge Blanco Maldonado</h3>
      Front-end developer

    <div><p>Ilustrador, animador, diseñador, Front End Developer sucesiva y solapadamente.<br>
Del 73.</p>
<p>CSS, HTML, JS y derivados (Git, SASS, Bootstrap, JQuery...)</p>
<p>Actualmente, Lead Designer en Mobile Cashout VLC</p>
<p><a href="https://es.stackoverflow.com/users/83857/montaycabe">Mi cuenta en es.stackoverflow.com</a></p>
<p><a href="https://github.com/jorgeblancodeveloper/">Mis repositorios en Github:</a></p>
</div>
    </div>
  `,
    styles: []
})
export class SobremiComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

}