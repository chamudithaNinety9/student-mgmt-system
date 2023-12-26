import { createBrowserRouter} from "react-router-dom";

import TeacherRoutes from "./TeacherRoutes";
import StudentRoutes from "./StudentRoutes";
import LoginRoute from "./LoginRoute";
import SignUpRoute from "./SignUpRoute";

const MainRoutes = createBrowserRouter ([LoginRoute,SignUpRoute,TeacherRoutes,StudentRoutes]);

export default MainRoutes;