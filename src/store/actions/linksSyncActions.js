import axios from '../../axios-api';
import {FETCH_LINKS_SUCCESS} from "./linksTypeActions";

export const fetchLinksSuccess = links => ({type: FETCH_LINKS_SUCCESS, links});

export const linkPost = (urlData) => {
  return dispatch => {
      return axios.post('/links', urlData).then(response => {
          dispatch(fetchLinksSuccess(response.data))
      }).catch(error => error)
  }
};