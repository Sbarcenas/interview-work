import React from "react"
import "antd/dist/antd.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import RecipesProvider from "./Context/RecipesContext"
import RecipeList from "./Pages/RecipeList"
import MainModal from "./Components/MainModal"
import { GlobalStyle } from "./Themes/global"
import lightTheme from "./Themes/light"
import { ThemeProvider } from "styled-components"
import { Button, Layout } from "antd"
import { PlusOutlined, ReloadOutlined } from "@ant-design/icons"
import { AppContainer, RecipeHeader, NavContainer } from "./style"
const { Content } = Layout

const onReset = () => {
  localStorage.removeItem("interview-recipes")
  window.location.reload()
}

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <RecipesProvider>
          <Layout>
            <RecipeHeader>
              <NavContainer>
                <Button
                  onClick={onReset}
                  type="primary"
                  shape="round"
                  icon={<ReloadOutlined />}
                >
                  Restart
                </Button>{" "}
                <Link to="/add">
                  <Button type="primary" shape="round" icon={<PlusOutlined />}>
                    Add Recipe
                  </Button>
                </Link>
              </NavContainer>
            </RecipeHeader>
            <Content>
              <AppContainer>
                <Switch>
                  <Route path="/">
                    <RecipeList />
                  </Route>
                </Switch>
                <Route path="/add">
                  <MainModal />
                </Route>
              </AppContainer>
            </Content>
          </Layout>
        </RecipesProvider>
      </ThemeProvider>
    </Router>
  )
}

export default App
