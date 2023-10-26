import * as React from 'react'
import UseGameViewer from './hooks/UseGameViewer'
import GameList from '../modules/gameManagement/components/GameList'
import { useTranslation } from 'react-i18next';

interface GameViewerProps {
    gid: string
}

function GameViewer({ gid }: GameViewerProps) {
    const { t } = useTranslation()
    const [game] = UseGameViewer(gid)

    return <GameList games={[game]} 
        readOnly={true}
        title={t('description.juego')}
        onGamePlay={() => {}} />
}

export default GameViewer;