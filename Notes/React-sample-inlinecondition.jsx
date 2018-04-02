/*
  Note, as long as unreadMessages.length > 0 evaluates true, the expression
  behind the && will return. false && expression will ignore returning the
  expression. This example is for situations where don't want to return anything
  when false. Otherwise, use boolean ? true : false
  -Ben
*/
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
