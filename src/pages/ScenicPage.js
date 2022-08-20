import React, { Component } from 'react';
import LoadingView from '../components/react-mobile-hackathon/devices/LoadingView';
import Button from '../components/button/Button';
import { BounceLoader } from 'react-spinners';

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
                  display: 'flex', 
                  padding: '0 24px',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
              <div style={{background: 'var(--cream)', width: 55, height: 4, borderRadius: 10, marginTop: 14}} />
              <div style={{padding: '24px 16px 0', display: 'flex', flexDirection: 'column'}}>
                <span style={{color: 'var(--lime)', font: 'var(--copy14)', textAlign: 'left'}}>
                  45 minutes  •  2.4km
                </span>
                <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--title)'}}>A scenic journey to Opera House</span>
                <span style={{marginTop: 4, color: 'var(--dark)', font: 'var(--copy16)'}}>
                  Cycle through a traffic-free route and enjoy great views and a cuppa at the end!
                </span>

                <span style={{marginTop: 12, color: 'var(--slate)', font: 'var(--copy14)'}}>
                  address line 1 2 3
                </span>

              </div>

              <div style={{marginTop: 16, width: '100%', height: 1, backgroundColor: 'var(--olive)'}} />
              
              <div style={{width: '100%', marginTop: 16, display: 'flex', justifyContent: 'space-around', alignItems: 'center',}}>
                <span style={{color: 'var(--dark)', font: 'var(--copy14)'}}>
                  Estimated arrival time:
                </span>
                <span style={{color: 'var(--dark)', font: 'var(--title)'}}>
                  4:52pm
                </span>
              </div>

              <div style={{width: '100%', flex: 1,}} />

              <div style={{width: '100%', display: 'flex', marginBottom: 19,}}>
                <Button variant="secondary" to="/scenic_reviews" label="Reviews" style={{marginRight: 8}} />
                <Button to="/scenic_start" label="Start ride!" style={{marginLeft: 8}} />
              </div>
              
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
