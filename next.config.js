const withSass = require('@zeit/next-sass');
module.exports = withSass({
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            use: 'frontmatter-markdown-loader'
        }
    )
    return cfg;
}
});

