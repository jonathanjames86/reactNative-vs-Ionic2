var React  = require('react'),
    Socket = require('react-socket').Socket;

module.exports = module.exports = React.createClass({
    render: function () {

        return (
            <div>
                <Socket url="your-socket-endpoint:port?"/>
            </div>
        );
    }
});
