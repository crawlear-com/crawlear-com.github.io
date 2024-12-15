import * as React from 'react'
import { useTranslation } from "react-i18next";

function useGameTypePicker(selectedGameType: number, onGameTypeChange: Function) {
    const { t } = useTranslation(['main']);
    const optionElements: Array<React.JSX.Element> = [];
    const labelsGameType = [t('gametype.aecar'), t('gametype.rey'), t('gametype.isrcc'), t('gametype.levante124'),
            t('gametype.copaespana'), t('gametype.minicrawlerpassion'), t('gametype.generic')]

    const [state, setState] = React.useState(selectedGameType);

    function onSelectGameTypeChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selected = event.target.selectedIndex;

        onGameTypeChange && onGameTypeChange(selected);
        setState(selected);
    }

    labelsGameType.forEach((element, position)=>{
        optionElements.push(<option key={position} value={position}>{ labelsGameType[position] }</option>);
    });

    return [state, optionElements, onSelectGameTypeChange]
}

export default useGameTypePicker