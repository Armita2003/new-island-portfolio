import { Stack } from "@mui/material";
import React from "react";

const Alert = ({ type, text }) => {
    return (
        <Stack
            sx={{
                position: "absolute",
                top: 72,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                className={`${
                    type === "danger" ? "bg-red-800" : "bg-blue-700"
                } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center rounded-md`}
                role='alert'
            >
                <p
                    className={`${
                        type === "danger" ? "bg-red-500" : "bg-blue-500"
                    } flex  rounded-full uppercase px-2 py-1 font-semibold
                mr-3 text-xs`}
                >
                    {type === "danger" ? "Failed" : "success"}
                </p>
                <p className='mr-2 text-left'>{text}</p>
            </div>
        </Stack>
    );
};

export default Alert;
