export function handleDefaults(defaultObj, dynamicObj) {
	for (const key in dynamicObj) {
		defaultObj[key] = dynamicObj[key];
	}

	return defaultObj;
}
