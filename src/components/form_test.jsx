
// import React, { Fragment, useState } from 'react';
// const Formulario = () => {
//   const [datos, setDatos] = useState({
//     nombre: '',
//     apellido: ''
//   })
//   const handleInputChange = (event) => {
//     setDatos({
//       ...datos,
//       [event.target.name]: event.target.value
//     })
//   }
//   const enviarDatos = (event) => {
//     event.preventDefault()
//     console.log('Datos enviados: ' + datos.nombre + ' ' + datos.apellido)
//   }
//   return (
//     <Fragment>
// <hr />
//       <div className="form-group">
//         <form className="row" onSubmit={enviarDatos}>
//           <div className="form-group">
//             <div className="col-md-3">
//               <input type="text" placeholder="Nombre" className="form-control form-control-sm" onChange={handleInputChange} name="nombre"></input>
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-md-3">
//               <input type="text" placeholder="Apellido" className="form-control form-control-sm" onChange={handleInputChange} name="apellido"></input>
//             </div>
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-success btn-sm">Enviar</button>
//           </div>
//         </form>
//         <span className="text-white text-capitalize">{datos.nombre + ' '+ datos.apellido}</span>        
//       </div >
//     </Fragment >
//   );
// }

// export default Formulario;
