import { combineReducers } from 'redux';
import tasks from './tasks';
import completionStatusFilter from './completionStatusFilter';
import categoryFilter from './categoryFilter';
import currentPage from './currentPage';
import pagesCount from './pagesCount';
import user from './user';
import signInError from './signInError';
import signUpError from './signUpError';
import team from './team';
import createTeamError from './createTeamError';

const rootReducer = combineReducers({
	tasks,
	completionStatusFilter,
	categoryFilter,
	currentPage,
	pagesCount,
	user,
	signUpError,
	signInError,
	createTeamError,
	team,
});

export default rootReducer;
