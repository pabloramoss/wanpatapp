import dayjs, { Dayjs } from 'dayjs';
import _ from 'lodash';

import { Conversation, Message } from '../../types';
import { TIME_FORMATTERS } from '../constants';

export const getLastMessage = (messages: Message[]) => _.last(messages);

export const sortConversationsByLastMessage = (conversations: Conversation[]): Conversation[] => {
  return _.orderBy(
    conversations,
    (conversation) => _.get(_.last(conversation.messages), 'timestamp', 0),
    'desc',
  );
};

const getIsToday = (timestampDayJS: Dayjs) => {
  return (
    dayjs(timestampDayJS).format(TIME_FORMATTERS.dayMonthYearFormat) ===
    dayjs(+new Date()).format(TIME_FORMATTERS.dayMonthYearFormat)
  );
};

export const getFormattedDate = (timestamp: number) => {
  const timestampDayJS = dayjs.unix(timestamp);
  const isToday = getIsToday(timestampDayJS);

  if (isToday) {
    return timestampDayJS.format(TIME_FORMATTERS.hoursMinutesFormat);
  }

  return timestampDayJS.format(TIME_FORMATTERS.dayMonthHoursMinutesFormat);
};

export const createTimestampInSeconds = () => dayjs().unix();
