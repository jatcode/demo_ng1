export const AppComponent = {
  template: `
    <div>
        <h1>  Hello world</h1>
        <div ui-view></div>
    </div>
    <div layout="row">
    <div flex>First item in row</div>
    <div flex>Second item in row</div>
    </div>
    <footer>
        Copyright MyApp 2016.
    </footer>
  `
};
