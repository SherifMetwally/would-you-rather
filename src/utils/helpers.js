export const PollFormat = (question, author) => {
  const { id, optionOne, optionTwo, timestamp } = question;
  const { name, avatarURL } = author;

  return {
    id,
    optionOne,
    optionTwo,
    timestamp,
    name,
    avatarURL,
  };
};
