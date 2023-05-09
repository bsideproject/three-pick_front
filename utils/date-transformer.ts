export const dateTransformer = (date: Date) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();

    const dayOfWeekName = daysOfWeek[dayOfWeek];

    const transferredDate = `${year}.${(month + 1)
        .toString()
        .padStart(2, '0')}.${day.toString().padStart(2, '0')} ${dayOfWeekName}`;

    return transferredDate;
};

export const dateForData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}-${(month + 1).toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;
};
