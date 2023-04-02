export interface Lotto {
  drawDate: string;
  round: number;
  winningNumbers: [number, number, number, number, number, number, number];
}

export interface Lottos {
  [key: string]: Lotto;
}
