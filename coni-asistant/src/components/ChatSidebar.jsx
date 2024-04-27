import PropTypes from 'prop-types';


const ChatSidebar = ({ conversations, onSelectConversation }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Conversaciones</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 hover:bg-gray-300 rounded-md mb-2"
            onClick={() => onSelectConversation(index)}
          >
            {conversation.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
ChatSidebar.propTypes = {
    conversations: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        messages: PropTypes.array.isRequired,
      })
    ).isRequired,
    onSelectConversation: PropTypes.func.isRequired,
  };
  

export default ChatSidebar;