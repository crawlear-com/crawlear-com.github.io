import * as React from 'react';

function PublicGameList(props) {
    const firebase = window.crawlear.fb;
    const [gamesList, setGameList] = React.useState([]);
    const gameListElements = [];
    
    React.useEffect(()=>{
        firebase.getPublicGames((gameList)=>{
            setGameList(gameList);
        }, ()=>{});    
    }, []);

    gamesList.forEach((game)=>{
        gameListElements.push(<div className='publicGame'>
            {game.name}
            ({game.location.latitude},{game.location.latitude})
        </div>);
    });

    return <div className='publicGameListContainer'>
        {gameListElements}
    </div>;
}

export default PublicGameList;