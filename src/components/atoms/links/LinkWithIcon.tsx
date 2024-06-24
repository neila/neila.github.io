export const LinkWithIcon = (props: { url: string; text: string }) => {
  const style =
    "bg-[image:var(--favicon-url)] bg-right bg-no-repeat pr-[18px] inline-block bg-contain";
  let fetchedUrl = "";
  if (props.url.startsWith("/")) {
    fetchedUrl = "/favicon.ico";
  } else if (props.url.startsWith("mailto:")) {
    fetchedUrl =
      "https://www.google.com/s2/favicons?domain=https://webmail.disroot.org&sz=256";
  } else if (props.url.startsWith("xmpp:")) {
    fetchedUrl = "https://www.google.com/s2/favicons?domain=xmpp.org&sz=256";
  } else if (props.url.includes("matrix.to")) {
    fetchedUrl =
      "https://www.google.com/s2/favicons?domain=https://matrix.org&sz=256";
  } else if (props.url.startsWith("http")) {
    fetchedUrl = `https://www.google.com/s2/favicons?domain=https://${
      new URL(props.url).hostname
    }&sz=256`;
  }
  return (
    <>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className={style}
        style={
          {
            "--favicon-url": `url(${fetchedUrl})`,
            maxHeight: "16px",
          } as React.CSSProperties
        }
      >
        {props.text}
      </a>
    </>
  );
};