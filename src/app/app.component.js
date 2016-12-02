export const AppComponent = {
  template: `
  <div class='main'>
    Statefull </br>
    {{$ctrl.user}}


    <footer       user="$ctrl.user" >
    </footer>
</div>
  `,
  controller(){
    this.user = {
        firstName: 'Jesus',
        lastName: 'Amaya',
        other: 'term'

    };
  }
};
