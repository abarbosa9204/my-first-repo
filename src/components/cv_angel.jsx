//import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
//import { Container, Row, Col, Card, Nav, Navbar, NavDropdown } from 'react-bootstrap'
//import img_angel from '../img/angel.png';
//import '../css/customStyle.css'
//import Formulario from './form_test';
import { useEffect, useState } from 'react';


export function Prueba() {
    const [numero, setNumero] = useState(0);
    // const [num2,,setNum2] = useState(num2);
    //const Sumar = (num1, num2) => { let num3 = num1 + num2; return  }
    useEffect(()=>{        
        console.log('Estado inicial', numero);    
    },[numero])
    return (        
        <>
            <div>
                {
                        setNumero(25)
                }
                {
                    console.log('Estado final', numero)
                }
            </div>
        </>
    );
}

// export default class Cva extends React.Component {
//     render() {
//         return (
//             <>
//                 <Nav className={'navbar fixed-top navbar-light navbar-angel'}>
//                     <div className={'container-fluid'}>
//                         <ol className={'breadcrumb'}>
//                             <li className={'breadcrumb-item'}><a href={'index.html'}>Inicio</a></li>
//                             <li className={'breadcrumb-item active'}>Perfil</li>
//                         </ol>
//                     </div>
//                 </Nav>
//                 <Container className={'containter-angel'}>
//                 <Formulario/>
//                     <div className={'main-body'}>
//                         <div className={'row gutters-sm'}>
//                             <div className={'col-md-4 mb-3'}>
//                                 <div className={'card'}>
//                                     <div className={'card-body'}>
//                                         <div className={'d-flex flex-column align-items-center text-center'}>
//                                             <img src={img_angel} alt="Foto - Angel Barbosa" className={'rounded-circle border border-danger'} width="150" />
//                                             <div className={'mt-3'}>
//                                                 <h4>Angel Barbosa</h4>
//                                                 <p className={'text-secondary mb-1'}>Desarrollador</p>
//                                                 <p className={'text-muted font-size-sm'}>
//                                                     Estudiante de <br /> Unihorizonte
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className={'card mt-3'}>
//                                     <ul className={'list-group list-group-flush'}>
//                                         <li className={'list-group-item d-flex justify-content-between align-items-center flex-wrap'}>
//                                             <h6 className={'mb-0'}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={'bi bi-linkedin" viewBox="0 0 16 16'}>
//                                                     <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
//                                                 </svg>LinkedIn
//                                             </h6>
//                                             <span className={'text-secondary'}>www.linkedin.com/in/angel-barbosa-r</span>
//                                         </li>
//                                         <li className={'list-group-item d-flex justify-content-between align-items-center flex-wrap'}>
//                                             <h6 className={'mb-0'}>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={'feather feather-github mr-2 icon-inline'}>
//                                                     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                                                 </svg>Github
//                                             </h6>
//                                             <span className={'text-secondary'}>https://github.com/abarbosa9204</span>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className={'col-md-8'}>
//                                 <div className={'card mb-3'}>
//                                     <div className={'card-body'}>
//                                         <div className={'row'}>
//                                             <div className={'col-sm-3'}>
//                                                 <h6 className={'mb-0'}>Nombre</h6>
//                                             </div>
//                                             <div className={'col-sm-9 text-secondary'}>Angel Barbosa</div>
//                                         </div>
//                                         <hr />
//                                         <div className={'row'}>
//                                             <div className={'col-sm-3'}>
//                                                 <h6 className={'mb-0'}>Correo</h6>
//                                             </div>
//                                             <div className={'col-sm-9 text-secondary'}>angel_barbosa20212@unihorizonte.edu.co</div>
//                                         </div>
//                                         <hr />
//                                         <div className={'row'}>
//                                             <div className={'col-sm-3'}>
//                                                 <h6 className={'mb-0'}>Teléfono</h6>
//                                             </div>
//                                             <div className={'col-sm-9 text-secondary'}>313 206 12 00</div>
//                                         </div>
//                                         <hr />
//                                         <hr />
//                                         <div className={'row'}>
//                                             <div className={'col-sm-3'}>
//                                                 <h6 className={'mb-0'}>Dirección</h6>
//                                             </div>
//                                             <div className={'col-sm-9 text-secondary'}>
//                                                 Cra 112 # 65B 34
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className={'row gutters-sm'}>
//                                     <div className={'col-sm-6 mb-3'}>
//                                         <div className={'card h-100'}>
//                                             <div className={'card-body'}>
//                                                 <h6 className={'d-flex align-items-center mb-3'}>
//                                                     <i className={'material-icons text-cv-angel mr-2'}>Conocimientos y/o habilidades</i>
//                                                 </h6>
//                                                 <small>CSS</small>
//                                                 <div className={'progress mb-3'} height="5px">
//                                                     <div className={'progress-bar'} role="progressbar" width="65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>JavaScript</small>
//                                                 <div className={'progress mb-3'} height="5px">
//                                                     <div className={'progress-bar'} role="progressbar" width="90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>Node.js</small>
//                                                 <div className={'progress mb-3'} height="5px">
//                                                     <div className={'progress-bar'} role="progressbar" width="80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>JQuery</small>
//                                                 <div className={'progress mb-3'} height="5px">
//                                                     <div className={'progress-bar'} role="progressbar" width="95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>Backend API RESTful</small>
//                                                 <div className={'progress mb-3'} height="5px">
//                                                     <div className={'progress-bar'} role="progressbar" width="66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="col-sm-6 mb-3">
//                                         <div class="card h-100">
//                                             <div class="card-body">
//                                                 <h6 class="d-flex align-items-center mb-3">
//                                                     <i class="material-icons text-cv-angel mr-2">Conocimientos y/o habilidades</i>
//                                                 </h6>
//                                                 <small>CSS</small>
//                                                 <div class="progress mb-3" height="5px">
//                                                     <div class="progress-bar" role="progressbar" width="65%" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>JavaScript</small>
//                                                 <div class="progress mb-3" height="5px">
//                                                     <div class="progress-bar" role="progressbar" width="90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>Node.js</small>
//                                                 <div class="progress mb-3" height="5px">
//                                                     <div class="progress-bar" role="progressbar" width="80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>JQuery</small>
//                                                 <div class="progress mb-3" height="5px">
//                                                     <div class="progress-bar" role="progressbar" width="95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <small>Backend API RESTful</small>
//                                                 <div class="progress mb-3" height="5px">
//                                                     <div class="progress-bar" role="progressbar" width="66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Container>
//             </>
//         )
//      }
// }