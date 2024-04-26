function bulkRun(tasks) {
    const promises = tasks.map(([func, args]) => {
        return new Promise((resolve) => {
            func(...args, resolve);
        });
    });

    return Promise.all(promises);
}
