import useResponsive from "../hooks/useResponsive";
import {
    Button,
    Grid,
    Stack,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { useSnackbar } from "notistack";

const Contact = () => {
    const { enqueueSnackbar } = useSnackbar();
    const isSmall = useResponsive("down", "sm");
    const isMedium = useResponsive("down", "md");
    const { alert, hideAlert, showAlert } = useAlert();
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isloading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState("idle");
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation("hit");

        enqueueSnackbar("Message sent Successfully", { variant: "success" });
        emailjs
            .send(
                process.env.NEXT_PUBLIC_ISLAND_APP_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_ISLAND_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Armita",
                    from_email: form.email,
                    to_email: "mir.armita17@gmail.com",
                    message: form.message,
                },

                process.env.NEXT_PUBLIC_ISLAND_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setIsLoading(false);

                showAlert({
                    show: true,
                    text: "Message sent Successfully",
                    type: "success",
                });

                setTimeout(() => {
                    hideAlert();
                    setForm({ name: "", email: "", message: "" });
                    setCurrentAnimation("idle");
                }, [3000]);
            })
            .catch((error) => {
                setIsLoading(false), console.log(error);
                setCurrentAnimation("idle");
                showAlert({
                    show: true,
                    text: "Something went Wrong...",
                    type: "danger",
                });
            });
    };
    const handleFocus = () => {
        setCurrentAnimation("walk");
    };
    const handleBlur = () => {
        setCurrentAnimation("idle");
    };
    return (
        <Stack mt={15} px={isSmall ? 3 : 10}>
            {alert.show && <Alert {...alert} />}
            <Grid container>
                <Grid px={isSmall ? 0 : 3} item xs={12} md={6}>
                    <h1
                        style={{
                            fontSize: isSmall ? "36px" : "48px",
                            fontWeight: "semibold",
                            fontFamily: "Poppins",
                        }}
                    >
                        Get in Touch
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <Stack
                            sx={{
                                width: "100%",
                                display: "flex",
                                gap: 3,
                                marginTop: 2,
                                direction: "column",
                            }}
                        >
                            <Stack>
                                <Typography
                                    style={{
                                        fontWeight: "semibold",
                                        color: "black",
                                    }}
                                >
                                    Name
                                </Typography>
                                <Inputs
                                    type='text'
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder='River'
                                    name='name'
                                    autoComplete='off'
                                />
                            </Stack>
                            <Stack>
                                <Typography
                                    style={{
                                        fontWeight: "semibold",
                                        color: "black",
                                    }}
                                >
                                    Email
                                </Typography>
                                <Inputs
                                    type='text'
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    placeholder='River@gmail.com'
                                    name='email'
                                    autoComplete='off'
                                />
                            </Stack>
                            <Stack>
                                <Typography
                                    style={{
                                        fontWeight: "semibold",
                                        color: "black",
                                    }}
                                >
                                    Your Message
                                </Typography>
                                <Inputs
                                    type='text'
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    name='message'
                                    placeholder='Let me know how I can help you!'
                                    rows={4}
                                    multiline
                                />
                            </Stack>
                            <Button
                                type='submit'
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                style={{
                                    color: "white",
                                    background:
                                        "linear-gradient(to right, #00c6ff, #0072ff)",
                                    outline: "none",
                                    boxShadow:
                                        "0 0 0 4px rgba(59, 130, 246, 0.105)", // Assuming focus:ring-blue-300 is rgba(59, 130, 246, 0.25)
                                    fontWeight: "medium",
                                    borderRadius: 6,
                                    fontSize: 14,
                                    width: "100%",
                                    padding: "10px 50px",
                                    textAlign: "center",
                                }}
                            >
                                {isloading ? "Loading..." : "Send Message"}
                            </Button>
                        </Stack>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack
                        sx={{
                            height: isSmall
                                ? "350px"
                                : isMedium
                                ? "400px"
                                : "650px",
                            width: "100%",
                            mt: isMedium ? -4 : 0,
                        }}
                    >
                        <Canvas
                            camera={{
                                position: [0, 0, 5],
                                fov: 75,
                                near: 0.1,
                                far: 1000,
                            }}
                        >
                            <directionalLight
                                intensity={2.5}
                                position={[0, 0, 1]}
                            />
                            <ambientLight intensity={0.5} />

                            <Suspense fallback={<Loader />}>
                                <Fox
                                    currentAnimation={currentAnimation}
                                    position={[0.5, 0.35, 0]}
                                    rotation={[12.6, -0.6, 0]}
                                    scale={isMedium ? 0.6 : 0.5}
                                />
                            </Suspense>
                        </Canvas>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

const Inputs = styled(TextField)(() => ({
    backgroundColor: "white",
    border: " 1px solid #e2e8ef",
    color: "#111827",
    fontSize: "14px",
    borderRadius: "6px",
    marginTop: "10px",
    fontWeight: 400,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));
export default Contact;
