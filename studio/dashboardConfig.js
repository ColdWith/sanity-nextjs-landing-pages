export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6f31b9e9554895980d294c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ncmj72eb',
                  apiId: 'ff2be674-7a98-4eb2-bbcf-c7280408cc1f'
                },
                {
                  buildHookId: '5f6f31b93aa9ee8aef66454b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6kwdudqs',
                  apiId: '7cf59cdd-78d0-4bf3-97a5-d16730db02f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ColdWith/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6kwdudqs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
