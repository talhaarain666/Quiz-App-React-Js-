import Input from '@mui/joy/Input';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { getData, postData } from '../firebaseConfig/firebaseMethods'

function Admin() {

    const [inputValues, setInputValues] = useState()
    const [data, setData] = useState([])


    useEffect(() => {
        getData().then((res) => {
            setData(res)
        })
    }, [])


    let dataSubmit = (event) => {
        event.preventDefault();
        console.log(inputValues)
        postData(inputValues)
        alert("Added Successfully")
        setInputValues()
    }


    return (<>
        {/* ....................  Form ..................... */}
        <Box sx={{ background: "linear-gradient(to bottom, #8e0e00, #1f1c18)", padding: "5%" }}>
            {/* <Box> */}


            <Box sx={{ background: "linear-gradient(to top, #ECE9E6, #ffffff)", padding: "5rem" }}>
                <form
                    onSubmit={dataSubmit}
                >
                    <Input value={inputValues ? inputValues.question : ""} onChange={(e) => setInputValues({ ...inputValues, question: e.target.value })} placeholder='Enter Question' required sx={{ backgroundColor: "white", marginY: "1rem" }} color="danger" />

                    <Box display={"flex"}>
                        <Input value={inputValues ? inputValues.optionOne : ""} onChange={(e) => setInputValues({ ...inputValues, optionOne: e.target.value })} fullWidth placeholder='Enter Option One' required color='danger' sx={{ backgroundColor: "lightgrey", margin: "0.2rem" }} />
                        <Input value={inputValues ? inputValues.optionTwo : ""} onChange={(e) => setInputValues({ ...inputValues, optionTwo: e.target.value })} fullWidth placeholder='Enter Option Two' required color='danger' sx={{ backgroundColor: "lightgrey", margin: "0.2rem" }} />
                    </Box>

                    <Box display={"flex"}>
                        <Input value={inputValues ? inputValues.optionThree : ""} onChange={(e) => setInputValues({ ...inputValues, optionThree: e.target.value })} fullWidth placeholder='Enter Option Three' required
                            sx={{ backgroundColor: "lightgrey", margin: "0.2rem" }} color="danger" />
                        <Input value={inputValues ? inputValues.optionFour : ""} onChange={(e) => setInputValues({ ...inputValues, optionFour: e.target.value })} fullWidth placeholder='Enter Option Four' required
                            sx={{ backgroundColor: "lightgrey", margin: "0.2rem" }} color="danger" />
                    </Box>

                    <Input value={inputValues ? inputValues.rightAnswer : ""} onChange={(e) => setInputValues({ ...inputValues, rightAnswer: e.target.value })} placeholder='Enter Correct Answer' required sx={{ backgroundColor: "white", width: "70%", marginX: "auto", marginY: "1rem" }} color="danger" />
                    <Box display={"flex"} justifyContent="center">

                        <Button type='submit' variant="contained" color='error' sx={{ width: "15%" }}>
                            Add
                        </Button>
                    </Box>
                </form>
            </Box>

            {/* ...............  Rendering Data  ..................... */}


            {data.map((e) => {

                return <>

                    <Box sx={{ padding: "5%", marginTop: "3%", textAlign: "center", background: "linear-gradient(to right, #333333, #dd1818)" }}>
                        <Typography variant='h4' sx={{ color: "white", paddingY: "1rem" }}>{e.question}</Typography>
                        <Box display={"flex"} justifyContent="center" alignItems={"center"} flexWrap="wrap">
                            <Typography className='optionsAdminPanel' variant='p' component={"div"}>{e.optionOne}</Typography>
                            <Typography className='optionsAdminPanel' variant='p' component={"div"}>{e.optionTwo}</Typography>
                            <Typography className='optionsAdminPanel' variant='p' component={"div"}>{e.optionThree}</Typography>
                            <Typography className='optionsAdminPanel' variant='p' component={"div"}>{e.optionFour}</Typography>
                        </Box>
                        <Button variant='contained' color='error'>Delete</Button>
                    </Box>
                </>
            })}
            {/* </Box> */}
        </Box>

    </>
    )
}

export default Admin