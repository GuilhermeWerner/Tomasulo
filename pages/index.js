import Head from 'next/head'
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react'

export default function Home() {
    const [instructionStatus, setInstructionStatus] = useState([]);
    const [reservationStations, setReservationStations] = useState([]);
    const [registerStatus, setRegisterStatus] = useState([]);

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
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Tomasulo</Navbar.Brand>
                </Container>
            </Navbar>
            <main>
                <Container>
                    <div className="my-4">
                        <h3>Instruction Status</h3>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Instruction</th>
                                <th>Issued</th>
                                <th>Execute</th>
                                <th>Write Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {instructionStatus.map((instr, index) => (
                                <tr>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="my-4">
                        <h3>Reservations Stations</h3>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Busy</th>
                                <th>Op</th>
                                <th>Vj</th>
                                <th>Vk</th>
                                <th>Qj</th>
                                <th>Qk</th>
                                <th>A</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservationStations.map((instr, index) => (
                                <tr>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                    <td>batata</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className="my-4">
                        <h3>Registers Status</h3>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>F0</th>
                                <th>F2</th>
                                <th>F4</th>
                                <th>F6</th>
                                <th>F8</th>
                                <th>F10</th>
                                <th>F14</th>
                                <th>F16</th>
                                <th>F18</th>
                                <th>F20</th>
                                <th>F22</th>
                                <th>F24</th>
                                <th>F28</th>
                                <th>F30</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registerStatus.map((instr, index) => (
                                <tr>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                    <td>Add1</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </main>
        </>
    )
}
