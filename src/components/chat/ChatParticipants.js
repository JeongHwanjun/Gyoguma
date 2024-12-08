// 채팅 상대방 정보 컴포넌트
// 참여자 프로필 표시
const ChatParticipants = ({ buyerName }) => {
    return (
        <div className="flex items-center p-4 bg-orange-100 border-b border-orange-300 rounded-t-lg">
            <div className="flex items-center">
                <img
                src="https://via.placeholder.com/40"
                alt="Buyer Avatar"
                className="w-10 h-10 rounded-full mr-3"
                />
                <span className="text-lg font-semibold">{buyerName}</span>
            </div>
        </div>
    );
};

export default ChatParticipants;