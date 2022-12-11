import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {View} from "react-native" ;


export default function Index(props) {
    const { isLoggedIn, setLoggedIn } = props
    return (
        <View>
            <BrowserRouter>
                {isLoggedIn ?
                    <Routes>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignIn setIsLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} />}>
                        </Route>
                        <Route path="/signup" element={<SignUp setIsLoggedIn={setLoggedIn} />}>
                        </Route>
                    </Routes>
                }
            </BrowserRouter>
        </View>

    )
}