import { Route, Routes } from "react-router-dom"
import { Home, SignIn } from "../pages/Auth"
import { paths } from "../hooks/paths"

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.signIn} element={<SignIn />} />
        </Routes>
    )
}

export default AuthRoutes