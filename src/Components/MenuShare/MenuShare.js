import Style from './MenuShare.module.scss';
import classNames from 'classnames/bind';
import Menu from '../Popper/Menu/Menu';
import {
    Embed,
    FacebokIcon,
    WhatsApp,
    Twitter,
    CopyLink,
    Linkedln,
    Reddit,
    Telegram,
    Email,
    Line,
    Pinterest,
} from '../Icons';

const SHARE = [
    {
        icon: <Embed width={'26px'} height={'26px'}></Embed>,
        title: 'Embed',
    },
    {
        icon: <FacebokIcon width={'2.6rem'} height={'2.6rem'}></FacebokIcon>,
        title: 'Share to Facebook',
        to: 'https://www.facebook.com/',
    },
    {
        icon: <WhatsApp width={'26px'} height={'26px'}></WhatsApp>,
        title: 'Share to WhatsApp',
        to: 'https://api.whatsapp.com/',
    },
    {
        icon: <Twitter width={'26px'} height={'26px'}></Twitter>,
        title: 'Share to Twitter',
    },
    {
        icon: <CopyLink width={'26px'} height={'26px'}></CopyLink>,
        title: 'Copy link',
        copy: '/:nickname',
    },
    {
        icon: <Linkedln width={'26px'} height={'26px'}></Linkedln>,
        title: 'Share to Linkedln',
    },
    {
        icon: <Reddit width={'26px'} height={'26px'}></Reddit>,
        title: 'Share to Reddit',
        to: 'https://www.reddit.com/',
    },
    {
        icon: <Telegram width={'26px'} height={'26px'}></Telegram>,
        title: 'Share to Telegram',
    },
    {
        icon: <Email width={'26px'} height={'26px'}></Email>,
        title: 'Share to Email',
    },
    {
        icon: <Line width={'26px'} height={'26px'}></Line>,
        title: 'Share to Line',
    },
    {
        icon: <Pinterest width={'26px'} height={'26px'}></Pinterest>,
        title: 'Share to Pinterest',
    },
];

function MenuShare({ icon }) {
    const cx = classNames.bind(Style);

    return (
        <div className={cx('share-item')}>
            <Menu items={SHARE} classBody={'menu-share'}>
                <button className={cx('menuShare-btn')}>{icon}</button>
            </Menu>
        </div>
    );
}

export default MenuShare;
