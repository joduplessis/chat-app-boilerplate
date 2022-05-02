import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AvatarComponent extends Component {
    constructor(props) {
        super(props);

        this.getStatusColor = this.getStatusColor.bind(this);
    }

    getStatusColor(status) {

        switch(status) {
            case "online":
                return '#1FC588';
                break;
            case "away":
                return '#FD8B43';
                break;
            case "busy":
                return 'red';
                break;
        }
    }

    render() {
        const images = [
            'https://digitalagencynetwork.com/wp-content/uploads/2016/03/aumcore-integrated-marketing-agency-atlanta.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/10/beyond-digital-agency.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/03/crafted-digital-creative-studio-new-york-nyc.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/10/deutsch-marketing-communications-agency-los-angeles-new-york-usa.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/03/drive-digital-award-winning-creative-digital-agency.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/03/ruckus-marketing-agency-new-york.png',
            'https://digitalagencynetwork.com/wp-content/uploads/2015/03/ustwo-global-digital-product-studio-new-york-usa.png',
            'http://word.lagraphica.com/wp-content/uploads/2014/08/Huge-1.jpg',
            'https://agencycompile.blob.core.windows.net/legacy/10455/resized_bigspaceship_logo_red_570_198.png',
            'https://i.imgur.com/nwyTuHi.jpg',
            'https://media.istockphoto.com/photos/beautiful-woman-posing-against-dark-background-picture-id638756792',
            'https://media.istockphoto.com/photos/man-casual-lifestyle-calm-solitude-concept-picture-id625388514',
            'https://media.istockphoto.com/photos/man-with-beard-picture-id625978254',
            'https://media.istockphoto.com/photos/woman-smiling-in-office-meeting-picture-id637901916',
            'https://media.istockphoto.com/photos/businessman-smiling-in-business-office-environment-picture-id637914452',
            'https://media.istockphoto.com/photos/portrait-of-a-man-picture-id629944712',
            'https://media.istockphoto.com/photos/working-picture-id641859288',
            'https://media.istockphoto.com/photos/young-woman-on-the-phone-picture-id637815476',
            ];

        const { width, height } = this.props;
        const { ui } = this.props.common;
        const borderRadius = this.props.borderRadius ? this.props.borderRadius : 200;
        const src = this.props.src ? this.props.src : images[Math.floor(Math.random()*images.length)];
        const background = this.props.background ? this.props.background : ui.dock.container.background;

        const styles = Object.assign({
            background: `${background} url(${src}) no-repeat center center`,
            backgroundSize: 'cover',
            width,
            height,
            borderRadius,
            position: 'relative',
        }, this.props.style);

        const stylesStatus = {
            background: this.getStatusColor(this.props.status),
            width: 10,
            height: 10,
            borderRadius: 500,
            position: 'absolute',
            border: `2px solid ${background}`,
            bottom: -1,
            right: -1,
            boxShadow: '0px 0px 10px 0 rgba(0, 0, 0, 0.1)'
        }

        return(
            <div style={styles} onClick={this.props.action}>
                {this.props.status &&  this.props.status!= 'default' &&
                    <div style={stylesStatus} />
                }
            </div>
        )
    }
}


const mapAvatarComponentStateToProps = (state) => ({
    common: state.common
})

const mapAvatarComponentDispatchToProps = (dispatch) => ({
})

export const Avatar = connect(
    mapAvatarComponentStateToProps,
    mapAvatarComponentDispatchToProps,
)(AvatarComponent)
