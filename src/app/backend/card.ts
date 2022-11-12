import {GameState} from "./game-state";

export type Card = {
  cardId: number,
  title: String,
  description: String,
  cost: number,
  execute: (gameState: GameState) => void
}

export function allCards(): Card[] {
  return [cardFireWeapons(), ...allCardsWithoutProduce()]
}

export function cardFireWeapons(): Card {
  return {
    cardId: -1,
    title: "Fire lasers",
    description: "Shoot down enemy ships for resources",
    cost: 0,
    execute: (gameState: GameState) => {
      gameState.money += gameState.weapons
      gameState.points += gameState.bigLasers
      gameState.weaponsFiredCounter += 1
    }
  }
}

export function allCardsWithoutProduce(): Card[] {
  return [
    {
      cardId: 1,
      title: "Business Contract",
      description: "Get 5 weapons",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.weapons += 5
      }
    },
    {
      cardId: 2,
      title: "Remote bomb",
      description: "Destroy 5 enemy flag ships",
      cost: 20,
      execute: (gameState: GameState) => {
        gameState.points += 5
      }
    },
    {
      cardId: 3,
      title: "Install big laser",
      description: "Get 1 big laser",
      cost: 10,
      execute: (gameState: GameState) => {
        gameState.bigLasers += 1
      }
    },
    {
      cardId: 4,
      title: "Weapon Research",
      description: "Destroy 1 flag ship per science, then gain 1 science",
      cost: 5,
      execute: (gameState: GameState) => {
        gameState.points += gameState.science
        gameState.science += 1
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
