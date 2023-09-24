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

const TELEGRAM = {
  messageUrl: ({
    botToken,
    chatId,
    text,
  }: {
    botToken: string;
    chatId: string;
    text: string;
  }): string =>
    `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      text,
    )}`,
};

const AVATAR_DEFAULT_URL =
  'https://pbs.twimg.com/profile_images/1598184292563107840/kQQvHce0_400x400.jpg';

export { ROUTES, TIME_FORMATTERS, TELEGRAM, AVATAR_DEFAULT_URL };
