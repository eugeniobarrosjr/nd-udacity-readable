import {
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
  REQUEST_COMMENTS,
  RECEIVE_COMMENTS,
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT_SUCCESS,
  OPEN_COMMENT_EDIT_FORM,
  CLOSE_COMMENT_EDIT_FORM,
} from '../actions/comments.creator';

const initialState = {
  isFetching: false,
  comments: [],
  comment: {
    isEditing: false,
    data: {},
  },
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comments: [...state.comments, action.comment],
      });
    case OPEN_COMMENT_EDIT_FORM:
      return Object.assign({}, state, {
        comment: { ...state.comment, isEditing: true, data: action.comment },
      });
    case CLOSE_COMMENT_EDIT_FORM:
      return Object.assign({}, state, {
        comment: { ...state.comment, isEditing: false, data: {} },
      });
    case EDIT_COMMENT:
      return state;
    case EDIT_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        comment: { ...state.comment, isEditing: false, data: action.comment },
        comments: state.comments.map(comment =>
          comment.id === action.comment.id
            ? { ...comment, body: action.comment.body }
            : comment,
        ),
      });
    case DELETE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.filter(
          comment => comment.id !== action.commentId,
        ),
      });
    case REQUEST_COMMENTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_COMMENTS:
      return Object.assign({}, state, {
        isFetching: false,
        comments: action.comments,
      });
    case UPVOTE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment =>
          comment.id === action.comment.id
            ? { ...comment, voteScore: ++comment.voteScore }
            : comment,
        ),
      });
    case DOWNVOTE_COMMENT:
      return Object.assign({}, state, {
        comments: state.comments.map(comment =>
          comment.id === action.comment.id
            ? { ...comment, voteScore: --comment.voteScore }
            : comment,
        ),
      });
    default:
      return state;
  }
};

export default comments;
