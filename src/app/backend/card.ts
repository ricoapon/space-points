import {GameState} from "./game-state";

export type Card = {
  cardId: number,
  title: String,
  description: String,
  cost: number,
  execute: (gameState: GameState) => void
}

export function allCards(): Card[] {
  return [cardFireLasers(), ...allCardsWithoutProduce()]
}

export function cardFireLasers(): Card {
  return {
    cardId: -1,
    title: "Fire lasers",
    description: "Shoot down enemy ships for resources",
    cost: 0,
    execute: (gameState: GameState) => {
      gameState.money += gameState.smallLasers
      gameState.points += gameState.bigLasers
      gameState.lasersFiredCounter += 1
    }
  }
}

export function allCardsWithoutProduce(): Card[] {
  return [
    {
      cardId: 1,
      title: "Business Contract",
      description: "Get 5 small lasers",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.smallLasers += 5
      }
    },
    {
      cardId: 2,
      title: "Remote bomb",
      description: "Destroy 5 enemy flagships",
      cost: 20,
      execute: (gameState: GameState) => {
        gameState.points += 5
      }
    },
    {
      cardId: 3,
      title: "Install big laser",
      description: "Get 2 big lasers",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 2
      }
    },
    {
      cardId: 4,
      title: "Weapon Research",
      description: "Convert 3 small lasers into big lasers",
      cost: 5,
      execute: (gameState: GameState) => {
        if (gameState.smallLasers >= 3) {
          gameState.smallLasers -= 3
          gameState.bigLasers += 3
        } else {
          gameState.bigLasers += gameState.smallLasers
          gameState.smallLasers = 0
        }
      }
    },
    {
      cardId: 5,
      title: "Space Haven",
      description: "Heal by 5 HP (can only be used twice)",
      cost: 40,
      execute: (gameState: GameState) => {
        gameState.deadlineCounter += 1
        if (gameState.deadlineCounter <= 2) {
          gameState.health += 5
        }
      }
    },
    {
      cardId: 6,
      title: "Radar",
      description: "Show 1 more card every turn",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.nrOfCardsPerDraft += 1
      }
    },
  ]
}
