import React from 'react'
import { Game } from '../games/Game'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ControlTextArray from '../components/ControlTextArray'
import { GameContext } from '../context/GameContext'
import { gameExtras } from '../games/AecarGameScores'

const gameSimple = new Game("Game test", 
  new Date().toDateString(), 
  {
      longitude: 0,
      latitude: 0
  },
  true,
  0,
  [], [], 0, 10, [1], 1, 0, ["uid1","uid2"], ["jid1", "jid2"], ["owner"])

const gameDouble = new Game("Game test", 
  new Date().toDateString(), 
  {
      longitude: 0,
      latitude: 0
  },
  true,
  0,
  [], [], 0, 10, [1], 1, 0, ["uid1","uid2"], ["jid1", "jid2"], ["owner"])

gameSimple.players = [{
  avatar: "avatar1",
  battery: false,
  id: 0,
  name: "Player1",
  points: 20,
  time: 0,
  group: 0,
  uid: "uid1",
  zones: [{
      fiascoControlTextValues: [],
      gateProgression: 0,
      gateProgressionData: [{gatePoints: 0,
        controlTextValues: [5,5,5,5]}],
      gatesWithBonification: 0,
      gatesWithFail: 0,
      judgedBy: [],
      points: 10,
      totalPoints: 10,
      simpathyPoints: 0,
      time: 6000,
      handicap: 0
  }]
}]

gameSimple.judges = [{
  avatar: "avatar1",
  battery: false,
  id: 0,
  name: "Player1",
  points: 0,
  time: 0,
  group: 0,
  uid: "uid1"
}]

gameDouble.players = [{
  avatar: "avatar1",
  battery: false,
  id: 0,
  name: "Player1",
  points: 20,
  time: 0,
  group: 0,
  uid: "uid1",
  zones: [{
      fiascoControlTextValues: [],
      gateProgression: 0,
      gateProgressionData: [{gatePoints: 0,
        controlTextValues: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]}],
      gatesWithBonification: 0,
      gatesWithFail: 0,
      judgedBy: [],
      points: 10,
      totalPoints: 10,
      simpathyPoints: 0,
      time: 6000,
      handicap: 0
  }]
}]

gameDouble.judges = [{
  avatar: "avatar1",
  battery: false,
  id: 0,
  name: "Player1",
  points: 0,
  time: 0,
  group: 0,
  uid: "uid1"
}]

const meta = {
  title: 'ControlTextArray',
  component: ControlTextArray,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof ControlTextArray>

export default meta
type Story = StoryObj<typeof meta>

export const ControlTextArraySimpleValues: Story = {
  args: {
    controlTextValuesString: 'controlTextValues',
    textToken: 'description.penalizaciones',
    player: 0,
    zone: 0,
    steps: [1,1,1,1],
    maxValues: [10,10,10,10],
    texts: ['points.vuelco',
      'points.tocar',
      'points.puerta',
      'points.saltoobstaculo'],
    isClosed: false,
    onValueChange: fn()
  },
  decorators: [
    (Story) => (
      <GameContext.Provider value={{ 
          game: gameSimple, 
          setGame: fn(),
          gameExtras: gameExtras
        }}>
            <Story />
      </GameContext.Provider>
    ),
  ]
}

export const ControlTextArrayDoubleValues: Story = {
  args: {
    controlTextValuesString: 'controlTextValues',
    textToken: 'description.penalizaciones',
    player: 0,
    zone: 0,
    steps: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    maxValues: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
    texts: ['points.vuelco',
      'points.tocar',
      'points.puerta',
      'points.saltoobstaculo',
      'points.vuelco',
      'points.tocar',
      'points.puerta',
      'points.saltoobstaculo',
      'points.vuelco',
      'points.tocar',
      'points.puerta',
      'points.saltoobstaculo',
      'points.vuelco',
      'points.tocar',
      'points.puerta',
      'points.saltoobstaculo'],
    isClosed: false,
    onValueChange: ()=>{
      fn()
    }
  },
  decorators: [
    (Story) => (
      <GameContext.Provider value={{ 
          game: gameDouble, 
          setGame: fn(),
          gameExtras: gameExtras
        }}>
            <Story />
      </GameContext.Provider>
    ),
  ]
}