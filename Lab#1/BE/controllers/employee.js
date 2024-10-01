const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const employeeId = req.params.id;

  const index = employee.findIndex(emp => emp.id === employeeId);
  employee.splice(index, 1);
  
  res.status(200).json({ message: 'Employee deleted successfully', data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;

  employee.push({ id, name });

  res.status(201).json({ message: 'Employee created successfully', data: employee });
};
