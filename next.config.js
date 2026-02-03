module.exports = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('avatars.githubusercontent.com'),
      new URL('cdn-icons-png.flaticon.com'),
      new URL('firebase.google.com'),
      new URL('gist.githubusercontent.com'),
      new URL('raw.githubusercontent.com'),
      new URL('starbeamrainbowlabs.com'),
      new URL('upload.wikimedia.org'),
      new URL('www.r-project.org'),
      new URL('www.rust-lang.org'),
    ],
  },
};
