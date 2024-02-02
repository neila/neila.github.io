const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <p className="text-center text-1">
        - N - <br /> {currentYear} &copy; https://neila.github.io
      </p>
    </footer>
  );
};

export default Footer;
