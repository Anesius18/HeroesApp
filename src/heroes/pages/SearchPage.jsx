import {useLocation, useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHeroByName } from "../helpers"
import { HeroCard } from "../components"
export const SearchPage = () => {

const {searchText, handleInput, ResetForm} = useForm({searchText: ''})

const navigate = useNavigate()
const location = useLocation()
const {q =''} = queryString.parse(location.search)

const heroes = getHeroByName(q)


const formSubmit = (e) =>{
  e.preventDefault()
  if(searchText.trim().length ===1) return
  navigate(`?q=${searchText}`)
  ResetForm()
}



  return (
   <div className="row">
   <h1>Search</h1>
   <hr/>
   <div className="col-5">
    <h4>Searching</h4>
    <hr/>
    <form onSubmit={formSubmit}>
  <input
  type="text"
  placeholder="Search a hero"
  className="form-control"
  name="searchText"
  autoComplete="off"
  value={searchText}
  onChange={handleInput}
  />
  <button className="btn btn-outline-primary mt-1">Search</button>
    </form>
   </div>

   <div className="col-7 mt-5">
   <h4>Results</h4>
    <hr/>

    {
 ( q === '')
 ? <div className="alert alert-primary">Search a hero</div> 
 : (heroes.length === 0 )
 && <div className="alert alert-danger">Hero <b>{q}</b> not found</div> 
 }

{heroes.map(hero => (
  <HeroCard key={hero.id} {...hero}/>
))
}

   </div>
   </div>
  )
}
