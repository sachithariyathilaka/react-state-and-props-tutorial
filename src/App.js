import {StateComponent} from "./component/StateComponent";
import {PropsComponent} from "./component/PropsComponent";

/**
 * Main method of the application.
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <div className={'center-align'}>
      <h1>State Component</h1>
      <StateComponent/>
      <h1>Props Component</h1>
      <PropsComponent name="Sachith Ariyathilaka" count={0}/>
      <h1>Default Props Component</h1>
      <PropsComponent/>
    </div>
  );
}

export default App;
