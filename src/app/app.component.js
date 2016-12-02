export const AppComponent = {
  template: `    
    <div class="wrapper" layout="column" layout-fill>
    <header>
        <md-content class="md-whiteframe-z1" layout="row" layout-align="center center">
            <h1>Header</h1>
        </md-content>
    </header>
    <div flex layout="column" layout-gt-sm="row">
        
        <main flex-md="60" flex-order-gt-sm="2" layout="column">
            <md-content flex layout="column" layout-margin layout-padding>
                 <h1 class="md-title">
                     Main Content
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu lectus vel libero porta dictum. Donec a lorem consequat, fermentum lorem sed, sollicitudin neque. Pellentesque placerat interdum orci, eget sodales tortor vehicula id.
                </p>
            </md-content>            
        </main>    
    </div>
    
    <footer
        user="$ctrl.user"
    >
    </footer>
    
</div>

  `,
  controller(){
    this.user = {
        firstName: 'Jesus',
        lastName: 'amaya'

    };
  }
};
