import  pool  from '.././database';
import cors from "cors";
import { Consola } from 'consola';
import { json } from 'body-parser';





pool.query('select * from user', (err, result, field)=>{

    console.log(result);

});