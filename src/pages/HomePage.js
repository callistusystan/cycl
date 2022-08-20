import React, { Component } from 'react';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import { Link } from 'react-router-dom';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { BounceLoader } from 'react-spinners';
import Background from '../images/background.jpg';

class HomePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 2000);
    }

    renderLoading = () => {
        return (
            <LoadingView>
                <BounceLoader color='var(--lime)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
            <ScrollView isDark>
              <Link 
                  to="/new"
                  style={{ textDecoration: 'none', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img src="logo.svg" style={{width: 248, height: 124}} />
                <span style={{marginTop: 100, textAlign: 'center', font: 'var(--feature)', color: 'var(--cream)'}}>
                  Cycl around NSW with ease.
                </span>
              </Link>
            </ScrollView>
        );
    };

    render() {
        return (
            <div style={styles.container}>
              {this.state.ready ? this.renderBody() : this.renderLoading()}
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
        paddingTop: '30px',
        backgroundColor: 'var(--olive)',
    }
};

export default HomePage;
