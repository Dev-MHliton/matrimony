const NotificationToggle = ({ enabled, setEnabled }) => {
    return (
        <div className="flex items-center gap-3">
            <label className="font-medium">Enable Notifications</label>
            <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
                className="w-5 h-5 accent-blue-600"
            />
        </div>
    );
};

export default NotificationToggle;