import * as React from 'react';
import { useTranslation } from 'react-i18next';
import '../resources/css/UserPoster.scss';
import Utils from '../Utils';
import ErrorBox from './ErrorBox';

function UserPoster({onPostEntry}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
    const [errorMessage, setErrorMessage] = React.useState("");
    const [state, setState] = React.useState({
        url: '',
        text: '',
        date: new Date().toString()
    });

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

    function clearState() {
        setState({
            url: '',
            text: '',
            date: new Date().toString()
        });
    }

    function formSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!window.crawlear || !window.crawlear.user || !window.crawlear.user.uid) return;

        if (state.url.length<=0) {
            setErrorMessage(t('error.noposturl'));
        } else if (state.text.length <=0) { 
            setErrorMessage(t('error.noposttext'));
        } else if (Utils.isYoutubeUrl(state.url) || Utils.isInstagramUrl(state.url)) {
            firebase.setPost(window.crawlear.user.uid, state.url, state.date, state.text, (post)=>{
                setErrorMessage("");
                clearState();
                onPostEntry && onPostEntry(post);
            }, ()=>{});  
        } else {
            setErrorMessage(t('error.nosocialurl'));
        }
    }

    return <div className="postForm rounded rounded3">
            <div className='headerText bold'>{t('description.publicar')}</div>

            <form className='postForm-form' onSubmit={formSubmit}>
                <label className="postForm-label">URL:<input type="text" name="url" onChange={urlChange} value={state.url} /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.urlEmbed')}</span>
                <br /><br />
                <label className="postForm-label">{t('description.texto')}:<textarea value={state.text} onChange={textChange} type="text" name="text" /></label>
                <br /><span className='postForm-help bold'>{t('description.ayuda')}:</span> <span className='postForm-help'>{t('content.textEmbed')}</span>
                <br /><br />
                <ErrorBox message={errorMessage} />
                <input type="submit" value= {t('description.aceptar')} className='submit importantNote' />
            </form>
        </div>;
}

export default UserPoster;