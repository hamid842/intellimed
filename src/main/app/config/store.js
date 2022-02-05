import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import reducers from "@shared/reducers/index";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return {store};
};
