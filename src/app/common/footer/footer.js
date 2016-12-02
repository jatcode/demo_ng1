class FooterController {
  constructor() {
    this.text = 'My brand new component!';
    console.log(this);
  }
}

export const footer = {
  bindings: {
  	myUser: '<user'
  },
  templateUrl: 'app/common/footer/footer.html',
  controller: FooterController
};
