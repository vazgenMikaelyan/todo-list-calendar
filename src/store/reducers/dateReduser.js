
const dateReduser = (state = "5/1/2020", action) => {
  switch (action.type) {
    case 'SELECT_DATE':
      return state = action.date;
    default:
      return state;
  }
}

export default dateReduser;