function mostrarMenu() {
    let opcion = prompt(
      "Seleccione una opción:\n1. Profesor\n2. Estudiante\n3. Rector"
    );
  
    switch (opcion) {
      case "1":
        alert("Has seleccionado Profesor.");
        alert("Que quieres hacer?")
        let menu = prompt(
            "seleccione una opcion : \n1. Ver mis grupos\n2. Ver mis skills \n3. Ver mis horarios \n4.ver mi perfil de docente"
        )
        switch(menu){
            case "1":
                
                let grupo1 = prompt("\n1. S1\n2 . S2\n3. S3\n4. S4\n5. S5\n6. S6\n7. S7\n8. S8")
                
                
                
                switch(grupo1){
                    case "1":
                        alert("Grupo: S1")
                        let menu3 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu3){
                            case "1":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        case "2":
                            alert("Grupo: S2")
                            let menu4 = prompt(
                                "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                            )
                            switch(menu4){
                                case "1":
                                    alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                    break;
                                case "2":
                                    alert("Eliminar estudiante")
                                    let eliminar = prompt(
                                        "Escribe el nombre del estudiante a eliminar"
                                    )
                                    alert("Estudiante eliminado")
                                    break;
                                case "3":
                                    alert("Cambiar nota de estudiante")
                                    let cambiar = prompt(
                                        "Escribe el nombre del estudiante a cambiar la nota"
                                    )
                                    let nota = prompt("escribe la nota nueva")
                                    alert("Nota cambiada")
                                    break;
                                case "4":
                                    alert("Saliendo...")
                                    break;
                                default:
                                    alert("Opcion no valida")
                            }
                            
    
                            break;
                            case "1":
                        alert("Grupo: S3")
                        let menu5 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu5){
                            case "3":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        case "1":
                        alert("Grupo: S4")
                        let menu6 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu6){
                            case "4":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        case "4":
                        alert("Grupo: S5")
                        let menu7 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu7){
                            case "5":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        case "1":
                        alert("Grupo: S6")
                        let menu8 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu8){
                            case "6":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        case "1":
                        alert("Grupo: S7")
                        let menu9 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu9){
                            case "7":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        case "1":
                        alert("Grupo: S8")
                        let menu10 = prompt(
                            "seleccione una opcion : \n1. ver lista de estudiantes \n2. Eliminar estudiante  \n3. Cambiar nota de algun estudiante  \n4. salir "
                        )
                        switch(menu10){
                            case "8":
                                alert("Lista de estudiantes: \n1. Juanito\n2. Pedrito\n3. Luisito\n4. Carlitos")
                                break;
                            case "2":
                                alert("Eliminar estudiante")
                                let eliminar = prompt(
                                    "Escribe el nombre del estudiante a eliminar"
                                )
                                alert("Estudiante eliminado")
                                break;
                            case "3":
                                alert("Cambiar nota de estudiante")
                                let cambiar = prompt(
                                    "Escribe el nombre del estudiante a cambiar la nota"
                                )
                                let nota = prompt("escribe la nota nueva")
                                alert("Nota cambiada")
                                break;
                            case "4":
                                alert("Saliendo...")
                                break;
                            default:
                                alert("Opcion no valida")
                        }
                        

                        break;
                        

                        break;


                }
        
                
                break;
            case "2":
                alert("Skill: Programacion")
                break;
            case "3":
                alert("Horario: Lunes a Viernes de 8am a 2pm")
                break;
            case "4":
                alert("Nombre: Juanito\nEdad: 30\nTelefono: 1234567890\nDireccion: Calle Falsa 123")
                break;
            default:
                alert("Opcion no valida")
        }
        break;
      case "2":
        alert("Has seleccionado Estudiante.");
        let nuevo = prompt(
            "seleccione una opcion :\n1. Estudiante ya registrado\n2. Estudiante nuevo "

        )
        switch(nuevo){
            case "1":
                alert("Escribe tu Gmail")
                let email = prompt(
                    "→→→→"
                )
                alert("Escribe tu contraseña super secreta")
                let contraseña = prompt(
                    "→→→→"
                )
                alert("¿Que quieres ver?")
                let menu2 = prompt(
                    "seleccione una opcion : \n1. Ver mi informacion\n2. Ver mi grupo \n3. Ver mis skills  \n4. Ver mis calificaciones \n5. Ver mis asistencias \n6. Ver mis tareas \n7. Ver mis examenes  \n8. salir "
                     
                )
                switch(menu2){
                    case "1":
                        alert("Nombre: Juanito\nEdad: 20\nTelefono: 1234567890\nDireccion: Calle Falsa 123: Estado\n")
                        break;
                    case "2":
                        alert("Grupo: 3A")
                        break;
                    case "3":
                        alert("Skill: Programacion")
                        break;
                    case "4":
                        alert("Calificaciones: A")
                        break;
                    case "5":
                        alert("Asistencias: 100%")
                        break;
                    case "6":
                        alert("Tareas: Completadas")
                        break;
                    case "7":
                        alert("Examenes: Aprobado")
                        break;
                    default:
                        alert("Opcion no valida")
                }

            case "2":
                alert("Escribe tu Gmail")
                let email2 = prompt(
                    "→→→→"
                )
                alert("Escribe tu contraseña super secreta")
                let contraseña2 = prompt(
                    "→→→→"
                )
                alert("Escribe tu nombre")
                let nombre = prompt(
                    "→→→→"
                )
                alert("Escribe tu edad")
                let edad = prompt(
                    "→→→→"
                )
                alert("Escribe tu telefono")
                let telefono = prompt(
                    "→→→→"
                )
                alert("Escribe tu direccion")
                let direccion = prompt(
                    "→→→→"
                )
                alert("Ya estas registardo!!")
                
                
                alert("Aun no te encuentras inscrito a ningun grupo ni skill estamos en proceso de inscripcion")
                

            

        }
        break;
      case "3":
        alert("Has seleccionado Rector.");
        let nuevo2 = prompt(
            "seleccione una opcion :\n1. Añadir Docente\n2. Añadir estudiante\n3. Añadir grupo\n4. Añadir skill\n5. Añadir horario\n6. Añadir perfil de docente\n7. Añadir perfil de estudiante\n8. Añadir calificaciones\n9. Añadir asistencias\n10. Añadir tareas\n11. Añadir examenes\n13. Salir"
        )
        switch(nuevo2){
            case "1":
                alert("Añadir docente")
                let nombre = prompt(
                    "Escribe el nombre del docente"
                )
                let email = prompt(
                    "Escribe el email del docente"
                )
                let telefono = prompt(
                    "Escribe el telefono del docente"
                )
                let direccion = prompt(
                    "Escribe la direccion del docente"
                )
                alert("Docente añadido")
                break;
            case "2":
                alert("Añadir estudiante")
                let nombre2 = prompt(
                    "Escribe el nombre del estudiante"
                )
                let email2 = prompt(
                    "Escribe el email del estudiante"
                )
                let telefono2 = prompt(
                    "Escribe el telefono del estudiante"
                )
                let direccion2 = prompt(
                    "Escribe la direccion del estudiante"
                )
                alert("Estudiante añadido")
                break;
            case "3":
                alert("Añadir grupo")
                let grupo = prompt(
                    "Escribe el nombre del grupo"
                )
            case "4":
                alert("Añadir skill")
                let skill = prompt(
                    "Escribe el nombre de la skill"
                )
                break;
            case "5":
                alert("Añadir horario")
                let horario = prompt(
                    "Escribe el nombre del horario"
                )
                break;
                case "6":
                alert("Añadir perfil de docente")
                let perfil = prompt(
                    "Escribe el nombre del perfil"
                )
                break;
                case "7":
                alert("Añadir perfil de estudiante")
                let perfil2 = prompt(
                    "Escribe el nombre del perfil"
                )
                break;
                case "8":
                alert("Añadir calificaciones")
                let calificaciones = prompt(
                    "Escribe el nombre de las calificaciones"
                )
                break;
                case "9":
                alert("Añadir asistencias")
                let asistencias = prompt(
                    "Escribe el nombre de las asistencias"
                )
                break;
                case "10":
                alert("Añadir tareas")
                let tareas = prompt(
                    "Escribe el nombre de las tareas"
                )
                break;
                case "11":
                alert("Añadir examenes")
                let examenes = prompt(
                    "Escribe el nombre de los examenes"
                )
                break;
                case "12":
                alert("Añadir examenes")
                let examenes2 = prompt(
                    "Escribe el nombre de los examenes"
                )
                break;
                case "13":
                alert("Saliendo...")
                break;
        }

        
        break;
      default:
        alert("Opción no válida. Por favor, selecciona 1, 2 o 3.");
        mostrarMenu(); 
        break;
    }
  }
  

  mostrarMenu();