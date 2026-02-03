module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**'),
      new URL('https://cdn-icons-png.flaticon.com/**'),
      new URL('https://firebase.google.com/**'),
      new URL('https://gist.githubusercontent.com/**'),
      new URL('https://raw.githubusercontent.com/**'),
      new URL('https://starbeamrainbowlabs.com/**'),
      new URL('https://upload.wikimedia.org/**'),
      new URL('https://www.r-project.org/**'),
      new URL('https://www.rust-lang.org/**'),
    ],
  },
};
