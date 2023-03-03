import Popup from 'reactjs-popup';
import Button from '~/Components/Button';
import { useState } from 'react';
import classNames from 'classnames/bind';
import Style from './PopupSign.module.scss';
import { FacebokIcon, GoogleIcon, IconX, UserIcon } from '~/Components/Icons';
import Login from './FormLogic/Login';
import Signup from './FormLogic/Signup';

function PopupSign({ title }) {
    var cx = classNames.bind(Style);
    //logic popup
    const [isOpen, setIsOpen] = useState(false);
    const [handleLogin, setHandleLogin] = useState(true);
    const [handleSignup, setHandleSignup] = useState(true);
    const [handleSwitch, setHandleSwitch] = useState(true);

    //logic popup
    const togglePopup = () => {
        setIsOpen(!isOpen);
        setHandleSwitch(true);
        setHandleLogin(true);
        setHandleSignup(true);
    };

    const toggleSwitch = () => {
        setHandleSwitch(!handleSwitch);
        setHandleLogin(true);
        setHandleSignup(true);
    };

    const toggleHandleLogin = () => {
        setHandleLogin(!handleLogin);
    };
    const toggleHandleSignup = () => {
        setHandleSignup(!handleSignup);
    };

    return (
        <div className={cx('wrapper')}>
            {title === '+ Upload' && (
                <Button className={cx('btn-text')} text onClick={togglePopup}>
                    {title}
                </Button>
            )}{' '}
            {title === 'Log in' && (
                <Button
                    className={cx('btn-primary')}
                    primary
                    onClick={togglePopup}
                >
                    {title}
                </Button>
            )}
            {title === 'Log In' && (
                <Button
                    className={cx('btn-outline')}
                    outline
                    onClick={togglePopup}
                >
                    {title}
                </Button>
            )}
            <Popup open={isOpen} position={'right bottom'} closeOnDocumentClick>
                <div className={cx('popup')}>
                    {handleSwitch ? (
                        <>
                            {handleLogin ? (
                                <>
                                    <span
                                        className={cx('close')}
                                        onClick={togglePopup}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <h1 className={cx('heading')}>
                                        Get more of what you love when you log
                                        in to TikTok
                                    </h1>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-1')}
                                        onClick={toggleHandleLogin}
                                    >
                                        <UserIcon
                                            className={cx('icon')}
                                        ></UserIcon>
                                        Use phone / email / username
                                    </Button>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-1')}
                                    >
                                        <FacebokIcon
                                            className={cx('icon')}
                                        ></FacebokIcon>
                                        Continues With Facebook
                                    </Button>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-2')}
                                    >
                                        <GoogleIcon
                                            className={cx('icon')}
                                        ></GoogleIcon>
                                        Continues With Google
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <span
                                        className={cx('back-sign')}
                                        onClick={setHandleLogin}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <span
                                        className={cx('close-sign')}
                                        onClick={togglePopup}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <Login></Login>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            {handleSignup ? (
                                <>
                                    {' '}
                                    <span
                                        className={cx('close')}
                                        onClick={togglePopup}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <h1 className={cx('heading')}>
                                        Sign up for TikTok
                                    </h1>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-1')}
                                        onClick={toggleHandleSignup}
                                    >
                                        <UserIcon
                                            className={cx('icon')}
                                        ></UserIcon>
                                        Use phone or email
                                    </Button>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-1')}
                                    >
                                        <FacebokIcon
                                            className={cx('icon')}
                                        ></FacebokIcon>
                                        Continues With Facebook
                                    </Button>
                                    <Button
                                        text
                                        className={cx('btn-choice-sign-2')}
                                    >
                                        <GoogleIcon
                                            className={cx('icon')}
                                        ></GoogleIcon>
                                        Continues With Google
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <span
                                        className={cx('back-sign')}
                                        onClick={setHandleLogin}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <span
                                        className={cx('close-sign')}
                                        onClick={togglePopup}
                                    >
                                        <IconX></IconX>
                                    </span>
                                    <Signup></Signup>
                                </>
                            )}
                            <p class={cx('policy')}>
                                By continuing, you agree to TikTok’s{' '}
                                <a
                                    href="https://www.tiktok.com/legal/terms-of-use?lang=en"
                                    class={cx('policy-link')}
                                >
                                    Terms of Service
                                </a>{' '}
                                and confirm that you have read TikTok’s{' '}
                                <a
                                    href="https://www.tiktok.com/legal/privacy-policy?lang=en"
                                    class={cx('policy-link')}
                                >
                                    Privacy Policy
                                </a>
                                .
                            </p>
                        </>
                    )}

                    <div className={cx('footer')}>
                        <p>
                            {handleSwitch
                                ? 'Don’t have an account? '
                                : 'Already have an account? '}
                            <span
                                className={cx('sign-up')}
                                onClick={toggleSwitch}
                            >
                                {handleSwitch ? 'Sign up' : 'Log in'}
                            </span>
                        </p>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default PopupSign;