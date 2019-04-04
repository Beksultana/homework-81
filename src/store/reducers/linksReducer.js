import {FETCH_LINKS_SUCCESS} from "../actions/linksTypeActions";

const initialState = {
    links: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LINKS_SUCCESS:
            return {
                ...state,
                links: action.links
            };
        default:
            return state
    }
};

export default reducer;