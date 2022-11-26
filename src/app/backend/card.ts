import {GameState} from "./game-state";

export type Card = {
  cardId: number,
  title: String,
  descriptionGame: (gameState: GameState) => String,
  descriptionManual: String,
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
    title: "Fire Lasers",
    descriptionGame: () => "Shoot down enemy ships for resources",
    descriptionManual: "Shoot down enemy ships for resources",
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
      title: "Small Business Contract",
      descriptionGame: () => "Gain 5 small lasers",
      descriptionManual: "Gain 5 small lasers",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.smallLasers += 5
      },
      showIfHealthIsHigherThan: 10,
    },
    {
      cardId: cardId++,
      title: "Big Business Contract",
      descriptionGame: () => "Gain 10 small lasers",
      descriptionManual: "Gain 10 small lasers",
      cost: 20,
      execute: (gameState: GameState) => {
        gameState.smallLasers += 10
      },
      showIfHealthIsLowerThan: 17,
    },
    {
      cardId: cardId++,
      title: "Big Bomb",
      descriptionGame: (gameState: GameState) => "Destroy " + (gameState.remoteBombCounter + 1) * 10 + " enemy flagships. (Increases per use)",
      descriptionManual: "Destroy 10 enemy flagships for every time you played this card.",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.remoteBombCounter += 1
        gameState.points += gameState.remoteBombCounter * 10
      },
      showIfHealthIsLowerThan: 17,
    },
    {
      cardId: cardId++,
      title: "Install Big Lasers",
      descriptionGame: () => "Gain 2 big lasers",
      descriptionManual: "Gain 2 big lasers",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 2
      },
      showIfHealthIsHigherThan: 10,
    },
    {
      cardId: cardId++,
      title: "Install Big Mama Lasers",
      descriptionGame: () => "Gain 5 big lasers",
      descriptionManual: "Gain 5 big lasers",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 5
      },
      showIfHealthIsLowerThan: 17,
    },
    {
      cardId: cardId++,
      title: "Weapon Research",
      descriptionGame: () => "Convert 3 small lasers into 3 big lasers",
      descriptionManual: "Convert 3 small lasers into 3 big lasers",
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
      descriptionGame: (gameState: GameState) => "Gain 5 HP (" + gameState.spaceHavenCounter + "/2)",
      descriptionManual: "Gain 5 HP (can only be bought twice)",
      cost: 40,
      execute: (gameState: GameState) => {
        gameState.spaceHavenCounter += 1
        gameState.health += 5
      },
      showIfHealthIsLowerThan: 10,
      canBeBought: (gameState: GameState) => {
        return gameState.spaceHavenCounter < 2
      }
    },
    {
      cardId: cardId++,
      title: "Radar",
      descriptionGame: () => "Show 1 more card every turn",
      descriptionManual: "Show 1 more card every turn",
      cost: 15,
      execute: (gameState: GameState) => {
        gameState.nrOfCardsPerDraft += 1
      }
    },
    {
      cardId: cardId++,
      title: "Temporary Upgrade",
      descriptionGame: () => "Destroy 1 flag ship for each small laser and gain 1 HP",
      descriptionManual: "Destroy 1 flag ship for each small laser and gain 1 HP",
      cost: 30,
      execute: (gameState: GameState) => {
        gameState.points += gameState.smallLasers
        gameState.health += 1
      },
      showIfHealthIsLowerThan: 5,
    },
    {
      cardId: cardId++,
      title: "Seeing Double",
      descriptionGame: () => "Double the number of big lasers",
      descriptionManual: "Double the number of big lasers",
      cost: 60,
      execute: (gameState: GameState) => {
        gameState.bigLasers += gameState.bigLasers
      },
      showIfHealthIsLowerThan: 5,
    },
    {
      cardId: cardId++,
      title: "Overdrive",
      descriptionGame: (gameState: GameState) => "Fire all lasers 2 times, then lose " + Math.floor(gameState.bigLasers / 2) + " big lasers",
      descriptionManual: "Fire all lasers 2 times, then lose 50% of all big lasers (rounded down)",
      cost: 50,
      execute: (gameState: GameState) => {
        gameState.money += gameState.smallLasers * 2
        gameState.points += gameState.bigLasers * 2
        gameState.bigLasers -= Math.floor(gameState.bigLasers / 2)
      },
      showIfHealthIsLowerThan: 10,
    },
  ]
}
