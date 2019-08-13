# Mulberry Fitted Kitchens Ltd

A brochure website for Mulberry Fitted Kitchens, the main goals when designing it where for the visitor to get a quick understanding of how Mulberry works and then provide plenty of examples of their work and the good things customers have said about them.

I wanted to make sure the owners at Mulberry could keep their website up to date by being able to add new projects, testimonials and news without having to seek the help of a developer so I integrated a CMS into the site.

## Built with

- [React](https://reactjs.org/)
- [Gatsby](https://www.gatsbyjs.org/)

## CMS

- [Contentful](https://www.contentful.com/)

## Host

- [Netlify](https://www.netlify.com/)

I chose Gatsby, Contentful and Netlify because of how easily they work with each other. Mulberry can now log in to Contentful, create a new entry (i.e. add a new project) and once finished they click publish, which then triggers a build hook on Netlify, rebuilding the website and going live with the new content.
