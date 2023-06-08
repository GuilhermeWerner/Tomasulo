import Head from 'next/head'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    const [instructionStatus, setInstructionStatus] = useState([]);
  
    const geraTabelaParaInserirInstrucoes = (nInst) => {
        let tabela = [];
        for (let i = 0; i < nInst; i++) {
            let d = "D" + i;
            let r = "R" + i;
            let s = "S" + i;
            let t = "T" + i;
            tabela.push(
                <tr key={i}>
                    <td>
                        <select className="form-control" size="1" name={d} id={d}>
                            <option value="">Instrução</option>
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
                        </select>
                    </td>
                    <td>
                        <input
                            className="form-control"
                            type="text"
                            name={r}
                            id={r}
                            size="3"
                            maxLength="3"
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            type="text"
                            name={s}
                            id={s}
                            size="3"
                            maxLength="5"
                        />
                    </td>
                    <td>
                        <input
                            className="form-control"
                            type="text"
                            name={t}
                            id={t}
                            size="3"
                            maxLength="3"
                        />
                    </td>
                </tr>
            );
        }
        return tabela;
    };
  
    const handleGenerateTable = (event) => {
        const nInst = event.target.value;
        setInstructionStatus(geraTabelaParaInserirInstrucoes(nInst));
    };

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
                    <Row>
                        <div className="my-4">
                            <h3>Lista de Instruções</h3>
                        </div>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Control
                                className="form-control-sm"
                                type="number"
                                placeholder="Selecione o número de instruções"
                                onChange={handleGenerateTable}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table bordered striped>
                                <thead>
                                    <tr>
                                        <th>Instrução</th>
                                        <th>Operando 3</th>
                                        <th>Operando 2</th>
                                        <th>Operando 1</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {instructionStatus}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
