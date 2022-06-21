import * as React from 'react';
import { useTranslation } from 'react-i18next';
import '../resources/css/UserPoster.scss';
import Utils from '../Utils';
import ErrorBox from './ErrorBox';

function UserPoster({onPostEntry}) {
    const { t } = useTranslation();
    const gameOptionElements = [];
    const firebase = window.crawlear.fb;
    const [errorMessage, setErrorMessage] = React.useState("");
        const gameListRef = React.useRef([]);
    const [state, setState] = React.useState({
        url: '',
        text: '',
        gid: -1,
        gameName: '',
        date: new Date().toString()
    });

    React.useEffect(()=>{
        const uid = window.crawlear.user.uid;

        firebase.getGamesFromUser(uid, (games)=>{
            if (games.length) {
                gameListRef.current = games.concat(gameListRef.current);
            }
        }, ()=>{});
        firebase.getGamesFromJudge(uid, (games)=>{
            if (games.length) {
                gameListRef.current = games.concat(gameListRef.current);
            }
        }, ()=>{});
        firebase.getGamesFromDirector(uid, (games)=>{
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
            date: new Date().toString()
        });
    }

    function formSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!window.crawlear || !window.crawlear.user || !window.crawlear.user.uid) return;
        
        if (state.text.length <=0) { 
            setErrorMessage(t('error.noposttext'));
        } else if ((state.url.length<=0) || (state.url.length>0) && (Utils.isYoutubeUrl(state.url) || Utils.isInstagramUrl(state.url))) {
            firebase.setPost(window.crawlear.user.uid, state.url, state.date, state.text, state.gid, (post)=>{
                setErrorMessage("");
                clearState();
                onPostEntry && onPostEntry(post);
            }, ()=>{});  
        } else if (state.url.length>0) {
            setErrorMessage(t('error.nosocialurl'));
        }

        //    setErrorMessage(t('error.noposturl'));
    }

    gameOptionElements.push(<option key="initialValue" value={-1}>{t('description.noasignarjuego')}</option>);
    gameListRef.current && gameListRef.current.forEach((element, index) => {
        gameOptionElements.push(<option key={index} value={element.gid}>{element.name}</option>);
    });

    return <div className="postForm rounded rounded3">
            <div className='headerText bold'>{t('description.publicar')}</div>

            <form className='postForm-form' onSubmit={formSubmit}>
                <label className="postForm-label">URL: <input type="text" name="url" onChange={urlChange} value={state.url} /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.urlEmbed')}</span>
                <br /><br />
                
                <label className="postForm-label">{t('description.texto')}: <textarea value={state.text} onChange={textChange} type="text" name="text" /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.textEmbed')}</span>
                <br /><br />
                
                <label className="postForm-label">{t('description.juego')}: <select onChange={onGameChange}>{gameOptionElements}</select></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.gameEmbed')}</span>
                <br /><br />

                <ErrorBox message={errorMessage} />
                <input type="submit" value= {t('description.aceptar')} className='submit importantNote' />
            </form>
        </div>;
}

export default UserPoster;