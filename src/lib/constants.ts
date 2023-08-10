const ROUTES = {
  register: '/register',
  login: '/login',
  conversation: '/conversation',
  conversationId: (id?: string) => (id ? `/conversation/${id}` : `/conversation/:conversationId`),
};

const TIME_FORMATTERS = {
  hoursMinutesFormat: 'hh[:]mm a',
  dayMonthYearFormat: 'DD/MM/YYYY',
  dayMonthHoursMinutesFormat: 'DD/MM hh[:]mm a',
};

export { ROUTES, TIME_FORMATTERS };
