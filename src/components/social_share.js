import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

// import exampleImage from './da3d8140e097582c686c2b72bd80d582.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

class SocialShare extends Component {
  render() {
    const shareUrl = 'http://github.com';
    const title = 'GitHub';

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 15 }}>

        <div style={ styles.shareButtons }>
          <FacebookShareButton
            url={String(window.location)}
            title={"Good people make change. Call 'em up! We wanna help activate, empower and bribe with cookies. You know you're curious & we need help! call-up.herokuapp.com"}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={40}
              round />
          </FacebookShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <TwitterShareButton
            url={String(window.location)}
            title={"Good people make change. Call 'em up! We wanna help activate, empower and bribe with cookies. You know you're curious & we need help! call-up.herokuapp.com"}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={40}
              round />
          </TwitterShareButton>
        </div>


        <div style={ styles.shareButtons }>
          <WhatsappShareButton
            url={String(window.location)}
            title={"Good people make change. Call 'em up! We wanna help activate, empower and bribe with cookies."}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={40}
              round
            />
          </WhatsappShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <GooglePlusShareButton
            url={String(window.location)}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={40}
              round
              />
          </GooglePlusShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <LinkedinShareButton
            url={String(window.location)}
            title={"Good people make change. Call 'em up! We wanna help activate, empower and bribe with cookies."}
            windowWidth={750}
            windowHeight={600}
            className="Demo__some-network__share-button">
            <LinkedinIcon
              size={40}
              round
               />
          </LinkedinShareButton>
        </div>

        <div style={ styles.shareButtons }>
          <RedditShareButton
            url={String(window.location)}
            title={"Good people make change. Call 'em up! We wanna help activate, empower and bribe with cookies."}
            windowWidth={660}
            windowHeight={460}
            className="Demo__some-network__share-button"
          >
            <RedditIcon
              size={40}
              round
            />
          </RedditShareButton>
        </div>

      </div>
    );
  }
}

const styles = {
  shareButtons: {
    display: 'inline-block',
    width: 16 + '%',
    verticalAlign: 'top',
  }
}

export default SocialShare;

// <div style={ styles.shareButtons }>
//   <img src='../../images/bomb_button.svg' style={{ height: 40, width: 32}}/>
// </div>
