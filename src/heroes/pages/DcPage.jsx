import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <div className="card-img animate__animated animate__fadeIn">
    <h1>Dc Comics</h1>
    <hr/>
    <HeroList publisher='DC Comics'/>
    </div>
  )
}
