export const creationSuccess = (response, data) => {
	response.status(201).json({
		message: 'successfully created',
		data: data});
};

export const updateSuccess = (response, data) => {
	response.status(200).json({
		message: 'successfully updated',
		data: data});
};
export const validationError = (res, err) => {
	res.status(403).json({
		error: err.message
	});
};

export const locationDetailsError = (res, err) => {
	res.status(403).json({
		error: err
	});
};

export const NotFoundError = (res, err) => {
	res.status(404).json({
		error: err.message
	});
};


export const getResultsSuccess = (res, results) => {
	res.status(200).json({
		data: results
	});
};

export const successfullResponse = (res) => {
	res.status(200).json({
		message: 'operation successfull'
	});
};

export const serverError = (res) => {
	res.status(500).json({
		error:'Server error'
	});	
};

export const invalidIdError = (res) => {
  res.status(404).json({
    err: 'that Id is Invalid'
  });
  };

export const nothingFound = (res, err) => {
	res.status(404).json({
		error: err
	});	
};