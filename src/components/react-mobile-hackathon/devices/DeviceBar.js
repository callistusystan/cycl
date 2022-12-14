import React, { Component } from 'react';

class DeviceBar extends Component {
    render() {
        return (
            <div
            id="bottomBar"
                className={`device-bar ${this.props.position}`}
                style={{
                    width: '100%',
                    height: 72,
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: this.props.position === 'bottom' ? '1px solid' : undefined,
                    borderBottom: this.props.position === 'top' ? '1px solid' : undefined,
                    borderColor: 'rgba(0,0,0,.12)',
                    padding: '8px 8px 6px 8px',
                    zIndex: 100,
                    ...this.props.style
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default DeviceBar;
