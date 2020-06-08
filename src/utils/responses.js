export const creationSuccess = (data, response) => {
	response.status(201).json({
		message: 'successfully created',
		data: data});
};

export const updateSuccess = (data, response) => {
	response.status(200).json({
		message: 'successfully updated',
		data: data});
};
export const validationError = (err, res) => {
	if(!err) {
		res.status(404).json({
			error: 'an error occured'
		});
	} else {
		res.status(403).json({
			error: err.message
		});
	}

};
export const FrobiddenAction = (res) => {
	res.status(403).json({
		error: 'forbidden action'
	});
};

export const DetailsError = (err, res) => {
	res.status(403).json({
		error: err
	});
};

export const NotFoundError = (res, err) => {
	res.status(404).json({
		error: err.message
	});
};


export const getResultsSuccess = (results, res) => {
	res.status(200).json({
		data: results
	});
};

export const successfullResponse = (res) => {
	res.json({
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

export const nothingFound = (err, res) => {
	res.status(404).json({
		error: err
	});	
};