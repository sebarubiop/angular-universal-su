import { Tarea } from '../models/tarea'
const fs = require('fs')

export async function processSitemap (req, res) {
    Tarea.find({}, { titulo: 1 }, (err, tareas) => {
        // Check if error was found or not
        if (err) {
            res.send(err); // Return error message
        } else {
            // Check if tareas were found in database
            if (!tareas) {
                res.send('NO se encuentran tareas.'); // Return error of no tareas found
            } else {
                const distStream = fs.createWriteStream("dist/browser/sitemap.txt")
                streamFile(distStream, tareas)
                const srcStream = fs.createWriteStream("src/sitemap.txt")
                streamFile(srcStream, tareas)
                res.send(`Total de Tareas: ${tareas.length}`)
            }
        }
    })
}

function streamFile(stream, tareas) {
    stream.once('open', function (fd) {
        stream.write("https://partner-7.com/\n")
        stream.write("https://partner-7.com/auth/login\n")
        stream.write("https://partner-7.com/auth/register\n")
        stream.write("https://partner-7.com/company/necesito-tarea\n")
        stream.write("https://partner-7.com/company/entrego-servicio\n")
        stream.write("https://partner-7.com/company/terminos-condiciones\n")
        stream.write("https://partner-7.com/publicar-tarea\n")
        stream.write("https://partner-7.com/ver-lista-tarea\n")
        tareas.forEach((t) => {
            stream.write(`https://partner-7.com/ver-lista-tarea/${t._id}\n`)
        })
        stream.end()

    })
}