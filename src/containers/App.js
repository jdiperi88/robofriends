import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";
import { connect } from "react-redux";

class App extends Component {
	componentDidMount() {
		this.props.requestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});
		return isPending ? (
			<h1>Loading</h1>
		) : (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
const mapDispatchToProps = dispatch => ({
	onSearchChange: event => dispatch(setSearchField(event.target.value)),
	requestRobots: () => dispatch(requestRobots())
});

const mapStateToProps = state => {
	console.log(state);
	return {
		searchField: state.searchField,
		robots: state.robots,
		isPending: state.isPending,
		error: state.err
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
