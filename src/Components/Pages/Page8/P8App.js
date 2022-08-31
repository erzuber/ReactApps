import Counter from "./components/Counter";
import { Provider } from 'react-redux';
import store from './store/store'
function P8App() {
  return <Provider store={store}> <Counter /></Provider>;
}

export default P8App;
