import Head from 'next/head'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
    const [instructionStatus, setInstructionStatus] = useState([]);

    return (
        <>
            <Head>
                <title>Tomasulo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossorigin="anonymous"
                />
            </Head>
            <main>
                <Container>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 0</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 1</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 2</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 3</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 4</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Instrução 5</option>
                        <option value="ADD">ADD</option>
                        <option value="ADDD">ADDD</option>
                        <option value="BEQ">BEQ</option>
                        <option value="BNEZ">BNEZ</option>
                        <option value="DADDUI">DADDUI</option>
                        <option value="DIVD">DIVD</option>
                        <option value="LD">LD</option>
                        <option value="MULTD">MULTD</option>
                        <option value="SD">SD</option>
                        <option value="SUBD">SUBD</option>
                    </Form.Select>


                    <Form.Label htmlFor="inputOperand"></Form.Label>
                    <Form.Control
                        type="text"
                        id="inputOperand"
                        aria-describedby="passwordHelpBlock"
                    />
                </Container>
            </main>
        </>
    )
}
