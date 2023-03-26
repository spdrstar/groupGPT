import SendbirdApp from '@sendbird/uikit-react/App';
const APP_ID = "9C0ADFA0-D770-4092-B9DD-340B4721CB7C";
const USER_ID = "sendbirdian-200720";

const Chat = () => (
    <div style={{ height: "100vh", width: "100vw" }}>
        <SendbirdApp appId={APP_ID} userId={USER_ID} />
    </div>
);

export default Chat;
