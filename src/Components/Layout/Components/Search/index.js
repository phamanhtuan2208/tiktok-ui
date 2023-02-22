import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useState, useRef } from 'react';
import ClassNames from 'classnames/bind'; ///them dau - khi dat ten classname

import AccountItem from '~/Components/AccountItem';
import { Wrapper as PropperWrapper } from '~/Components/Popper';
import Style from './Search.module.scss';

import 'tippy.js/dist/tippy.css';

function Search() {
    const cx = ClassNames.bind(Style);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        //giai quyet ki tu trang khi co ki tu dau tien (khac khoang trang)
        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                searchValue,
            )}&type=less`,
        ) //api
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
        //handlehideResoult()
    };

    const handlehideResoult = () => {
        setShowResult(false);
    };

    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    return (
        <HeadlessTippy
            visible={showResult && searchResult.length > 0}
            interactive="true"
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <span className={cx('search-title')}>
                            Accounts
                            {searchResult.map((result) => (
                                <AccountItem
                                    key={result.id}
                                    data={result}
                                ></AccountItem>
                            ))}
                        </span>
                    </PropperWrapper>
                </div>
            )}
            onClickOutside={handlehideResoult} //an khi click ra ngoai
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue ? searchValue.trimStart() : ''}
                    placeholder="Search account and videos"
                    spellCheck={false}
                    onChange={handleSearchValue}
                    onFocus={() => setShowResult(true)}
                ></input>
                {!!searchValue.trimStart() && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;