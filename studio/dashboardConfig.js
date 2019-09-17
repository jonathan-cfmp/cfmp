export default {
    widgets: [
        {
        name: 'netlify',
        options: {
          title: 'Netlify Deploy',
          sites: [
            {
              title: 'Sanity Studio',
              apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'xxxyyyxxxyyyyxxxyyy',
              name: 'cfmp-sanity-studio',
            },
            {
              title: 'Website',
              apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'cfmp.netlify.com'
            }
          ]
        }
      }
    ]
  }