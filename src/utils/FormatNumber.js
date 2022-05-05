const FormatNumber = ({ number }) => {
    return <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'ARS' }).format(number)}</span>
}

export default FormatNumber;