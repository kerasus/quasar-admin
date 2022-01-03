import { auth } from './middleware/middleware'
const routes = [
  {
    path: '/',
    component: () => import('layouts/App'),
    children: [
      {
        path: '/auth',
        component: () => import('layouts/AuthLayout'),
        children: [
          { name: 'login', path: 'login', component: () => import('pages/Auth/Login') },
          { name: 'register', path: 'register', component: () => import('pages/Auth/Register') }
        ]
      },
      {
        path: 'admin',
        component: () => import('layouts/MainLayout.vue'),
        meta: {
          middlewares: [auth]
        },
        children: [
          { name: 'Admin.Settings', path: 'settings', component: () => import('pages/Admin/Settings') },
          {
            path: 'users',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.User.Index', path: '', component: () => import('pages/Admin/User/Index') },
              { name: 'Admin.User.Create', path: 'create', component: () => import('pages/Admin/User/Create') },
              { name: 'Admin.User.Show', path: ':id', component: () => import('pages/Admin/User/Show') },
              { name: 'Admin.User.Edit', path: ':id/edit', component: () => import('pages/Admin/User/Edit') }
            ]
          },
          {
            path: 'products',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Product.Index', path: '', component: () => import('pages/Admin/Product/Index') },
              { name: 'Admin.Product.Create', path: 'create', component: () => import('pages/Admin/Product/Create') },
              { name: 'Admin.Product.Show', path: ':id', component: () => import('pages/Admin/Product/Show') },
              { name: 'Admin.Product.Edit', path: ':id/edit', component: () => import('pages/Admin/Product/Edit') }
            ]
          },
          {
            path: 'contents',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Content.Index', path: '', component: () => import('pages/Admin/Content/Index') },
              { name: 'Admin.Content.Create', path: 'create', component: () => import('pages/Admin/Content/Create') },
              { name: 'Admin.Content.Show', path: ':id', component: () => import('pages/Admin/Content/Show') },
              { name: 'Admin.Content.Edit', path: ':id/edit', component: () => import('pages/Admin/Content/Edit') }
            ]
          },
          {
            path: 'orders',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Order.Index', path: '', component: () => import('pages/Admin/Order/Index') },
              { name: 'Admin.Order.Create', path: 'create', component: () => import('pages/Admin/Order/Create') },
              { name: 'Admin.Order.Show', path: ':id', component: () => import('pages/Admin/Order/Show') },
              { name: 'Admin.Order.Edit', path: ':id/edit', component: () => import('pages/Admin/Order/Edit') }
            ]
          },
          {
            path: 'transactions',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Transaction.Index', path: '', component: () => import('pages/Admin/Transaction/Index') },
              { name: 'Admin.Transaction.Create', path: 'create', component: () => import('pages/Admin/Transaction/Create') },
              { name: 'Admin.Transaction.Show', path: ':id', component: () => import('pages/Admin/Transaction/Show') },
              { name: 'Admin.Transaction.Edit', path: ':id/edit', component: () => import('pages/Admin/Transaction/Edit') }
            ]
          },
          {
            path: 'set',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Set.Index', path: '', component: () => import('pages/Admin/Sets/Index') },
              { name: 'Admin.Set.Create', path: 'create', component: () => import('pages/Admin/Sets/Create') },
              { name: 'Admin.Set.Show', path: ':id', component: () => import('pages/Admin/Sets/Show') },
              { name: 'Admin.Set.Edit', path: ':id/edit', component: () => import('pages/Admin/Sets/Edit') }
            ]
          },
          {
            path: 'coupon',
            component: () => import('pages/Admin/index'),
            children: [
              { name: 'Admin.Coupon.Index', path: '', component: () => import('pages/Admin/Coupon/Index') },
              { name: 'Admin.Coupon.Create', path: 'create', component: () => import('pages/Admin/Coupon/Create') },
              { name: 'Admin.Coupon.Show', path: ':id', component: () => import('pages/Admin/Coupon/Show') },
              { name: 'Admin.Coupon.Edit', path: ':id/edit', component: () => import('pages/Admin/Coupon/Edit') }
            ]
          }
        ]
      },
      {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        meta: {
          middlewares: [auth]
        },
        children: [
          { name: 'home', path: '/', component: () => import('pages/Index') },
          // {
          //   name: 'user.contents',
          //   path: 'contents',
          //   component: () => import('layouts/UserContentsLayout'),
          //   children: [
          //     { name: 'user.contents.index', path: '/', component: () => import('pages/Contents') },
          //     { name: 'user.contents.show', path: ':content_id', component: () => import('pages/User/Content/Show') },
          //     { name: 'user.contents.list', path: 'content-category-list/:category_id', component: () => import('pages/User/Content/ContentCategoryList') }
          //   ]
          // },
          // {
          //   name: 'user.session',
          //   path: 'session',
          //   component: () => import('layouts/UserLayout'),
          //   children: [
          //     { name: 'user.session.register', path: 'register', component: () => import('pages/User/Session/Register') }
          //   ]
          // },
          { name: 'EntityIndex', path: 'question-bank', component: () => import('pages/QuestionBank') },
          { name: 'EntityShoew', path: 'entity-show', component: () => import('pages/QuestionBank') }
        ]
      },
      // Always leave this as last one,
      // but you can also remove it
      {
        path: '*',
        component: () => import('pages/Error404.vue')
      }
    ]
  }
]

export default routes
