export const Filter = ({ value, onChange }) => {
    return (
        <div>
            <p>Find Contacts by name</p>
            <input type="text" value={value} onChange={onChange} />
        </div>
    );
}