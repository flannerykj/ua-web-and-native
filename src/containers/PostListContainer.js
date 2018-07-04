import { connect } from 'react-redux';

import { getPosts } from '../actions/posts'
import HelpButtonContainer from './HelpButtonContainer';

class HelpButton extends React.Component {
    render() {
        return (
            <HelpButtonContainer { ...this.props }/>
        );
    }
}

HelpButton.propTypes = {
    helpRequests: PropTypes.number.isRequired,
    helpRequested: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
    helpRequests: getHelpRequestsNumber(store),
});

export default connect(mapStateToProps, { helpRequested })(HelpButton)
