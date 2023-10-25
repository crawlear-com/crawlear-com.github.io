import * as React from 'react'
import UseGameViewer from './hooks/UseGameViewer'
import GameList from '../modules/gameManagement/components/GameList'
import { useTranslation } from 'react-i18next';

interface GameViewerProps {
    gid: string
}

function GameViewer({ gid }: GameViewerProps) {
    const { t } = useTranslation()
    const [game, gameProgression] = UseGameViewer(gid)

    return <GameList games={[game]} 
        gameProgressions={[gameProgression]} 
        readOnly={true}
        onConfigureGame={() => {}}
        onRemoveGame={() => {}}
        title={t('description.juego')}
        onGamePlay={() => {}} />
}

export default GameViewer;