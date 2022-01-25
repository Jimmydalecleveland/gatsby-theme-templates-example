module.exports = {
  plugins: [
    { resolve: `gatsby-theme-minimal`, options: {} },
    /* 
    * If you remove the following line, shadowing will not work for that package.
    * This shows that in order to shadow components they must be compatible with,
    * gatsby plugins and added to the config of the shadowing site.
    */
    { resolve: `@myscope/gatsby-theme-minimal`, options: {} }
  ],
}
