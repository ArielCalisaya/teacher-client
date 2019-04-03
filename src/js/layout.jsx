import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { PrivateRoute } from "bc-react-session";
import { ChooseCohort, CohortView, RedirectView } from "./views/dashboard.jsx";
import withCohortContext from "./contexts/cohort-context.jsx";
import { LoadBar } from "@breathecode/ui-components";
import { Notifier } from "bc-react-notifier";
import { LoginView, ForgotView } from "./views/auth.jsx";
//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<LoadBar />
				<Notifier />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={RedirectView} />
						<Route exact path="/login" component={LoginView} />
						<Route exact path="/forgot" component={ForgotView} />
						<PrivateRoute exact path="/choose" component={ChooseCohort} />
						<PrivateRoute path="/cohort/:cohort_slug" component={withCohortContext(CohortView)} />
						<Route
							render={() => (
								<div>
									<h1>Not found!</h1>
									<Link to="/">Back to home</Link>
								</div>
							)}
						/>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default Layout;
