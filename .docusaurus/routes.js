import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/cien-api-docs/src%3Apages%3Aindex',
    component: ComponentCreator('/cien-api-docs/src%3Apages%3Aindex', 'f3b'),
    exact: true
  },
  {
    path: '/cien-api-docs/',
    component: ComponentCreator('/cien-api-docs/', 'a77'),
    exact: true
  },
  {
    path: '/cien-api-docs/',
    component: ComponentCreator('/cien-api-docs/', 'cf6'),
    routes: [
      {
        path: '/cien-api-docs/',
        component: ComponentCreator('/cien-api-docs/', '21a'),
        routes: [
          {
            path: '/cien-api-docs/',
            component: ComponentCreator('/cien-api-docs/', '450'),
            routes: [
              {
                path: '/cien-api-docs/accounts',
                component: ComponentCreator('/cien-api-docs/accounts', '0b4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/activities',
                component: ComponentCreator('/cien-api-docs/activities', 'fee'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/aliasing',
                component: ComponentCreator('/cien-api-docs/aliasing', '700'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/companies_history',
                component: ComponentCreator('/cien-api-docs/companies_history', '4ad'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/contacts',
                component: ComponentCreator('/cien-api-docs/contacts', '3f0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/erp_accounts',
                component: ComponentCreator('/cien-api-docs/erp_accounts', 'c23'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/erp_orders',
                component: ComponentCreator('/cien-api-docs/erp_orders', '22b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/groups',
                component: ComponentCreator('/cien-api-docs/groups', '92a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/hat_leads',
                component: ComponentCreator('/cien-api-docs/hat_leads', 'c9a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/hr_users',
                component: ComponentCreator('/cien-api-docs/hr_users', '542'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/intro',
                component: ComponentCreator('/cien-api-docs/intro', 'e6b'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/leads',
                component: ComponentCreator('/cien-api-docs/leads', 'b84'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/metadata_ai_scores',
                component: ComponentCreator('/cien-api-docs/metadata_ai_scores', 'f8f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/metadata_graphics',
                component: ComponentCreator('/cien-api-docs/metadata_graphics', '027'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/metadata_heatmap_items',
                component: ComponentCreator('/cien-api-docs/metadata_heatmap_items', 'a3d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/metadata_reference_values',
                component: ComponentCreator('/cien-api-docs/metadata_reference_values', '3ea'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/open_pipeline',
                component: ComponentCreator('/cien-api-docs/open_pipeline', '65c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/opp_line_items',
                component: ComponentCreator('/cien-api-docs/opp_line_items', '657'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/opps',
                component: ComponentCreator('/cien-api-docs/opps', '022'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/opps_histories',
                component: ComponentCreator('/cien-api-docs/opps_histories', '670'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/opps_stages',
                component: ComponentCreator('/cien-api-docs/opps_stages', '05a'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/pipelines',
                component: ComponentCreator('/cien-api-docs/pipelines', 'fcc'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/products',
                component: ComponentCreator('/cien-api-docs/products', '55d'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/ssr',
                component: ComponentCreator('/cien-api-docs/ssr', 'fb0'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/ssr_history',
                component: ComponentCreator('/cien-api-docs/ssr_history', 'b1c'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/ssr_history_stakeholders',
                component: ComponentCreator('/cien-api-docs/ssr_history_stakeholders', '9f1'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/ssr_history_success_factors',
                component: ComponentCreator('/cien-api-docs/ssr_history_success_factors', 'b98'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/users',
                component: ComponentCreator('/cien-api-docs/users', '32e'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/users_activities',
                component: ComponentCreator('/cien-api-docs/users_activities', 'aa3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/cien-api-docs/users_history',
                component: ComponentCreator('/cien-api-docs/users_history', 'cfc'),
                exact: true,
                sidebar: "apiSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
