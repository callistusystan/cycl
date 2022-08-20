import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { BounceLoader } from 'react-spinners';
import Button from '../components/button';
import NewCyclist from '../assets/new_cyclist.svg';

class HomePage extends Component {

    state = {
        ready: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ ready: true }), 500);
    }

    renderLoading = () => {
        return (
            <LoadingView style={{background: 'var(--olive)', position: 'absolute', zIndex: 100,}}>
                <BounceLoader color='var(--lime)' loading={!this.state.ready} />
            </LoadingView>
        );
    };

    renderBody = () => {
        return (
            <ScrollView isDark style={{paddingTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              <img src="/logo.svg" style={{width: 74, height: 37}} />

              <span style={{marginTop: 68, font: 'var(--title)', color: 'var(--lime)', width: 296}}>
                Are you a seasoned cyclist or just starting out?
              </span>
              <span style={{marginTop: 68, font: 'var(--feature)', color: 'var(--cream)'}}>New to cycling</span>
              <img src={NewCyclist} style={{marginTop: 30, width: 185}} />
              <span style={{marginTop: 32, font: 'var(--copy16)', color: 'var(--cream)'}}>
                “Cycling sounds fun, <br/>
                but I don’t know where to start!”
              </span>

              <Button label="Next" style={{marginTop: 110}} />
            </ScrollView>
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
        paddingTop: '30px',
        backgroundColor: 'var(--olive)',
    }
};

export default HomePage;
