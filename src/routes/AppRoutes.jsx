import { Routes, Route } from "react-router";
import routes from './routes';

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, element, children }, index) => (
        <Route key={index} path={path} element={element}>
          {children && children.map(({ path: childPath, element: childElement }, childIndex) => (
            <Route key={childIndex} path={childPath} element={childElement} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}

export default AppRoutes;
