const getAllWorkspace = async (req, res, next) => {
  const data = res.data || null;
  const serializedData = [];
  data.forEach((item) => {
    const user = {
      workspaceId: item.dataValues.workspace_id,
      email: item.User.email,
      designationTitle: item.Designation.designationTitle,
    };
    serializedData.push(user);
  });
  res.data = serializedData;
  next();
};

const createWorkspace = async (req, res, next) => {
  const data = res.data || null;
  const response = {
    id: data.id,
    name: data.name,
    description: data.description,
  };
  res.data = response;
  next();
};

const addUserInWorkspace = async (req, res, next) => {
  const data = res.data || null;
  const response = {
    userId: data.user_id,
    workspaceId: data.workspace_id,
    designationId: data.designation_id,
  };
  res.data = response;
  next();
};

module.exports = {
  getAllWorkspace,
  createWorkspace,
  addUserInWorkspace,
};
