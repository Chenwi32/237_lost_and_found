const users = [
  { id: 1, name: "John Smith" },
  { id: 2, name: "Jane Doe" },
];

export default (req, res) => {
  const {
    query: { id },
  } = req;

  res.json({
    ...users.find((user) => user.id === parseInt(id)),
  });
};
