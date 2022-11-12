import {GameState} from "./game-state";

export type Card = {
  cardId: number,
  title: String,
  description: String,
  cost: number,
  execute: (gameState: GameState) => void
}

export function allCards(): Card[] {
  return [cardProduce(), ...allCardsWithoutProduce()]
}

export function cardProduce(): Card {
  return {
    cardId: -1,
    title: "Production",
    description: "Trigger production",
    cost: 0,
    execute: (gameState: GameState) => {
      gameState.money += gameState.moneyProduction
      gameState.points += gameState.pointProduction
      gameState.productionCounter += 1
    }
  }
}

export function allCardsWithoutProduce(): Card[] {
  return [
    {
      cardId: 1,
      title: "Money Production",
      description: "Get 5 money production",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.moneyProduction += 5
      }
    },
    {
      cardId: 2,
      title: "Points",
      description: "Get 5 points",
      cost: 20,
      execute: (gameState: GameState) => {
        gameState.points += 5
      }
    },
    {
      cardId: 3,
      title: "Point production",
      description: "Get 1 point production",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.pointProduction += 1
      }
    },
    {
      cardId: 4,
      title: "Research",
      description: "Gain 1 point per science, then gain 1 science",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.points += gameState.science
        gameState.science += 1
      }
    },
    {
      cardId: 5,
      title: "Deadline",
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
      title: "Magician",
      description: "Show 1 more card every turn",
      cost: 25,
      execute: (gameState: GameState) => {
        gameState.nrOfCardsPerDraft += 1
      }
    },
  ]
}
