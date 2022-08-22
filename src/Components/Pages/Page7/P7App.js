import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from './store/store'
function P7App() {
  return <Provider store={store}> <Counter /></Provider>;
}

export default P7App;
