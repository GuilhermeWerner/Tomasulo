import Head from 'next/head'
import Link from 'next/link'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useState } from 'react';
import Image from 'next/image'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ProgramContext } from '../src/ProgramContext';
import * as formik from "formik";

export default function Home() {
    const { Formik } = formik;

    const router = useRouter();
    const { updateProgram } = useContext(ProgramContext);

    const handleClick = async (values) => {
        console.log(JSON.stringify(values));
        updateProgram(values);
        router.push('/runner');
    };

    let instructionList = [
        {
            operacao: "LD",
            registradorR: "F6",
            registradorS: "34",
            registradorT: "R1",
        },
        {
            operacao: "LD",
            registradorR: "F2",
            registradorS: "45",
            registradorT: "R3",
        },
        {
            operacao: "MULTD",
            registradorR: "F0",
            registradorS: "F2",
            registradorT: "F4",
        },
        {
            operacao: "SUBD",
            registradorR: "F8",
            registradorS: "F6",
            registradorT: "F2",
        },
        {
            operacao: "DIVD",
            registradorR: "F10",
            registradorS: "F0",
            registradorT: "F6",
        },
        {
            operacao: "ADDD",
            registradorR: "F6",
            registradorS: "F8",
            registradorT: "F2",
        }
    ];

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
                    <Formik
                        onSubmit={handleClick}
                        initialValues={instructionList}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="row my-4">
                                    <Col>
                                        <h3>Instructions</h3>
                                    </Col>
                                    <Col className="text-end">
                                        <Button className="ms-4" variant="primary" type="submit">Execute</Button>
                                    </Col>
                                </Row>
                                <Row className="row my-4">
                                    <Col>
                                        <Table bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>OP</th>
                                                    <th>RD</th>
                                                    <th>RS</th>
                                                    <th>RT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {instructionList.map((d, i) => (
                                                    <tr>
                                                        <td>
                                                            <Form.Select
                                                                aria-label="Default select example"
                                                                value={values[i].operacao}
                                                                onChange={handleChange}
                                                                name={`[${i}].operacao`}
                                                            >
                                                                <option value="">-- Select --</option>
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
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                className="form-control"
                                                                type="text"
                                                                name={`[${i}].registradorR`}
                                                                size="3"
                                                                maxLength="3"
                                                                value={values[i].registradorR}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                className="form-control"
                                                                type="text"
                                                                name={`[${i}].registradorS`}
                                                                size="3"
                                                                maxLength="5"
                                                                value={values[i].registradorS}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                        <td>
                                                            <Form.Control
                                                                className="form-control"
                                                                type="text"
                                                                name={`[${i}].registradorT`}
                                                                size="3"
                                                                maxLength="3"
                                                                value={values[i].registradorT}
                                                                onChange={handleChange}
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                    <div className="my-4 text-center">
                        <span className="text-muted">Caio Arães, David Freitas, Guilherme Werner</span>
                    </div>
                </Container>
            </main>
        </>
    )
}
