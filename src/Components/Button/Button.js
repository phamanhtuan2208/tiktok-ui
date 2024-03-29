import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Style from './Button.module.scss';
import { Link } from 'react-router-dom';

import IOSTouch from '~/Components/Button/IOSTouch';

const cx = classNames.bind(Style);

function Button({
    to,
    href,
    children,
    primary = false,
    white = false,
    outline = false,
    noneBtn = false,
    blackShadowBtn = false,
    noneBtnColorRed = false,
    onClick,
    small = false,
    Large = false,
    text = false,
    disable = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    switchButton,
    ...passProps
}) {

    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    //remove event listener when button is disable
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary, //button style 1
        outline, //button style 2
        noneBtn, //button style 3
        noneBtnColorRed, //button style 3
        text, //button style 7
        white, //button style 4
        rounded, //button style 6
        blackShadowBtn, //button shadow
        small, //size small button
        Large, //size big button
        [className]: className,
        disable,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {switchButton && (
                <IOSTouch
                ></IOSTouch>
            )}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    white: PropTypes.bool,
    outline: PropTypes.bool,
    blackShadowBtn: PropTypes.bool,
    noneBtnColorRed: PropTypes.bool,
    onClick: PropTypes.func,
    small: PropTypes.bool,
    Large: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    switchButton: PropTypes.bool,
};

export default Button;
