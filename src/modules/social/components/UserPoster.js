import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Utils from '../../../Utils';
import ErrorBox from '../../../components/ErrorBox';
import Spinner from '../../../components/Spinner';
import * as firestore from 'firebase/firestore';

import '../styles/UserPoster.scss';

const WAITING = 0;
const POSTING = 1;

function UserPoster({onPostEntry, isOpened}) {
    const { t } = useTranslation(['main']);
    const firebase = window.crawlear.fb;
    const gameOptionElements = [];
    const [errorMessage, setErrorMessage] = React.useState("");
    const [formStatus, setFormStatus] = React.useState(WAITING);
    const gameListRef = React.useRef([]);
    const [state, setState] = React.useState({
        url: '',
        text: '',
        gid: -1,
        gameName: '',
        date: firestore.Timestamp.fromDate(new Date())
    });

    React.useEffect(()=>{
        const firebase = window.crawlear.fb;
        const uid = window.crawlear.user.uid;

        firebase.getGamesFromUser(uid, true, (games)=>{
            if (games.length) {
                gameListRef.current = games.concat(gameListRef.current);
            }
        }, ()=>{});
        firebase.getGamesFromJudge(uid, true, (games)=>{
            if (games.length) {
                gameListRef.current = games.concat(gameListRef.current);
            }
        }, ()=>{});
    },[]);

    function urlChange(event) {
        setState({
            ...state,
            url: event.target.value
        });
    }

    function textChange(event) {
        setState({
            ...state,
            text: event.target.value
        });
    }

    function onGameChange(event) {
        setState({
            ...state,
            gameName: event.target[event.target.selectedIndex].text,
            gid: event.target[event.target.selectedIndex].value
        });
    }

    function clearState() {
        setState({
            url: '',
            text: '',
            gid: -1,
            gameName: '',
            date: firestore.Timestamp.fromDate(new Date())
        });
    }

    function formSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!window.crawlear || !window.crawlear.user || !window.crawlear.user.uid) return;

        if (state.text.length <=0) {
            setErrorMessage(t('error.noposttext'));
        } else if ((state.url.length<=0) || ((state.url.length>0) &&
            (Utils.isYoutubeUrl(state.url) ||
             Utils.isInstagramUrl(state.url) ||
             //Utils.isFacebookUrl(state.url) ||
             Utils.isTiktokUrl(state.url)))) {
                setFormStatus(POSTING);
                firebase.setPost(window.crawlear.user.uid, state.url, state.date, state.text, state.gid, (post)=>{
                    setFormStatus(WAITING);
                    setErrorMessage("");
                    clearState();
                    onPostEntry && onPostEntry(post);
                }, ()=>{
                    setFormStatus(WAITING);
                    clearState();
                });
        } else if (state.url.length>0) {
            setErrorMessage(t('error.nosocialurl'));
        }
    }

    function onHeaderClick(event) {
        const header = event.target;

        header.parentElement.classList.toggle('closed');
    }

    gameOptionElements.push(<option key="initialValue" value={-1}>{t('description.noasignarjuego')}</option>);
    gameListRef.current && gameListRef.current.forEach((element, index) => {
        gameOptionElements.push(<option key={index} value={element.gid}>{element.name}</option>);
    });

    return <div className={`postForm rounded rounded3 ${isOpened ? '' : 'closed'}`}>
            <div className='headerText bold' onClick={onHeaderClick}>{t('description.publicar')}</div>

            <form className='postForm-form' onSubmit={formSubmit}>
                <label className="postForm-label">URL: <input type="text" name="url" onChange={urlChange} value={state.url} /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.urlEmbed')}</span>
                <br />
                
                <label className="postForm-label">{t('description.texto')}: <textarea value={state.text} onChange={textChange} type="text" name="text" /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.textEmbed')}</span>
                <br /><br />
                
                <label className="postForm-label">{t('description.juegopublico')}: <select onChange={onGameChange}>{gameOptionElements}</select></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.gameEmbed')}</span>
                <br /><br />

                <ErrorBox message={errorMessage} />
                {formStatus===WAITING ? <input type="submit" value={t('description.publicar')} className='submit importantNote' /> : <Spinner />}
                
            </form>
        </div>;
}

export default UserPoster;