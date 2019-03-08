import * as express from 'express'
import * as jwt from 'jsonwebtoken'
import { 
    allUsers,
    singleUser,
    register,
    login,
    checkEmail,
    me,
    me2,
    updateUser,
} from './auth'
import {
    allTareas,
    singleTarea,
    getTareasByUser,
    publicarTarea,
    updateTarea,
} from './tareas'
import {
    allOfertas,
    singleOferta,
    ofertasByUser,
    guardarOferta,
    updateOferta,
} from './ofertas'
import { 
    processSitemap,
} from './utils'

export const router = express.Router();

/* ================================================
 MIDDLEWARE - Used to grab user's token from headers
 ================================================ */
function verifyToken(req, res, next) {
    // const token = req.headers['authorization']; // Create token found in headers
    // // Check if token was found in headers
    // if (!token) {
    //   res.json({ success: false, message: 'No token provided' }); // Return error
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request - not headers authorization')
    }
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request - not token')

    } else {
        // Verify the token is valid
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            // Check if error is expired or invalid
            if (err) {
                res.json({ success: false, message: 'Token invalid: ' + err }); // Return error for token validation
            } else {
                req.decoded = decoded; // Create global variable to use in any request beyond
                next(); // Exit middleware
            }
        });
    }
}

router.get('/', (req, res) => { res.send('From ApI route') })

router.get('/users', verifyToken, (req, res) => { allUsers(req,res)})
router.get('/user/:id', verifyToken, (req, res) => { singleUser(req,res)})
router.post('/register', (req, res) => { register(req,res)})
router.post('/login', (req, res) => { login(req,res)})
router.get('/checkEmail/:email', (req, res) => { checkEmail(req,res)})
router.get('/me', verifyToken, (req, res) => { me(req,res)})
router.get('/me2', verifyToken, (req, res) => { me2(req,res)})
router.put('/updateuser/:id', verifyToken, (req, res) => { updateUser(req,res)})

router.get('/tareas', (req, res) => { allTareas(req,res)})
router.get('/tarea/:id', (req, res) => { singleTarea(req,res)})
router.get('/tareas/:userId', (req, res) => { getTareasByUser(req,res)})
router.post('/publicartarea', verifyToken, (req, res) => { publicarTarea(req,res)})
router.put('/updatetarea/:id', verifyToken, (req, res) => { updateTarea(req,res)})

router.get('/ofertas', verifyToken, (req, res) => { allOfertas(req,res)})
router.get('/oferta/:id', verifyToken, (req, res) => { singleOferta(req,res)})
router.get('/ofertas/:userId', verifyToken, (req, res) => { ofertasByUser(req,res)})
router.post('/guardaroferta', verifyToken, (req, res) => { guardarOferta(req,res)})
router.put('/updateoferta/:id', verifyToken, (req, res) => { updateOferta(req,res)})

router.get('/sitemap', (req, res) => { processSitemap(req, res)})