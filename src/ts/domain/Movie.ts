import Buyable from "./Buyable";

export default class Movie implements Buyable {
  constructor(
    readonly id: number,
    readonly nameTranslation: string,
    readonly nameOrigin: string,
    readonly yearRelease: number,
    readonly country: string,
    readonly genre: string[],
    readonly time: string,
    readonly price: number,
    readonly tagline?: string,    
  ) {}

}
