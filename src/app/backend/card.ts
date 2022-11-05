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
      cardId: 0,
      title: "Money",
      description: "Get 5 money",
      cost: 1,
      execute: (gameState: GameState) => {
        gameState.money += 5
      }
    },
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
  ]
}
