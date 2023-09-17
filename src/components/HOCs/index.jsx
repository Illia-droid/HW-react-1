import { ThemeContext, UserContext } from "../../contexts";

export const withTheme = (InnerComponent) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, changeTheme]) => (
        <InnerComponent theme={theme} changeTheme={changeTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );

export const withUser = (InnerComponent) => (props) =>
  (
    <UserContext.Consumer>
      {({ user, selectUser }) => (
        <InnerComponent user={user} selectUser={selectUser} {...props} />
      )}
    </UserContext.Consumer>
  );
