import * as React from 'react';

import { usersService } from '../services';
import { REQUEST_STATUS } from '../enums';

const UsersStateContext = React.createContext();
const UsersDispatcherContext = React.createContext();

function usersReducer(state, action) {
  switch (action.type) {
    case 'USERS_FETCH_IN_PROGRESS':
      return {
        ...state,
        status: REQUEST_STATUS.IN_PROGRESS,
        error: null
      };

    case 'USERS_FETCH_SUCCESS':
      return {
        data: action.payload,
        users: action.payload,
        status: REQUEST_STATUS.SUCCESS,
        error: null
      };

    case 'USERS_FETCH_ERROR':
      return {
        data: [],
        users: [],
        status: REQUEST_STATUS.ERROR,
        error: action.payload
      };

    case 'USERS_SEARCH_BY_TEXT':
      const searchValue = action.payload.toLowerCase();

      return {
        ...state,
        users: state.data.filter(user => {
          return user.name?.toLowerCase().includes(searchValue);
        })
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function UsersProvider({ children }) {
  const dispatchRef = React.useRef({});
  const [state, dispatch] = React.useReducer(usersReducer, {
    data: [],
    users: [],
    status: REQUEST_STATUS.IDLE,
    error: null
  });

  dispatchRef.current.getUsers = async () => {
    try {
      dispatch({ type: 'USERS_FETCH_IN_PROGRESS' });

      const users = await usersService.getUsers();

      dispatch({ type: 'USERS_FETCH_SUCCESS', payload: users });
    } catch (error) {
      dispatch({ type: 'USERS_FETCH_ERROR', payload: error });
    }
  };

  dispatchRef.current.searchUsersByText = searchValue => {
    dispatch({ type: 'USERS_SEARCH_BY_TEXT', payload: searchValue });
  };

  return (
    <UsersDispatcherContext.Provider value={dispatchRef.current}>
      <UsersStateContext.Provider value={state}>
        {children}
      </UsersStateContext.Provider>
    </UsersDispatcherContext.Provider>
  );
}

function useUsersState() {
  const value = React.useContext(UsersStateContext);

  if (value === undefined) {
    throw new Error(
      '[ERROR]: useUsersState has no value, this hook must be used inside UsersProvider'
    );
  }

  return value;
}

function useUsersDispatcher() {
  const value = React.useContext(UsersDispatcherContext);

  if (value === undefined) {
    throw new Error(
      '[ERROR]: useUsersDispatcher has no value, this hook must be used inside UsersProvider'
    );
  }

  return value;
}

export { UsersProvider, useUsersState, useUsersDispatcher };
