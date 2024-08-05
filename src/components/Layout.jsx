import { AppBar, Stack } from "@mui/material";
import Link from "next/link";

export default function Layout({ children }) {
    return (
        <Stack>
            <AppBar
                className='p-4 px-10 '
                sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",

                    backdropFilter: "blur(5px)",
                }}
                // position='static'
            >
                <Stack
                    width='100%'
                    direction='row'
                    justifyContent='space-between'
                    fontSize={18}
                    fontWeight='500'
                >
                    <Link
                        href='/'
                        className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
                    >
                        <p className='blue-gradient_text'>AM</p>
                    </Link>
                    <Stack
                        style={{ color: "black" }}
                        direction='row'
                        gap={5}
                        alignSelf='center'
                    >
                        {" "}
                        <Link href='./About'>
                            <p>About</p>
                        </Link>
                        <Link href='./Contact'>
                            <p>Contact</p>
                        </Link>
                        {/* <Link href='./Projects'>
                            <p>Projects</p>
                        </Link> */}
                    </Stack>{" "}
                </Stack>
            </AppBar>
            <main>{children}</main>
        </Stack>
    );
}
