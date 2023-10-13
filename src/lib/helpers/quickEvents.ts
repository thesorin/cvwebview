export let onKeyUp =
	(callBack: (event: KeyboardEvent) => any | VoidFunction, keys: string | string[]) =>
	(event: KeyboardEvent) => {
		const triggerKeys = Array.isArray(keys) ? keys : [keys];
		if (keys.length < 1) return;
		else if (keys.includes(event.code)) callBack(event);
	};
