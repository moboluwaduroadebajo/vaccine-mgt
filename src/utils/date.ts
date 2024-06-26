export const getDateLabel = (currentDate: Date, targetDate: Date): string => {
    const diffTime = targetDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Tomorrow";
    } else if (diffDays === 2) {
        return "Next Tomorrow";
    } else {
        return targetDate.toLocaleDateString();
    }
};