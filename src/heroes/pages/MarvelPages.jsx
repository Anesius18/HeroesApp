import { HeroList } from "../components"

export const MarvelPages = () => {
  return (
    <div className="card-img animate__animated animate__fadeIn">
    <h1>Marvel Comics</h1>
    <hr/>
    <HeroList publisher='Marvel Comics'/>
    </div>
  )
}
