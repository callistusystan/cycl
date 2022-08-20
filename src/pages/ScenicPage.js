import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { BounceLoader } from 'react-spinners';
import RouteCard from '../components/route-card/RouteCard';
import BottomBar from '../components/bottom-bar/BottomBar';

class ProfilePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 500);
    }

    renderLoading = () => {
        return (
            <LoadingView style={{background: '#fff', position: 'absolute', zIndex: 100,}}>
                <BounceLoader color='var(--lime)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
          <div style={{flex: 1, maxHeight: '100%', display: 'flex', flexDirection: 'column' }}>
            <img src="/route1.png" style={{width: '250%',marginLeft: -260}} />
            <div
                style={{
                  background: '#fff',
                  boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
                  borderRadius: '10px 10px 40px 40px',
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: 333,
                }}>
            </div>
          </div>
        );
    };

    render() {
        return (
            <div style={styles.container}>
              {this.renderBody()}
              {this.state.ready ? null : this.renderLoading()}
            </div>
        );
    }
}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    }
};

export default ProfilePage;
