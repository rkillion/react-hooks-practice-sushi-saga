function AddWalletForm({ walletAmount, setWalletAmount }) {

    function handleSubmit(e) {
        e.preventDefault();
        let newAmount = walletAmount+parseInt(e.target.amount.value);
        setWalletAmount(newAmount);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="formLabel">Add to your wallet:  $</label>
            <input type="number" name="amount"></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddWalletForm;