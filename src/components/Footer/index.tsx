const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <p className="text-center text-1">
        - S - <br /> 2021 - {currentYear} &copy; https://sho.hihara.cc
      </p>
    </footer>
  );
};

export default Footer;
