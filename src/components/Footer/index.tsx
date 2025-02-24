const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <p className="text-center text-1">
        <img
          src="/images/alphabet_n.png"
          alt="N"
          className="mx-auto block h-8 w-8"
        />{" "}
        <br />{" "}
        <span className="text-center block">
          2021 - {currentYear} &copy; https://neila.in05.org
        </span>
      </p>
    </footer>
  );
};

export default Footer;
