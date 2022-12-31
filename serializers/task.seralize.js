const createTask = async (req, res, next) => {
  const data = res.data || null;
  const response = {
    id: data.id,
    sprintId: data.sprintId,
    userId: data.userId,
    task: data.task,
    description: data.description,
    pointer: data.description,
    deadline: data.description,
  };
  res.data = response;
  next();
};

const getMyTask = async (req, res, next) => {
  const data = res.data || null;
  const serializedData = [];
  data.forEach((item) => {
    const user = {
      id: item.dataValues.id,
      task: item.dataValues.task,
      description: item.dataValues.description,
      pointer: item.dataValues.pointer,
      deadline: item.dataValues.deadline,
      watchedBy: item.dataValues.watch,
    };
    serializedData.push(user);
  });
  res.data = serializedData;
  next();
};

module.exports = {
  createTask,
  getMyTask,
};