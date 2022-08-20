import React, { Component } from 'react';
import ScrollView from '../components/react-mobile-hackathon/devices/ScrollView';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import { BounceLoader } from 'react-spinners';
import DeviceBar from '../components/react-mobile-hackathon/devices/DeviceBar';

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

    renderProfile = () => {
      return (
        <div style={{display: 'flex', width: '100%', textAlign: 'start'}}>
          <div style={{borderRadius: 32, width: 56, height: 56, background: 'var(--skies)'}} />
          <div style={{flex: 1, marginLeft: 12, display: 'flex', flexDirection: 'column', alignSelf: 'center',}}>
            <span style={{color: 'var(--dark)', font: 'var(--title)'}}>Billy Lowe</span>
            <span style={{marginTop: 4, color: 'var(--slate)', font: 'var(--copy16)'}}>Rookie</span>
          </div>
          <img src="gear.svg" style={{height: 22}}/>
        </div>
      );
    };

    renderPlanARoute = () => {
      return (
        <div style={{width: '100%', marginTop: 24, boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)', borderRadius: 10, padding: '8px 18px', display: 'flex', alignItems: 'center'}}>
          <img src="add_location.svg" style={{marginLeft: 18, height: 22}}/>
          <span style={{marginLeft: 16, color: 'var(--slate)', font: 'var(--copy16)'}}>Plan a route...</span>
        </div>
      );
    };

    renderBody = () => {
        return (
          <div style={{flex: 1, display: 'flex', flexDirection: 'column' }}>
            <ScrollView style={{height: '200%', padding: '32px 24px 0 24px', marginBottom: 72, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
              {this.renderProfile()}
              {this.renderPlanARoute()}
              <span style={{marginTop: 30, color: 'var(--dark)', font: 'var(--title)', alignSelf: 'flex-start'}}>Around you</span>
              <span style={{marginTop: 32, color: 'var(--dark)', font: 'var(--title)', alignSelf: 'flex-start'}}>Find suggested routes</span>
            </ScrollView>
            <DeviceBar
                title='Bottom Bar'
                position='bottom'
                titleStyle={{
                    color: 'rgb(250, 250, 255)'
                }}
                style={{
                    justifySelf: 'flex-end',
                    boxShadow: '0px 0px 4px rgba(151, 151, 151, 0.4)',
                }}>
            </DeviceBar>
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
        paddingTop: '30px',
        backgroundColor: '#fff',
    }
};

export default ProfilePage;
