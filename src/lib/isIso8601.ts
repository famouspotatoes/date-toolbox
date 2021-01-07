const isIso8601 = (datetime: string) => {
	const regex = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}Z$/);
	return !!regex.exec(datetime);
};

export default isIso8601;
