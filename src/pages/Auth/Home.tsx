import { useNavigate } from "react-router-dom"
import { paths } from "../../hooks/paths"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(paths.signIn)
  },[])
  return ""
}

export default Home