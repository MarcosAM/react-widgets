const styles = theme => ({
    card: {
        minWidth: '80%',
    },
    header: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(1)
    },
    body: {
        padding: theme.spacing(1)
    }
});

export default styles