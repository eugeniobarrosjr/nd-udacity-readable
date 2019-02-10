import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCategories } from '../../actions/categories';
import App from '../../components/App';

const mapStateToProps = state => ({
  categories: state.categories,
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCategories },
  )(App),
);
