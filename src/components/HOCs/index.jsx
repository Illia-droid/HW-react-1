import { LanguageContext, ThemeContext, UserContext } from "../../contexts";

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

export const withLanguage = (InnerComponent) => (props) =>
  (
    <LanguageContext.Consumer>
      {([language, changeLanguage]) => (
        <InnerComponent
          language={language}
          changeLanguage={changeLanguage}
          {...props}
        />
      )}
    </LanguageContext.Consumer>
  );
