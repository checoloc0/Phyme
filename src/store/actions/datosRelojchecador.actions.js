export const SELECTED_EMP = "SELECTED_EMP"

export const selectedEmp = (Id_Empleado) => ( {
    type: SELECTED_EMP,
    empID: Id_Empleado,

} )