import SendbirdApp from '@sendbird/uikit-react/App';
const APP_ID = process.env.APP_ID;
const USER_ID = process.env.USER_ID;

const Chat = () => (
    <div style={{ height: "100vh", width: "100vw" }}>
        <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
);

export default Chat;
