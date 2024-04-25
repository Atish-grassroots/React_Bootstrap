export const login = (username, password) => async dispatch => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data });

      dispatch({ type: 'SET_TOKEN', payload: data.token });
    } else {
      dispatch({ type: 'LOGIN_FAILURE', payload: data.message });
    }
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};