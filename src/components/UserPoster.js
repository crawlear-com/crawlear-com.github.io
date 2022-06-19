import * as React from 'react';
import { useTranslation } from 'react-i18next';
import '../resources/css/UserPoster.scss';
import Spinner from './Spinner';

function UserPoster({onPostEntry}) {
    const { t } = useTranslation();
    const firebase = window.crawlear.fb;
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

        firebase.setPost(window.crawlear.user.uid, state.url, state.date, state.text, (post)=>{
            onPostEntry && onPostEntry(post);
            clearState();
        }, ()=>{});
    }

    return <div className="postForm rounded rounded3">
            <div className='headerText bold'>{t('description.publicar')}</div>

            <form className='postForm-form' onSubmit={formSubmit}>
                <label>URL:<input type="text" name="url" onChange={urlChange} /></label>
                <label>{t('description.texto')}:<textarea onChange={textChange} type="text" name="text" /></label>
                <input type="submit" value="Submit" className='importantNote' />
            </form>
        </div>;
}

export default UserPoster;