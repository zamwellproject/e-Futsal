export class TieBreaker{static decide(a,b){if(a!==b)return a>b?'home':'away';return ['Gunting','Batu','Kertas'][Math.floor(Math.random()*3)]}}
