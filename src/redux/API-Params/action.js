export const GET_SEARCH_TERM = "GET_SEARCH_TERM ";
export const GET_PAGE_NO = "GET_PAGE_NO";
export const GET_CATEGORY = "GET_CATEGORY";
export const GET_TYPE_DATA = "GET_TYPE_DATA";
export const GET_TIME_DATA = "GET_TIME_DATA";
export const GET_TOTAL_PAGE = "GET_TOTAL_PAGE";

const fetchSearchTerm = (name) => {
  return {
    type: GET_SEARCH_TERM,
    payload: name,
  };
};

const fetchPageNo = (page) => {
  return {
    type: GET_PAGE_NO,
    payload: page,
  };
};
const fetchCategory = (cat) => {
  return {
    type: GET_CATEGORY,
    payload: cat,
  };
};
const fetchType = (type) => {
  return {
    type: GET_TYPE_DATA,
    payload: type,
  };
};

const fetchTime = (time) => {
  return {
    type: GET_TIME_DATA,
    payload : time
  };
}

const fetchTotalPage = (pages) => {
  return {
    type : GET_TOTAL_PAGE,
    payload : pages
  }
}

export const getSearchQuery = (name) => (dispatch) => {
  dispatch(fetchSearchTerm(name));
};

export const getPage = (page) => (dispatch) => {
  dispatch(fetchPageNo(page));
};

export const getCategory = (cat) => (dispatch) => {
    dispatch(fetchCategory(cat))
}

export const getType = (type) => (dispatch) => {
    dispatch(fetchType(type))
}

export const getTime = (time) => (dispatch) => {
  dispatch(fetchTime(time));
}
export const getTotalPages = (pages) => (dispatch) => {
  dispatch(fetchTotalPage(pages))
}