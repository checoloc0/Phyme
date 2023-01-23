export const SELECTED_EMP = "SELECTED_EMP"
export const SELECTED_EMP_DIR = "SELECTED_EMP_DIR"
export const SELECTED_EMP_DEP = "SELECTED_EMP_DEP"
export const SELECTED_DATOS_BANCARIOS = "SELECTED_EMP_DAT_BANC"

export const selectedEmp = (Id_Empleado) => ( {
    type: SELECTED_EMP,
    empID: Id_Empleado,

} )

export const selectedEmpDIR = (Id_Empleado) => ( {
    type: SELECTED_EMP_DIR,
    empID: Id_Empleado,

} )

export const selectedEmpDEP = (Id_Empleado) => ( {
    type: SELECTED_EMP_DEP,
    empID: Id_Empleado,

} )

export const selectedEmpDatos_banc = (Id_Empleado) => ( {
    type: SELECTED_DATOS_BANCARIOS,
    empID: Id_Empleado,

} )