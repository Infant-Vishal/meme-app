import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import MainRouter from "./routes/MainRouter";
import configureStore from "./redux/store";

function App() {
  const { store, persistor } = configureStore();

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <MainRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
