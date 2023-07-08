import { Provider } from "react-redux";
import { store } from "@/store";

import Main from "@/components";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
