import PropTypes from 'prop-types';


const Message = ({ text, isUser }) =>{
  return (
    <div className={`rounded-lg p-2 mb-2 ${isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'}`}>
      {text}
    </div>
  );
};
Message.propTypes = {
    text: PropTypes.string.isRequired,
    isUser: PropTypes.bool.isRequired,
  };
  

export default Message;