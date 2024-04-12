# practica de consultas

<!DOCTYPE html>
<html lang="es">
<head>
<link rel="stylesheet" href="style.css">
</head>
<body class="body">

<blockquote>
   <p>Esta documentación detalla una serie de consultas SQL diseñadas para mostrar y filtrar datos en <strong>tablas</strong> o <strong>columnas</strong> específicas. Cada consulta está acompañada de un comentario explicativo que describe su función y cómo se utiliza, lo que facilita su comprensión </p>
</blockquote>


   <h1 style="text-aling-center">¿?</h1>
   <div class="container_img">
        <img style="width:100%; max-width: 400px; aspect-ratio: 16/9; object-fit: cover;" src="assets/los-simpson.webp" 
        alt="imagen">
   </div>



<section id="seccion1">
<h2>seccion de consultas de registros</h2>
 <div class="row-container">
    <a href="#seccion2" class="row">⬇️</a>
 </div>

<blockquote>
   <p>hacemos las selecciones mas facil tablas y columnas  </p>
</blockquote>


```sql
-- selecciona todo de la tabla_name
SELECT * FROM tabla_name;

--select las columnas de - nombre_tabla
SELECT first_name,
last_name FROM actor;

-- select  no_duplicados de - columna_name de - tabla_name 
SELECT DISTINCT first_name FROM actor;

-- select no_duplicados de la col_name de la tabla_name ordenado de lacol_name 
SELECT DISTINCT first_name FROM actor ORDER BY first_name;

```
## buscamos datos no duplicados
```sql

-- select  no_duplicados de - columna_name de - tabla_name 
SELECT DISTINCT first_name FROM actor;

-- select no_duplicados de la col_name de la tabla_name ordenado de lacol_name 
SELECT DISTINCT first_name FROM actor ORDER BY first_name;

```
## ponemos un limite de los datos que queremos que nos traiga
```sql

--select todo de tabla_name y le pone un limite 22:ejemplo
SELECT * FROM actor LIMIT 22;

```

## filtramos nuestras busquedas
```sql

-- donde la_column (igual,parecido), ['%:END , E:ANY']
SELECT last_name FROM actor
WHERE last_name LIKE '%e';

-- donde la_column (igual,parecido), ['%:START , E:ANY']
SELECT last_name FROM actor
WHERE last_name LIKE 'e%';

-- donde la_column (igual,parecido), ['%tenga:ANY%']
SELECT last_name FROM actor
WHERE last_name LIKE '%e%';

--select todo de la tabla_name donde col sea null(vacio)
SELECT * FROM Customers
WHERE postalcode IS NULL;


```

## busqueda con operadores  AND | OR | NOT 
```sql
--
SELECT col1 , col2 FROM tabla_name
WHERE col1 = "valor0"
AND   col2 ="valor1"

SELECT * FROM tabla_name
WHERE col = "valor0"
OR col = "valor1"

--select all the tabla_name table where ´not col = "value"
SELECT * FROM tabla_name
WHERE NOT col = "valor1"

```


## cuenta las filas de las tablas
```sql

-- Muestra el número de todas las filas de la tabla_name
SELECT COUNT(*) FROM tabla_name;

```
</section>


<section id="seccion2">
 <h2>seccion update</h2>
 <div class="row-container">
    <a href="#seccion1" class="row">⬆️</a>
    <a href="#seccion3" class="row">⬇️</a>
 </div>
 <blockquote>
   <p>En esta seccion actualizaremos || agregaremos, tanto tabla columnas y typo de dato</p>
 </blockquote>
 
 ## renombrar 
 ```sql 
 -- actualizar el nombre de una tabla 
 ALTER TABLE tabla_antigua RENAME TO tabla_nueva;

 -- altera la tabla y renombra la columna
 ALTER TABLE employees RENAME COLUMN antigua TO nueva_columna;

 -- Actualizar los datos dentro de una tabla:

 UPDATE temp_employees
 SET name = name_employees_fijos
 WHERE department = 'IT';

 ```

</section>

<section id="seccion3">
   <h2>seccion deleted</h2>
   <div class="row-container">
      <a href="#seccion2" class="row">⬆️</a>
   </div>
 <blockquote>
   <p>Esta documentación detalla una serie de consultas SQL diseñadas para mostrar y filtrar datos en <strong>tablas</strong> o <strong>columnas</strong> específicas. Cada consulta está acompañada de un comentario explicativo que describe su función y cómo se utiliza, lo que facilita su comprensión </p>
 </blockquote> 
</section>

</body>
</html>
