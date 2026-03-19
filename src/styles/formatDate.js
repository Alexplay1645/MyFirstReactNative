export const formatDate = (date) => {
  const d = new Date(date);
  return d.toISOString().slice(0, 10).replace(/-/g, "");
};