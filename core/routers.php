<?php
    function cargarControlador($controlador){
        $nombreControlador= ucwords($controlador)."Controller";
        $archivo_controlador="controller/".ucwords($controlador).".php";
        if (!is_file($archivo_controlador)){
            $archivo_controlador='controller/'.CONTROLADOR_PRINCIPAL.".php";
        }
   
        require_once $archivo_controlador;
        $control= new $nombreControlador();
        return $control;
    }
    function cargarAccion($controlador,$accion){
        if(isset($accion)&& method_exists($controlador,$accion)){
            $controlador->$accion();
        }else{
            $accionTmp=ACCION_PRINCIPAL;
            $controlador->$accionTmp();
        }

    }

?>