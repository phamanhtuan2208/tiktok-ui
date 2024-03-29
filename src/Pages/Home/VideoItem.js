import classNames from 'classnames/bind';
import images from '~/assets/images';
import Image from '~/Components/Image';
import Style from './Home.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/Components/Button';
import { MusicNote } from '~/Components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import AccountPreview from './AccountPreview';
import Cookies from 'js-cookie';
import * as CheckFollowingService from '~/Service/Following/CheckFollowingService';
import * as FollowingService from '~/Service/Following/FollowingService';
import PopupSign from '~/Components/PopupSign';
import * as unFollowingProfile from '~/Service/Following/UnFollowingService';
import Interact from './Interact';

function VideoItem({ data }) {
    const cx = classNames.bind(Style);

    const playerRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const { ref, inView } = useInView({
        threshold: 0.7,
        delay: 500,
    });

    useEffect(() => {
        if (inView) {
            setIsPlaying(true);
        } else if (!inView) {
            setIsPlaying(false);
        }
    }, [inView]);

    const previewUser = () => {
        return (
            <div>
                <PropperWrapper>
                    <AccountPreview data={data.user}></AccountPreview>
                </PropperWrapper>
            </div>
        );
    };

    //api check following (logic following)
    const [checkFollowing, setCheckFollowing] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            CheckFollowingService.CheckFollowing({
                token: Cookies.get('isToken'),
                page: page,
            })
                .then((data) => {
                    setCheckFollowing((prev) => [...prev, ...data]);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        if (page < checkFollowing.length / 5) {
            setPage(page + 1);
        }
    }, [checkFollowing.length, page]);

    const checkFollowingID = [];
    for (let i = 0; i < checkFollowing.length; i++) {
        checkFollowingID.push(checkFollowing[i].id);
    }

    const checkFollowingStart = checkFollowingID.includes(data.user.id);

    const [changeFollowing, setChangeFollowing] = useState();

    useLayoutEffect(() => {
        setChangeFollowing(checkFollowingStart);
    }, [checkFollowingStart]);

    //api following & logic signup
    const handleFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                await FollowingService.Following({
                    token: token,
                    id_nickname: data.user.id,
                });
            } catch (error) {
                console.log(error);
            }
            setChangeFollowing(!changeFollowing);
        }
    };

    //api unfollowing
    //const [changeUnFollowing, setChangeUnFollowing] = useState(true);
    const handleUnFollowing = async () => {
        const token = Cookies.get('isToken');
        if (
            Cookies.get('isToken') !== undefined &&
            Cookies.get('isToken') !== 'null'
        ) {
            try {
                unFollowingProfile.UnFollowing({
                    token: token,
                    nickname: data.user.id,
                });
            } catch (error) {
                console.log(error);
            }
        }
        setChangeFollowing(!changeFollowing);
    };

    Cookies.set('idCheck', data?.user?.id);

    return (
        <div className={cx('wrapper')}>
            <div>
                <Tippy
                    render={previewUser}
                    interactive
                    delay={[700, 700]}
                    offset={[0, -5]}
                    placement={'bottom-start'}
                    hideOnClick={true}
                >
                    <div className={cx('content')}>
                        <Link to={`/@${data.user.nickname}`}>
                            <Image
                                className={cx('avatar')}
                                src={data.user.avatar}
                                alt={images.NoImage}
                            ></Image>
                        </Link>
                        <Link
                            className={cx('id_nickname')}
                            to={`/@${data.user.nickname}`}
                        >
                            <h3 className={cx('id')}>
                                {data.user.first_name} {data.user.last_name}
                                {data.user.tick && (
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        style={{
                                            color: '#20d5ec',
                                            width: '14px',
                                            height: '14px',
                                        }}
                                    ></FontAwesomeIcon>
                                )}
                            </h3>
                            {data.user.tick && (
                                <FontAwesomeIcon
                                    className={cx('tick')}
                                    icon={faCircleCheck}
                                ></FontAwesomeIcon>
                            )}
                            <h4 className={cx('nickname')}>
                                {data.user.nickname}
                            </h4>
                        </Link>
                    </div>
                </Tippy>
            </div>
            <div>
                {checkFollowingID.includes(data.user.id) === false ? (
                    <>
                        {Cookies.get('isToken') !== undefined &&
                        Cookies.get('isToken') !== 'null' ? (
                            <div>
                                {changeFollowing === false ? (
                                    <div className={cx('btn')}>
                                        <Button
                                            outline
                                            className={cx('btn-follow')}
                                            onClick={handleFollowing}
                                        >
                                            Follow
                                        </Button>
                                    </div>
                                ) : (
                                    <div className={cx('btn')}>
                                        <Button
                                            text
                                            className={cx('btn-follow')}
                                            onClick={handleUnFollowing}
                                        >
                                            Following
                                        </Button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className={cx('btn-unsign-follow')}>
                                <PopupSign
                                    className="btn-follow"
                                    title="Follow"
                                ></PopupSign>
                            </div>
                        )}
                    </>
                ) : (
                    <div>
                        {changeFollowing ? (
                            <div className={cx('btn')}>
                                <Button
                                    text
                                    className={cx('btn-follow')}
                                    onClick={handleUnFollowing}
                                >
                                    Following
                                </Button>
                            </div>
                        ) : (
                            <div className={cx('btn')}>
                                <Button
                                    outline
                                    className={cx('btn-follow')}
                                    onClick={handleFollowing}
                                >
                                    Follow
                                </Button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <span className={cx('description')}>
                {data.description}
                <strong className={cx('hashtag')}>#vietnam</strong>
            </span>
            <h4 className={cx('music-tag')}>
                <MusicNote></MusicNote> {data.music}
            </h4>
            <div className={cx('position-fix')}>
                <VideoPlayer
                    url={data.file_url}
                    ref={playerRef}
                    isPlaying={isPlaying}
                    volume={0.2}
                ></VideoPlayer>
                <div className={cx('interact')} ref={ref}>
                    <Interact data={data}></Interact>
                </div>
            </div>
            <hr className={cx('hr-item')}></hr>
        </div>
    );
}

VideoItem.propTypes = {
    data: PropTypes.shape({
        user: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            nickname: PropTypes.string.isRequired,
            tick: PropTypes.bool,
        }).isRequired,
        description: PropTypes.string.isRequired,
        music: PropTypes.string.isRequired,
        file_url: PropTypes.string.isRequired,
        likes_count: PropTypes.number.isRequired,
        comments_count: PropTypes.number.isRequired,
        shares_count: PropTypes.number.isRequired,
    }).isRequired,
};

export default VideoItem;
