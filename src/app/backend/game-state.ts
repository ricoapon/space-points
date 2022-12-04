export const INITIAL_MAX_HEALTH = 20
export const INITIAL_NR_OF_CARDS_PER_DRAFT = 3;

export class GameState {
  public health = INITIAL_MAX_HEALTH
  // This is without the produce card.
  public nrOfCardsPerDraft = INITIAL_NR_OF_CARDS_PER_DRAFT
  public money = 15
  public points = 0
  public smallLasers = 15
  public bigLasers = 0
  public lasersFiredCounter = 0
  public spaceHavenCounter = 0
  public remoteBombCounter = 0
}
