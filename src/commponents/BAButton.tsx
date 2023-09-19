import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type btntype = {
    label: string,
    onClick: () => void,
    style?: React.CSSProperties;


}


export default function BasicButton(props: btntype) {
    const { onClick, label } = props;
    return (
        <Stack spacing={2} direction="row">
            <Button
                onClick={onClick}


            >
                {label}
            </Button>

        </Stack>
    );
}