import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../../resources/img/logo5.png';
import refreshIcon from '../../../resources/img/iconRefresh.png';
import Analytics from '../../../Analytics';
import Posts from './Posts';
import { UserStatusContext } from '../../../context/UserStatusContext';
import LoadingLogo from './LoadingLogo';
import UserSearch from '../../gameConfigurator/components/UserSearch/UserSearch';

import icon1px from '../../../resources/img/1px.png';
import '../styles/FeedViewer.scss';

const STATUS_LOADING = 0;
const STATUS_LOADED = 1;

function FeedViewer({uid}) {
    const { t } = useTranslation(['main'])
    const fb = window.crawlear.fb
    const fbBase = window.crawlear.fbBase
    const [feedPosts, setFeedPosts] = React.useState([])
    const [status, setStatus] = React.useState(STATUS_LOADING)
    const [isVisible, setIsVisible] = React.useState(false)
    const { isUserLoged } = React.useContext(UserStatusContext)
    const navigate = useNavigate()

    const getData = React.useCallback(() => {
        isVisible && isUserLoged && fb.getPostsFromFollowFeed(uid, (data)=>{
            setFeedPosts([...data])
            setStatus(STATUS_LOADED)
        }, ()=>{})
    }, [fb, isVisible, isUserLoged, uid])

    React.useEffect(()=>{
        getData()
        isVisible && Analytics.pageview(`/feedviewer/`)
    }, [isVisible, isUserLoged, uid, getData])

    function refreshContent() {
        setStatus(STATUS_LOADING)
        getData()
    }

    function removePostClick(id) {
        id && fb.removePost(id, ()=>{
            const newUserPosts = feedPosts.filter((elem)=>{
                return elem.pid !== id
            });

            setFeedPosts(newUserPosts)
            Analytics.event('post','removed')
        }, ()=>{})
    }

    function onScreen(visible) {
        visible && setIsVisible(visible)
    }

    function onUserClick(uid) {
        navigate(`/profile?uid=${uid}`)
    }

    if (status===STATUS_LOADED && feedPosts.length && isVisible) {
        return <div className="feedViewer">
            {!fbBase.isUserLogged() ? <a rel="noreferrer"  href="https://crawlear.com" target="_blank"><img src={logo} className="notLoggedLogo" alt="web logo"></img></a> : <>
                <div className='headerText bold'>{t('description.buscarusuario')}</div>
                <UserSearch onUserClick={onUserClick}
                    mainText={t('content.puedesbuscarusuarios')}
                    secondaryText={t('content.clickenusuariooseguir')}
                    iconSend={icon1px} />
            </>}
            <div className="posts">
                <div className='headerText bold sectionTitle'>{t('description.murodefollows')}</div>

                <div className="refreshButton" onClick={refreshContent}><img src={refreshIcon} alt="refresh icon"></img>
                </div>
                <Posts posts={feedPosts} readOnly={true} removePostClick={removePostClick} />
            </div>
        </div>
    } else if(status===STATUS_LOADED && isVisible) {
        return <div className="posts">
                <div className='headerText bold sectionTitle'>{t('description.murodefollows')}</div>
                <UserSearch onUserClick={onUserClick}
                    mainText={t('content.puedesbuscarusuarios')} 
                    secondaryText={t('content.clickenusuariooseguir')}
                    iconSend={icon1px} />
                
                <br />
                <div className='rounded rounded3'>{t('content.nofeedpost')}</div>
            </div>
    } else {
        return <LoadingLogo onVisible={onScreen}/>
    }
}

export default FeedViewer