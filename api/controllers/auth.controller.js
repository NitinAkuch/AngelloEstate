export const auth = (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
};
