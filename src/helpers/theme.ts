export const setAppTheme = (theme: Frontier.Theme) => {
  const documentStyle = document.documentElement.style;
  const { primary_color, secondary_color, background_color, text_color } =
    theme;
  primary_color && documentStyle.setProperty('--primary-color', primary_color);
  secondary_color &&
    documentStyle.setProperty('--secondary-color', secondary_color);
  background_color &&
    documentStyle.setProperty('--background-color', background_color);
  text_color && documentStyle.setProperty('--text-color', text_color);
};
