export const TASKS_PER_PAGE = 9;
export const API_URL = 'https://localhost:44357/api';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const MARK_TASK_AS_COMPLETED = 'MARK_TASK_AS_COMPLETED';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_COMPLETION_STATUS_FILTER = 'SET_COMPLETION_STATUS_FILTER';
export const SET_PAGES_COUNT = 'SET_PAGES_COUNT';
export const REGISTER_USER = 'REGISTER_USER';
export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION';
export const REQUEST_USER_SIGN_IN = 'REQUEST_USER_SIGN_IN';
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
export const SET_SIGN_UP_ERROR = 'SET_SIGN_UP_ERROR';
export const SET_SIGN_IN_ERROR = 'SET_SIGN_IN_ERROR';
export const REMOVE_SIGN_UP_ERROR = 'SET_SIGN_UP_ERROR';
export const REMOVE_SIGN_IN_ERROR = 'SET_SIGN_IN_ERROR';
export const REQUEST_TEAM_AUTHENTICATION = 'REQUEST_TEAM_AUTHENTICATION';
export const AUTHENTICATE_TEAM = 'AUTHENTICATE_TEAM';
export const REQUEST_TASK_EDIT = 'REQUEST_TASK_EDIT';
export const UPDATE_TASK = 'UPDATE_TASK';
export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const Categories = {
	CRITICAL: 'crit',
	WARNING: 'warn',
	INFO: 'info',
	ERROR: 'error',
	DEBUG: 'debug',
};

export const CompletionStatusFilters = {
	SHOW_ALL: '',
	SHOW_COMPLETE: true,
	SHOW_INCOMPLETE: false,
};
export const CategoryFilters = {
	SHOW_ALL: '',
	SHOW_CRITICAL: Categories.CRITICAL,
	SHOW_WARN: Categories.WARNING,
	SHOW_INFO: Categories.INFO,
	SHOW_ERROR: Categories.ERROR,
	SHOW_DEBUG: Categories.DEBUG,
};
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const RESET_FILTERS = 'RESET_FILTERS';
export const SHOW_ANOTHER_PAGE = 'SHOW_ANOTHER_PAGE';
