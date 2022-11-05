import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class GameState {
  public money = 15
  public points = 0
  public moneyProduction = 1
  public pointProduction = 0
}
