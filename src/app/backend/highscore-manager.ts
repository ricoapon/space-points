import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

export type Highscore = {
  name: String,
  score: number,
}

@Injectable({providedIn: 'root'})
export class HighscoreManager {
  readonly FIREBASE_URL = "https://space-points-16628-default-rtdb.europe-west1.firebasedatabase.app/highscores.json"

  constructor(private httpClient: HttpClient) {
  }

  retrieveTop5(): Observable<Highscore[]> {
    return this.httpClient.get(this.FIREBASE_URL + "?orderBy=\"score\"&limitToLast=5")
      .pipe(map((value: any) => {
        let highscores: Highscore[] = []
        for (let i in value) {
          highscores.push({name: value[i].name, score: value[i].score})
        }
        // The values from Firebase do not come back sorted (mentioned in the docs).
        // So we manually sort based on score. Highest score should be the first element.
        return highscores.sort((h1, h2) => h2.score - h1.score)
      }))
  }

  addHighscore(highscore: Highscore): Observable<any> {
    if (environment.production) {
      return this.httpClient.post(this.FIREBASE_URL, highscore)
    } else {
      console.log("Adding highscore: ", highscore)
      return new Observable<any>((observer) => {
        observer.next()
        observer.complete()
      })
    }
  }
}
