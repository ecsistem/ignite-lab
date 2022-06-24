import { Routes, Route } from "react-router-dom";
import { Event } from "../pages/Event";
import { Home} from "../pages/Home";
export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Event />}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/event/lesson/" element={<Event />}/>
            <Route path="/event/lesson/:slug" element={<Event />}/>
        </Routes>
    );
}