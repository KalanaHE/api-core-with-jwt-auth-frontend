import { USER, ADMIN } from "../constants/commonConstants";

const ROLE_VIEW_ADMIN_HOME = "view_admin_home";
const ROLE_VIEW_ADMIN_PROFILE = "view_admin_profile";

const ROLE_VIEW_USER_HOME = "view_user_home";
const ROLE_VIEW_USER_PROFILE = "view_user_profile";

const ADMIN_PORTAL_ROLES = {
  "/": [ROLE_VIEW_ADMIN_HOME],
  "/profile": [ROLE_VIEW_ADMIN_PROFILE],
};

const USER_PORTAL_ROLES = {
  "/home": [ROLE_VIEW_USER_HOME],
  "/profile": [ROLE_VIEW_USER_PROFILE],
};

export const getRolesByPortalScreen = (portal, screen) => {
  if (portal === USER) {
    return USER_PORTAL_ROLES[screen] || [];
  }
  if (portal === ADMIN) {
    return ADMIN_PORTAL_ROLES[screen] || [];
  }

  return [];
};
