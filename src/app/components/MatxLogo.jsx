import useSettings from 'app/hooks/useSettings';

const MatxLogo = ({ className }) => {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <img src="/assets/images/logo.png" width="84px" height="74px" alt="netcare" />
  );
};

export default MatxLogo;
