import Head from 'next/head'
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Home() {
    let baseI = {
        issue: null,
        exeCompleta: null,
        write: null,
        busy: false,
    }

    let instructions = [
        {
            posicao: 0,
            instrucao: {
                operacao: "LD",
                registradorR: "F6",
                registradorS: "32",
                registradorT: "R1",
            },
            ...baseI,
        },
        {
            posicao: 1,
            instrucao: {
                operacao: "LD",
                registradorR: "F2",
                registradorS: "45",
                registradorT: "R3",
            },
            ...baseI,
        },
        {
            posicao: 2,
            instrucao: {
                operacao: "MULTD",
                registradorR: "F0",
                registradorS: "F2",
                registradorT: "F4",
            },
            ...baseI,
        },
        {
            posicao: 3,
            instrucao: {
                operacao: "SUBD",
                registradorR: "F8",
                registradorS: "F6",
                registradorT: "F2",
            },
            ...baseI,
        },
        {
            posicao: 4,
            instrucao: {
                operacao: "DIVD",
                registradorR: "F10",
                registradorS: "F0",
                registradorT: "F6",
            },
            ...baseI,
        },
        {
            posicao: 5,
            instrucao: {
                operacao: "ADDD",
                registradorR: "F6",
                registradorS: "F8",
                registradorT: "F2",
            },
            ...baseI,
        }
    ];

    let baseFu = {
        instrucao: null,
        estadoInstrucao: null,
        tempo: null,
        ocupado: false,
        operacao: null,
        vj: null,
        vk: null,
        qj: null,
        qk: null,
    };

    let fUnites = [
        {
            tipoUnidade: "Integer",
            nome: "Integer1",
            ...baseFu
        },
        {
            tipoUnidade: "Integer",
            nome: "Integer2",
            ...baseFu
        },
        {
            tipoUnidade: "Integer",
            nome: "Integer3",
            ...baseFu
        },
        {
            tipoUnidade: "Add",
            nome: "Add1",
            ...baseFu
        },
        {
            tipoUnidade: "Add",
            nome: "Add2",
            ...baseFu
        },
        {
            tipoUnidade: "Add",
            nome: "Add3",
            ...baseFu
        },
        {
            tipoUnidade: "Mult",
            nome: "Mult1",
            ...baseFu
        },
        {
            tipoUnidade: "Mult",
            nome: "Mult2",
            ...baseFu
        }
    ];

    let baseMu = {
        instrucao: null,
        estadoInstrucao: null,
        tempo: null,
        ocupado: false,
        qi: null,
        qj: null,
        operacao: null,
        endereco: null,
        destino: null,
    };

    let mUnites = [
        {
            tipoUnidade: "Load",
            nome: "Load1",
            ...baseMu
        },
        {
            tipoUnidade: "Load",
            nome: "Load2",
            ...baseMu
        },
        {
            tipoUnidade: "Load",
            nome: "Load3",
            ...baseMu
        },
        {
            tipoUnidade: "Load",
            nome: "Load4",
            ...baseMu
        },
        {
            tipoUnidade: "Load",
            nome: "Load5",
            ...baseMu
        },
        {
            tipoUnidade: "Store",
            nome: "Store1",
            ...baseMu
        },
        {
            tipoUnidade: "Store",
            nome: "Store2",
            ...baseMu
        },
        {
            tipoUnidade: "Store",
            nome: "Store3",
            ...baseMu
        }
    ];

    let [clock, setClock] = useState(0);
    let [instructionStatus, setInstructionStatus] = useState(instructions);
    let [functionalUnits, setFunctionalUnits] = useState(fUnites);
    let [memoryUnits, setMmoryUnits] = useState(mUnites);
    let [registerStatus, setRegisterStatus] = useState([]);

    function fetchInstruction() {
        for (let i = 0; i < instructionStatus.length; i++) {
            let element = instructionStatus[i];

            console.log("element:", element.instrucao.operacao);

            if (element.issue === null) {
                return element;
            }
        }

        return undefined;
    }

    function getFunctionalUnity(instr) {
        console.log("getFunctionalUnity:", instr.operacao);

        switch (instr.operacao) {
            case 'ADDD':
                return 'Add'
            case 'SUBD':
                return 'Add'
            case 'MULTD':
                return 'Mult'
            case 'DIVD':
                return 'Mult'
            case 'LD':
                return 'Load'
            case 'SD':
                return 'Store'
            case 'ADD':
                return 'Integer'
            case 'DADDUI':
                return 'Integer'
            case 'BEQ':
                return 'Integer'
            case 'BNEZ':
                return 'Integer'
        }
    }

    function getEmptyFunctionalUnity(tipoFU) {
        if ((tipoFU === 'Load') || (tipoFU === 'Store')) {
            for (let key in memoryUnits) {
                var ufMem = memoryUnits[key];

                if (ufMem.tipoUnidade === tipoFU) {
                    if (!ufMem.ocupado) {
                        return ufMem;
                    }
                }
            }

            return undefined;
        }

        for (let key in functionalUnits) {
            var uf = functionalUnits[key];

            if (uf.tipoUnidade === tipoFU) {
                if (!uf.ocupado) {
                    return uf;
                }
            }
        }

        return undefined;
    }

    function getCycles(instrucao) {
        switch (instrucao.operacao) {
            case 'ADDD':
                return 1;
            case 'SUBD':
                return 1;
            case 'MULTD':
                return 1;
            case 'DIVD':
                return 1;
            case 'LD':
                return 1;
            case 'SD':
                return 1;
            case 'ADD':
                return 1;
            case 'DADDUI':
                return 1;
            case 'BEQ':
                return 1;
            case 'BNEZ':
                return 1;
        }
    }

    function allocFunctionalUnit(uf, instrucao, estadoInstrucao) {
        uf.instrucao = instrucao;
        uf.estadoInstrucao = estadoInstrucao;
        uf.tempo = getCycles(instrucao) + 1;
        uf.ocupado = true;
        uf.operacao = instrucao.operacao;

        let reg_j;
        let reg_k;
        let reg_j_inst;
        let reg_k_inst;

        if ((instrucao.operacao === 'BNEZ') || (instrucao.operacao === 'BEQ')) {
            reg_j = registerStatus[instrucao.registradorR];
            reg_k = registerStatus[instrucao.registradorS];
            reg_j_inst = instrucao.registradorR;
            reg_k_inst = instrucao.registradorS;
        } else {
            reg_j = registerStatus[instrucao.registradorS];
            reg_k = registerStatus[instrucao.registradorT];
            reg_j_inst = instrucao.registradorS;
            reg_k_inst = instrucao.registradorT;
        }

        if (reg_j === null || reg_j === undefined) {
            uf.vj = reg_j_inst;
        }
        else {
            if ((reg_j in functionalUnits) || (reg_j in memoryUnits)) {
                uf.qj = reg_j;
            }
            else {
                uf.vj = reg_j;
            }
        }

        if (reg_k === null || reg_k === undefined) {
            uf.vk = reg_k_inst;
        }
        else {
            if ((reg_k in functionalUnits) || (reg_k in memoryUnits)) {
                uf.qk = reg_k;
            }
            else {
                uf.vk = reg_k;
            }
        }
    }

    function allocMemoryUnit(uf, instrucao, estadoInstrucao) {
        uf.instrucao = instrucao;
        uf.estadoInstrucao = estadoInstrucao;
        uf.tempo = getCycles(instrucao) + 1
        uf.ocupado = true;
        uf.operacao = instrucao.operacao;
        uf.endereco = instrucao.registradorS + '+' + instrucao.registradorT;
        uf.destino = instrucao.registradorR;
        uf.qi = null;
        uf.qj = null;

        if (instrucao.operacao === 'SD') {
            let UFQueTemQueEsperar = registerStatus[instrucao.registradorR];

            if ((UFQueTemQueEsperar in functionalUnits) || (UFQueTemQueEsperar in memoryUnits)) {
                uf.qi = UFQueTemQueEsperar;
            }
            else {
                uf.qi = null;
            }
        }

        let UFintQueTemQueEsperar = registerStatus[instrucao.registradorT];

        if ((UFintQueTemQueEsperar in functionalUnits) || (UFintQueTemQueEsperar in memoryUnits)) {
            uf.qj = UFintQueTemQueEsperar;
        }
        else {
            uf.qj = null;
        }
    }

    function writeRegister(instrucao, ufNome) {
        registerStatus[instrucao.registradorR] = ufNome;
        setRegisterStatus(registerStatus);
    }

    function releaseWaitingUnity(UF) {
        for (let keyUF in functionalUnits) {
            const ufOlhando = functionalUnits[keyUF];

            if ((ufOlhando.ocupado === true) && ((ufOlhando.qj === UF.nome) || (ufOlhando.qk === UF.nome))) {
                if (ufOlhando.qj === UF.nome) {
                    ufOlhando.vj = 'VAL(' + UF.nome + ')';
                    ufOlhando.qj = null;
                }

                if (ufOlhando.qk === UF.nome) {
                    ufOlhando.vk = 'VAL(' + UF.nome + ')';
                    ufOlhando.qk = null;
                }

                if ((ufOlhando.qj === null) && (ufOlhando.qk === null)) {
                    ufOlhando.tempo = ufOlhando.tempo - 1;
                }
            }
        }

        for (let keyUF in memoryUnits) {
            const ufOlhando = memoryUnits[keyUF];

            if (ufOlhando.ocupado === true) {
                if (ufOlhando.qi === UF.nome) {
                    ufOlhando.qi = null;
                    ufOlhando.tempo = ufOlhando.tempo - 1;
                } else if (ufOlhando.qj === UF.nome) {
                    ufOlhando.qj = null;
                    ufOlhando.tempo = ufOlhando.tempo - 1;
                }
            }
        }
    }

    function deallocFunctionalUnit(ufMem) {
        ufMem.instrucao = null;
        ufMem.estadoInstrucao = null;
        ufMem.tempo = null;
        ufMem.ocupado = false;
        ufMem.operacao = null;
        ufMem.endereco = null;
        ufMem.destino = null;
        ufMem.qi = null;
        ufMem.qj = null;
    }

    function deallocMemorylUnit(uf) {
        uf.instrucao = null;
        uf.estadoInstrucao = null;
        uf.tempo = null;
        uf.ocupado = false;
        uf.operacao = null;
        uf.vj = null;
        uf.vk = null;
        uf.qj = null;
        uf.qk = null;
    }

    function issueInstruction() {
        console.log("issueInstruction");

        let novaInstrucao = fetchInstruction();

        if (novaInstrucao) {
            let ufInstrucao = getFunctionalUnity(novaInstrucao.instrucao);
            let UFParaUsar = getEmptyFunctionalUnity(ufInstrucao);

            if (UFParaUsar) {
                if ((UFParaUsar.tipoUnidade == 'Load') || (UFParaUsar.tipoUnidade == 'Store')) {
                    allocMemoryUnit(UFParaUsar, novaInstrucao.instrucao, novaInstrucao);
                }
                else {
                    allocFunctionalUnit(UFParaUsar, novaInstrucao.instrucao, novaInstrucao);
                }

                novaInstrucao.issue = clock;
                if ((UFParaUsar.tipoUnidade !== 'Store') && (UFParaUsar.operacao !== 'BEQ') && (UFParaUsar.operacao !== 'BEQ')) {
                    writeRegister(novaInstrucao.instrucao, UFParaUsar.nome);
                }
            }
        }
    }

    function executeInstruction() {
        for (let key in memoryUnits) {
            var ufMem = memoryUnits[key];

            if ((ufMem.ocupado) && (ufMem.qi === null) && (ufMem.qj === null)) {
                ufMem.tempo = ufMem.tempo - 1;
                console.log("estado Instrucao", ufMem.estadoInstrucao);

                if (ufMem.tempo === 0) {
                    ufMem.estadoInstrucao.exeCompleta = clock;
                    ufMem.estadoInstrucao.busy = false;
                }
            }
        }

        for (let key in functionalUnits) {
            var uf = functionalUnits[key];

            if ((uf.ocupado) && (uf.vj !== null) && (uf.vk !== null)) {
                uf.tempo = uf.tempo - 1;
                uf.estadoInstrucao.busy = true;

                if (uf.tempo === 0) {
                    uf.estadoInstrucao.exeCompleta = clock;
                    uf.estadoInstrucao.busy = false;
                }
            }
        }
    }

    function writeInstruction() {
        for (let key in memoryUnits) {
            const ufMem = memoryUnits[key];

            if (ufMem.ocupado) {
                if (ufMem.tempo === -1) {
                    ufMem.estadoInstrucao.write = clock;

                    let valorReg = registerStatus[ufMem.instrucao.registradorR];

                    if (valorReg === ufMem.nome) {
                        registerStatus[ufMem.instrucao.registradorR] = 'VAL(' + ufMem.nome + ')';
                    }

                    releaseWaitingUnity(ufMem);
                    deallocMemorylUnit(ufMem);
                }
            }
        }

        for (let key in functionalUnits) {
            const uf = functionalUnits[key];

            if (uf.ocupado && uf.tempo === -1) {
                uf.estadoInstrucao.write = clock;

                let valorReg = registerStatus[uf.instrucao.registradorR];

                if (valorReg === uf.nome) {
                    registerStatus[uf.instrucao.registradorR] = 'VAL(' + uf.nome + ')';
                }

                releaseWaitingUnity(uf);
                deallocFunctionalUnit(uf);
            }
        }
    }

    function nextCycle() {
        setClock(clock + 1);
        console.log(clock);
        issueInstruction();
        executeInstruction();
        writeInstruction();
        setInstructionStatus(instructionStatus);
        setMmoryUnits(memoryUnits);
        setFunctionalUnits(functionalUnits);
    }

    function getFormatedState(instr) {
        if (instr.write !== null) {
            return "Commit";
        }

        if (instr.exeCompleta !== null) {
            return "Write Result";
        }

        if (instr.issue !== null) {
            return "Execute";
        }

        return "Issue";
    }

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
                    <Row className="row my-4">
                        <Col>
                            <h3>Ciclos: {clock}</h3>
                        </Col>
                        <Col className="text-end">
                            <Button className="ms-4" variant="primary" onClick={nextCycle}>Próximo</Button>
                        </Col>
                    </Row>
                    <Row className="row my-4">
                        <Col>
                            <div className="my-4">
                                <h3>Instruction Status</h3>
                            </div>
                            <Table bordered hover>
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
                                            <td>{`${instr.instrucao.operacao} ${instr.instrucao.registradorR} ${instr.instrucao.registradorS} ${instr.instrucao.registradorT}`}</td>
                                            <td>{instr.issue}</td>
                                            <td>{instr.exeCompleta}</td>
                                            <td>{instr.write}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <div className="my-4">
                                <h3>Reorder Buffer</h3>
                            </div>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Entry</th>
                                        <th>Busy</th>
                                        <th>Instruction</th>
                                        <th>State</th>
                                        <th>Destination</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {instructionStatus.map((instr, index) => (
                                        <tr>
                                            <td>{instr.posicao}</td>
                                            <td>{instr.busy ? "Yes" : "No"}</td>
                                            <td>{`${instr.instrucao.operacao} ${instr.instrucao.registradorR} ${instr.instrucao.registradorS} ${instr.instrucao.registradorT}`}</td>
                                            <td>{getFormatedState(instr)}</td>
                                            <td>{instr.instrucao.registradorR}</td>
                                            <td>Mem[{instr.instrucao.registradorS} + {instr.instrucao.registradorT}]</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Row className="row my-4">
                        <Col>
                            <div className="my-4">
                                <h3>Reservation Stations (Load/Store)</h3>
                            </div>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Name</th>
                                        <th>Busy</th>
                                        <th>Address</th>
                                        <th>Destination</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {memoryUnits.map((unit, index) => (
                                        <tr>
                                            <td>{unit.tempo}</td>
                                            <td>{unit.nome}</td>
                                            <td>{unit.ocupado ? "Yes" : "No"}</td>
                                            <td>{unit.endereco}</td>
                                            <td>{unit.destino}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <div className="my-4">
                                <h3>Reservation Stations</h3>
                            </div>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Name</th>
                                        <th>Busy</th>
                                        <th>Op</th>
                                        <th>Vj</th>
                                        <th>Vk</th>
                                        <th>Qj</th>
                                        <th>Qk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {functionalUnits.map((unit, index) => (
                                        <tr>
                                            <td>{unit.tempo}</td>
                                            <td>{unit.nome}</td>
                                            <td>{unit.ocupado ? "Yes" : "No"}</td>
                                            <td>{unit.operacao}</td>
                                            <td>{unit.vj}</td>
                                            <td>{unit.vk}</td>
                                            <td>{unit.qj}</td>
                                            <td>{unit.qk}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <div className="my-4">
                        <h3>Registers Status</h3>
                    </div>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>Field</th>
                                <th>F0</th>
                                <th>F1</th>
                                <th>F2</th>
                                <th>F3</th>
                                <th>F4</th>
                                <th>F5</th>
                                <th>F6</th>
                                <th>F7</th>
                                <th>F8</th>
                                <th>F9</th>
                                <th>F10</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Reorder #</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Busy</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="my-4 text-center">
                        <span className="text-muted">Caio Arâes, David Freitas, Guilherme Werner</span>
                    </div>
                </Container>
            </main>
        </>
    )
}