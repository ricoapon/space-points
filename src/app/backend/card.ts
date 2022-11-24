import {GameState} from "./game-state";

export type Card = {
  cardId: number,
  title: String,
  description: String,
  cost: number,
  execute: (gameState: GameState) => void,
  showIfHealthIsLowerThan?: number,
  showIfHealthIsHigherThan?: number,
  canBeBought?: (gameState: GameState) => boolean,
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

export function allCardsWithoutProduceFilteredByHealth(health: number): Card[] {
  return allCardsWithoutProduce().filter((card) => {
    if (card.showIfHealthIsLowerThan !== undefined && health > card.showIfHealthIsLowerThan) {
      return false
    }

    // noinspection RedundantIfStatementJS
    if (card.showIfHealthIsHigherThan !== undefined && health < card.showIfHealthIsHigherThan) {
      return false
    }

    return true
  })
}

export function allCardsWithoutProduce(): Card[] {
  let cardId = 1
  return [
    {
      cardId: cardId++,
      title: "Small business Contract",
      description: "Get 5 small lasers",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.smallLasers += 5
      },
      showIfHealthIsHigherThan: 10,
    },
    {
      cardId: cardId++,
      title: "Big business Contract",
      description: "Get 10 small lasers",
      cost: 20,
      execute: (gameState: GameState) => {
        gameState.smallLasers += 10
      },
      showIfHealthIsLowerThan: 17,
    },
    {
      cardId: cardId++,
      title: "Install big lasers",
      description: "Get 2 big lasers",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 2
      },
      showIfHealthIsHigherThan: 10,
    },
    {
      cardId: cardId++,
      title: "Install big mama lasers",
      description: "Get 5 big lasers",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 5
      },
      showIfHealthIsLowerThan: 17,
    },
    {
      cardId: cardId++,
      title: "Weapon Research",
      description: "Convert 3 small lasers into big lasers",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.smallLasers -= 3
        gameState.bigLasers += 3
      },
      showIfHealthIsLowerThan: 17,
      canBeBought: (gameState: GameState) => {
        return gameState.smallLasers >= 3
      }
    },
    {
      cardId: cardId++,
      title: "Space Haven",
      description: "Heal by 5 HP (can only be bought twice)",
      cost: 40,
      execute: (gameState: GameState) => {
        gameState.deadlineCounter += 1
        gameState.health += 5
      },
      showIfHealthIsLowerThan: 10,
      canBeBought: (gameState: GameState) => {
        return gameState.deadlineCounter < 2
      }
    },
    {
      cardId: cardId++,
      title: "Radar",
      description: "Show 1 more card every turn",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.nrOfCardsPerDraft += 1
      }
    },
    {
      cardId: cardId++,
      title: "Temporary upgrade",
      description: "Destroy one flag ship for each small laser",
      cost: 30,
      execute: (gameState: GameState) => {
        gameState.points += gameState.smallLasers
      },
      showIfHealthIsLowerThan: 5,
    },
    {
      cardId: cardId++,
      title: "Seeing double",
      description: "Double the number of big lasers",
      cost: 60,
      execute: (gameState: GameState) => {
        gameState.bigLasers += gameState.bigLasers
      },
      showIfHealthIsLowerThan: 5,
    },
    {
      cardId: cardId++,
      title: "Overdrive",
      description: "Fire lasers 2 times, then lose 50% of all big lasers (rounded down)",
      cost: 50,
      execute: (gameState: GameState) => {
        gameState.money += gameState.smallLasers * 2
        gameState.points += gameState.bigLasers * 2
        gameState.bigLasers -= Math.floor(gameState.bigLasers / 2)
      },
      showIfHealthIsLowerThan: 10,
      canBeBought: (gameState: GameState) => {
        return gameState.bigLasers >= 1
      }
    },
  ]
}
