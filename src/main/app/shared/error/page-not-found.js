import {Alert, AlertTitle, Stack} from '@mui/material'

export default function PAgeNotfound() {
    return (
        <Stack sx={{width: '100%', height: '100vh'}} alignItems={'center'} justifyContent={'center'}>
            <Alert severity="error">
                <AlertTitle>404</AlertTitle>
                This page is not exist!
            </Alert>
        </Stack>
    );
}
