export const valueConvertion = (followers) =>
  followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
