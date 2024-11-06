import { r as m, j as e } from './index-BoFURM4q.js'
import { c as f } from './index-XB9cu7Fx.js'
import { a as x, c as o } from './index.esm-BRQCvXBc.js'
import { g as a, W as N, a as C } from './WidgetsDropdown-DLb-W4FK.js'
import { C as w } from './index.esm-CX11bcLh.js'
import { C as p, a as h } from './CCardBody-D29qHB2Z.js'
import { C as n, a as l } from './CRow-rkGOV9eC.js'
import { c as J, a as k } from './cil-user-female-Dz9e4tbB.js'
import { C as R } from './CButtonGroup-bwPzoJLw.js'
import { C as T } from './CCardFooter-BfWjt3qY.js'
import { C as i } from './CProgress-DL4uNiyz.js'
import { C as U } from './CCardHeader-BXavwLda.js'
import { C as M, a as A, b, c as d, d as L, e as u } from './CTable-DABJo8Wb.js'
import { c as E } from './cil-people-BKgPdOQQ.js'
import { C as B } from './DefaultLayout-B5W0mNiZ.js'
import { c as F } from './cil-user-Dlmw-Gem.js'
import { c as S, a as P, b as D, d as W, e as z, f as H, g as G } from './cib-google-C6akqOlX.js'
import { c as I, a as O, b as V } from './cib-twitter-00_H7eLt.js'
import { c as Q, a as q, b as Y, d as Z, e as K, f as $ } from './cif-us-DcptizC8.js'
const X = '' + new URL('1-Bxx5tbqp.jpg', import.meta.url).href,
  _ = '' + new URL('2-DU4eQes8.jpg', import.meta.url).href,
  ee = '' + new URL('3-D73ZQ4h9.jpg', import.meta.url).href,
  se = '' + new URL('4-TDOHctEN.jpg', import.meta.url).href,
  ae = '' + new URL('5-C7PguISa.jpg', import.meta.url).href,
  re = '' + new URL('6-DAej8nlJ.jpg', import.meta.url).href,
  te = () => {
    const t = m.useRef(null)
    m.useEffect(() => {
      document.documentElement.addEventListener('ColorSchemeChange', () => {
        t.current &&
          setTimeout(() => {
            ;(t.current.options.scales.x.grid.borderColor = a('--cui-border-color-translucent')),
              (t.current.options.scales.x.grid.color = a('--cui-border-color-translucent')),
              (t.current.options.scales.x.ticks.color = a('--cui-body-color')),
              (t.current.options.scales.y.grid.borderColor = a('--cui-border-color-translucent')),
              (t.current.options.scales.y.grid.color = a('--cui-border-color-translucent')),
              (t.current.options.scales.y.ticks.color = a('--cui-body-color')),
              t.current.update()
          })
      })
    }, [t])
    const r = () => Math.round(Math.random() * 100)
    return e.jsx(e.Fragment, {
      children: e.jsx(w, {
        ref: t,
        style: { height: '300px', marginTop: '40px' },
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: `rgba(${a('--cui-info-rgb')}, .1)`,
              borderColor: a('--cui-info'),
              pointHoverBackgroundColor: a('--cui-info'),
              borderWidth: 2,
              data: [r(), r(), r(), r(), r(), r(), r()],
              fill: !0,
            },
            {
              label: 'My Second dataset',
              backgroundColor: 'transparent',
              borderColor: a('--cui-success'),
              pointHoverBackgroundColor: a('--cui-success'),
              borderWidth: 2,
              data: [r(), r(), r(), r(), r(), r(), r()],
            },
            {
              label: 'My Third dataset',
              backgroundColor: 'transparent',
              borderColor: a('--cui-danger'),
              pointHoverBackgroundColor: a('--cui-danger'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [65, 65, 65, 65, 65, 65, 65],
            },
          ],
        },
        options: {
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
          scales: {
            x: {
              grid: { color: a('--cui-border-color-translucent'), drawOnChartArea: !1 },
              ticks: { color: a('--cui-body-color') },
            },
            y: {
              beginAtZero: !0,
              border: { color: a('--cui-border-color-translucent') },
              grid: { color: a('--cui-border-color-translucent') },
              max: 250,
              ticks: {
                color: a('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: { tension: 0.4 },
            point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
          },
        },
      }),
    })
  },
  we = () => {
    const t = [
        { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
        { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
        { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
        { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
        { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
      ],
      r = [
        { title: 'Monday', value1: 34, value2: 78 },
        { title: 'Tuesday', value1: 56, value2: 94 },
        { title: 'Wednesday', value1: 12, value2: 67 },
        { title: 'Thursday', value1: 43, value2: 91 },
        { title: 'Friday', value1: 22, value2: 73 },
        { title: 'Saturday', value1: 53, value2: 82 },
        { title: 'Sunday', value1: 9, value2: 69 },
      ],
      g = [
        { title: 'Male', icon: F, value: 53 },
        { title: 'Female', icon: k, value: 43 },
      ],
      j = [
        { title: 'Organic Search', icon: S, percent: 56, value: '191,235' },
        { title: 'Facebook', icon: I, percent: 15, value: '51,223' },
        { title: 'Twitter', icon: O, percent: 11, value: '37,564' },
        { title: 'LinkedIn', icon: V, percent: 8, value: '27,319' },
      ],
      v = [
        {
          avatar: { src: X, status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: !0, registered: 'Jan 1, 2023' },
          country: { name: 'USA', flag: Q },
          usage: { value: 50, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
          payment: { name: 'Mastercard', icon: P },
          activity: '10 sec ago',
        },
        {
          avatar: { src: _, status: 'danger' },
          user: { name: 'Avram Tarasios', new: !1, registered: 'Jan 1, 2023' },
          country: { name: 'Brazil', flag: q },
          usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'info' },
          payment: { name: 'Visa', icon: D },
          activity: '5 minutes ago',
        },
        {
          avatar: { src: ee, status: 'warning' },
          user: { name: 'Quintin Ed', new: !0, registered: 'Jan 1, 2023' },
          country: { name: 'India', flag: Y },
          usage: { value: 74, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'warning' },
          payment: { name: 'Stripe', icon: W },
          activity: '1 hour ago',
        },
        {
          avatar: { src: se, status: 'secondary' },
          user: { name: 'Enéas Kwadwo', new: !0, registered: 'Jan 1, 2023' },
          country: { name: 'France', flag: Z },
          usage: { value: 98, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'danger' },
          payment: { name: 'PayPal', icon: z },
          activity: 'Last month',
        },
        {
          avatar: { src: ae, status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: !0, registered: 'Jan 1, 2023' },
          country: { name: 'Spain', flag: K },
          usage: { value: 22, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'primary' },
          payment: { name: 'Google Wallet', icon: H },
          activity: 'Last week',
        },
        {
          avatar: { src: re, status: 'danger' },
          user: { name: 'Friderik Dávid', new: !0, registered: 'Jan 1, 2023' },
          country: { name: 'Poland', flag: $ },
          usage: { value: 43, period: 'Jun 11, 2023 - Jul 10, 2023', color: 'success' },
          payment: { name: 'Amex', icon: G },
          activity: 'Last week',
        },
      ]
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(N, { className: 'mb-4' }),
        e.jsxs(p, {
          className: 'mb-4',
          children: [
            e.jsxs(h, {
              children: [
                e.jsxs(n, {
                  children: [
                    e.jsxs(l, {
                      sm: 5,
                      children: [
                        e.jsx('h4', {
                          id: 'traffic',
                          className: 'card-title mb-0',
                          children: 'Traffic',
                        }),
                        e.jsx('div', {
                          className: 'small text-body-secondary',
                          children: 'January - July 2023',
                        }),
                      ],
                    }),
                    e.jsxs(l, {
                      sm: 7,
                      className: 'd-none d-md-block',
                      children: [
                        e.jsx(x, {
                          color: 'primary',
                          className: 'float-end',
                          children: e.jsx(o, { icon: J }),
                        }),
                        e.jsx(R, {
                          className: 'float-end me-3',
                          children: ['Day', 'Month', 'Year'].map((s) =>
                            e.jsx(
                              x,
                              {
                                color: 'outline-secondary',
                                className: 'mx-0',
                                active: s === 'Month',
                                children: s,
                              },
                              s,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(te, {}),
              ],
            }),
            e.jsx(T, {
              children: e.jsx(n, {
                xs: { cols: 1, gutter: 4 },
                sm: { cols: 2 },
                lg: { cols: 4 },
                xl: { cols: 5 },
                className: 'mb-2 text-center',
                children: t.map((s, c, y) =>
                  e.jsxs(
                    l,
                    {
                      className: f({ 'd-none d-xl-block': c + 1 === y.length }),
                      children: [
                        e.jsx('div', { className: 'text-body-secondary', children: s.title }),
                        e.jsxs('div', {
                          className: 'fw-semibold text-truncate',
                          children: [s.value, ' (', s.percent, '%)'],
                        }),
                        e.jsx(i, { thin: !0, className: 'mt-2', color: s.color, value: s.percent }),
                      ],
                    },
                    c,
                  ),
                ),
              }),
            }),
          ],
        }),
        e.jsx(C, { className: 'mb-4', withCharts: !0 }),
        e.jsx(n, {
          children: e.jsx(l, {
            xs: !0,
            children: e.jsxs(p, {
              className: 'mb-4',
              children: [
                e.jsxs(U, { children: ['Traffic ', ' & ', ' Sales'] }),
                e.jsxs(h, {
                  children: [
                    e.jsxs(n, {
                      children: [
                        e.jsxs(l, {
                          xs: 12,
                          md: 6,
                          xl: 6,
                          children: [
                            e.jsxs(n, {
                              children: [
                                e.jsx(l, {
                                  xs: 6,
                                  children: e.jsxs('div', {
                                    className:
                                      'border-start border-start-4 border-start-info py-1 px-3',
                                    children: [
                                      e.jsx('div', {
                                        className: 'text-body-secondary text-truncate small',
                                        children: 'New Clients',
                                      }),
                                      e.jsx('div', {
                                        className: 'fs-5 fw-semibold',
                                        children: '9,123',
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx(l, {
                                  xs: 6,
                                  children: e.jsxs('div', {
                                    className:
                                      'border-start border-start-4 border-start-danger py-1 px-3 mb-3',
                                    children: [
                                      e.jsx('div', {
                                        className: 'text-body-secondary text-truncate small',
                                        children: 'Recurring Clients',
                                      }),
                                      e.jsx('div', {
                                        className: 'fs-5 fw-semibold',
                                        children: '22,643',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            e.jsx('hr', { className: 'mt-0' }),
                            r.map((s, c) =>
                              e.jsxs(
                                'div',
                                {
                                  className: 'progress-group mb-4',
                                  children: [
                                    e.jsx('div', {
                                      className: 'progress-group-prepend',
                                      children: e.jsx('span', {
                                        className: 'text-body-secondary small',
                                        children: s.title,
                                      }),
                                    }),
                                    e.jsxs('div', {
                                      className: 'progress-group-bars',
                                      children: [
                                        e.jsx(i, { thin: !0, color: 'info', value: s.value1 }),
                                        e.jsx(i, { thin: !0, color: 'danger', value: s.value2 }),
                                      ],
                                    }),
                                  ],
                                },
                                c,
                              ),
                            ),
                          ],
                        }),
                        e.jsxs(l, {
                          xs: 12,
                          md: 6,
                          xl: 6,
                          children: [
                            e.jsxs(n, {
                              children: [
                                e.jsx(l, {
                                  xs: 6,
                                  children: e.jsxs('div', {
                                    className:
                                      'border-start border-start-4 border-start-warning py-1 px-3 mb-3',
                                    children: [
                                      e.jsx('div', {
                                        className: 'text-body-secondary text-truncate small',
                                        children: 'Pageviews',
                                      }),
                                      e.jsx('div', {
                                        className: 'fs-5 fw-semibold',
                                        children: '78,623',
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsx(l, {
                                  xs: 6,
                                  children: e.jsxs('div', {
                                    className:
                                      'border-start border-start-4 border-start-success py-1 px-3 mb-3',
                                    children: [
                                      e.jsx('div', {
                                        className: 'text-body-secondary text-truncate small',
                                        children: 'Organic',
                                      }),
                                      e.jsx('div', {
                                        className: 'fs-5 fw-semibold',
                                        children: '49,123',
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            e.jsx('hr', { className: 'mt-0' }),
                            g.map((s, c) =>
                              e.jsxs(
                                'div',
                                {
                                  className: 'progress-group mb-4',
                                  children: [
                                    e.jsxs('div', {
                                      className: 'progress-group-header',
                                      children: [
                                        e.jsx(o, { className: 'me-2', icon: s.icon, size: 'lg' }),
                                        e.jsx('span', { children: s.title }),
                                        e.jsxs('span', {
                                          className: 'ms-auto fw-semibold',
                                          children: [s.value, '%'],
                                        }),
                                      ],
                                    }),
                                    e.jsx('div', {
                                      className: 'progress-group-bars',
                                      children: e.jsx(i, {
                                        thin: !0,
                                        color: 'warning',
                                        value: s.value,
                                      }),
                                    }),
                                  ],
                                },
                                c,
                              ),
                            ),
                            e.jsx('div', { className: 'mb-5' }),
                            j.map((s, c) =>
                              e.jsxs(
                                'div',
                                {
                                  className: 'progress-group',
                                  children: [
                                    e.jsxs('div', {
                                      className: 'progress-group-header',
                                      children: [
                                        e.jsx(o, { className: 'me-2', icon: s.icon, size: 'lg' }),
                                        e.jsx('span', { children: s.title }),
                                        e.jsxs('span', {
                                          className: 'ms-auto fw-semibold',
                                          children: [
                                            s.value,
                                            ' ',
                                            e.jsxs('span', {
                                              className: 'text-body-secondary small',
                                              children: ['(', s.percent, '%)'],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx('div', {
                                      className: 'progress-group-bars',
                                      children: e.jsx(i, {
                                        thin: !0,
                                        color: 'success',
                                        value: s.percent,
                                      }),
                                    }),
                                  ],
                                },
                                c,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    e.jsx('br', {}),
                    e.jsxs(M, {
                      align: 'middle',
                      className: 'mb-0 border',
                      hover: !0,
                      responsive: !0,
                      children: [
                        e.jsx(A, {
                          className: 'text-nowrap',
                          children: e.jsxs(b, {
                            children: [
                              e.jsx(d, {
                                className: 'bg-body-tertiary text-center',
                                children: e.jsx(o, { icon: E }),
                              }),
                              e.jsx(d, { className: 'bg-body-tertiary', children: 'User' }),
                              e.jsx(d, {
                                className: 'bg-body-tertiary text-center',
                                children: 'Country',
                              }),
                              e.jsx(d, { className: 'bg-body-tertiary', children: 'Usage' }),
                              e.jsx(d, {
                                className: 'bg-body-tertiary text-center',
                                children: 'Payment Method',
                              }),
                              e.jsx(d, { className: 'bg-body-tertiary', children: 'Activity' }),
                            ],
                          }),
                        }),
                        e.jsx(L, {
                          children: v.map((s, c) =>
                            e.jsxs(
                              b,
                              {
                                'v-for': 'item in tableItems',
                                children: [
                                  e.jsx(u, {
                                    className: 'text-center',
                                    children: e.jsx(B, {
                                      size: 'md',
                                      src: s.avatar.src,
                                      status: s.avatar.status,
                                    }),
                                  }),
                                  e.jsxs(u, {
                                    children: [
                                      e.jsx('div', { children: s.user.name }),
                                      e.jsxs('div', {
                                        className: 'small text-body-secondary text-nowrap',
                                        children: [
                                          e.jsx('span', {
                                            children: s.user.new ? 'New' : 'Recurring',
                                          }),
                                          ' | Registered:',
                                          ' ',
                                          s.user.registered,
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx(u, {
                                    className: 'text-center',
                                    children: e.jsx(o, {
                                      size: 'xl',
                                      icon: s.country.flag,
                                      title: s.country.name,
                                    }),
                                  }),
                                  e.jsxs(u, {
                                    children: [
                                      e.jsxs('div', {
                                        className: 'd-flex justify-content-between text-nowrap',
                                        children: [
                                          e.jsxs('div', {
                                            className: 'fw-semibold',
                                            children: [s.usage.value, '%'],
                                          }),
                                          e.jsx('div', {
                                            className: 'ms-3',
                                            children: e.jsx('small', {
                                              className: 'text-body-secondary',
                                              children: s.usage.period,
                                            }),
                                          }),
                                        ],
                                      }),
                                      e.jsx(i, {
                                        thin: !0,
                                        color: s.usage.color,
                                        value: s.usage.value,
                                      }),
                                    ],
                                  }),
                                  e.jsx(u, {
                                    className: 'text-center',
                                    children: e.jsx(o, { size: 'xl', icon: s.payment.icon }),
                                  }),
                                  e.jsxs(u, {
                                    children: [
                                      e.jsx('div', {
                                        className: 'small text-body-secondary text-nowrap',
                                        children: 'Last login',
                                      }),
                                      e.jsx('div', {
                                        className: 'fw-semibold text-nowrap',
                                        children: s.activity,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              c,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    })
  }
export { we as default }
