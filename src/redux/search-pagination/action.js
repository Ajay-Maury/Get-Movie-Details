export const GET_SEARCH_TERM = "GET_SEARCH_TERM ";
export const GET_PAGE_NO = "GET_PAGE_NO";

const getSearchTerm = (name) => {
  return {
    type: GET_SEARCH_TERM,
    payload: name,
  };
};

const getPageNo = (page) => {
  return {
    type: GET_PAGE_NO,
    payload: page,
  };
};

export const getSearchTermData = (name) => (dispatch) => {
  dispatch(getSearchTerm(name));
};

export const getPageNoData = (page) => (dispatch) => {
  dispatch(getPageNo(page));
};
