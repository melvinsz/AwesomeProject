import Toast from "react-native-toast-message";
import SrcApp from "./src/srcApp";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SrcApp />
      <Toast />
    </Provider>
  );
}
