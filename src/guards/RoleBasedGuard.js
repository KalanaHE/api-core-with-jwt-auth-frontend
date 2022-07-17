import PropTypes from "prop-types";
import { Container, Alert, AlertTitle } from "@mui/material";
import { useSelector } from "react-redux";
import { selectLoggedInUserPermissions } from "../redux/selectors/userSelector";

RoleBasedGuard.propTypes = {
  accessibleRoles: PropTypes.array, // Example ['view_user_profile', 'view_user_home']
  children: PropTypes.node,
};

export default function RoleBasedGuard({ accessibleRoles, children }) {
  const userRoles = useSelector(selectLoggedInUserPermissions);
  const isAuthorized = () => {
    return accessibleRoles.some((role) => {
      if (userRoles.includes(role)) {
        return true;
      } else {
        return false;
      }
    });
  };

  if (!isAuthorized()) {
    return (
      <Container>
        <Alert severity="error">
          <AlertTitle>Permission Denied</AlertTitle>
          You do not have permission to access this page
        </Alert>
      </Container>
    );
    // return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
}
