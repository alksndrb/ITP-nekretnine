export interface Listing {
  oglasivac: string;
  lokacija: string;
  ulica: string;
  nazivOglasa: string;
  tipNekretnine: string;
  cena: number;
  kvadratura: number;
  brojSoba: number;
  godinaIzgradnje: number;
  stanjeNekretnine: string;
  tipGrejanja: string;

  sprat: number;
  ukupnaSpratnost: number;

  mesecneRezije: number;
  karakteristike: string[];
  linije: string[];
  opis: string;

  status: string;
}
export class SearchCriteria {
  lokacija: string | undefined = undefined;
  tip: string | undefined = undefined;
  kvadratura: number | undefined = undefined;
  cena: number | undefined = undefined;
  brojSoba: number | undefined = undefined;
}
