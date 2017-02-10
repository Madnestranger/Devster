export const UserFilter = () => {
  return (values, search) => {
    if (values) {
      return values.filter(user => {
        return (search === "" || (user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (user.username.indexOf(search.toLowerCase()) !== -1) || (user.email.indexOf(search.toLowerCase()) !== -1));
      });
    }
  }
};
