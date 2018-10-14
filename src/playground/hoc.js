import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info are : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.authenticated && <p>This is private info, please don't share</p>}
            {props.authenticated && <WrappedComponent {...props} />}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AdminInfo authenticated={true} info="information here..." />, document.querySelector('#app'));