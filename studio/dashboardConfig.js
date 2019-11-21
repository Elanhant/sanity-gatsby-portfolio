export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dd6f250fb1b39f0cdf6b199',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ng32vv4c',
                  apiId: '2847b8f5-d440-4c89-89ef-7d28ad3f8d06'
                },
                {
                  buildHookId: '5dd6f25096f1ffe17b1e9408',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3sfvti43',
                  apiId: 'a9ebce08-fde1-4e30-b9ab-e8612efd377d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Elanhant/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3sfvti43.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
