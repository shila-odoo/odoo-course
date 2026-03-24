module.exports = {
  base: '/odoo-course',
  title: 'My Awesome Project', // Site title, appears in the navbar
  description: 'A brief description',
  themeConfig: {
    // Navbar configuration
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }, // Link to docs/guide/README.md
      { text: 'External Link', link: 'https://google.com' },
    ],
    // Optional: Add a repository link to the navbar
    repo: 'shila-odoo/odoo-course', // e.g., 'vuejs/vuepress'
    repoLabel: 'GitHub',
  }
}
