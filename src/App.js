import React from 'react'
import BeerRecipeContainer from './containers/BeerRecipeContainer'
import HomeContainer from './containers/HomeContainer'
import NavigationContainer from './containers/NavigationContainer'
import NoMatch from './components/NoMatch'
import ThemeContainer from './containers/ThemeContainer'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

class App extends React.Component {
  render() {
    const { routes } = this.props
    return (
      <ThemeContainer>
        <NavigationContainer>
          <Switch>
            <Route exact path={ routes.root }>
              <HomeContainer/>
            </Route>
            <Route path={ routes.beerRecipes }>
              <BeerRecipeContainer/>
            </Route>
            <Route path='*'>
              <NoMatch/>
            </Route>
          </Switch>
        </NavigationContainer>
      </ThemeContainer>
    )
  }
}

export default connect(
  (state) => ({
    routes: state.config.routes,
  }),
)(App);
