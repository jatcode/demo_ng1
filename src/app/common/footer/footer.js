class FooterController {
  constructor() {
    console.log(this);
  }
  $onChanges(changes){
    console.log(changes);
  }
}

export const footer = {

  bindings: {
  	myUser: '<user'
  },
  templateUrl: 'app/common/footer/footer.html',
  controller: FooterController
};
