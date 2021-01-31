import React from 'react';

// Use Redux
import { connect } from 'react-redux';

function Page() {
    return (
        <div>
            <h1>Page Page</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
