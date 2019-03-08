export interface Photo {
  src: string
  caption: string
  thumb: string
}

export interface RegionComuna {
    region: string
    region_numero: string
    comunas: string[]
}

export interface Comuna {
    name: string
    region: string
    regiones_numero: string
}

export const REGION_COMUNAS: RegionComuna[] = [{
    region: "Arica y Parinacota",
    region_numero: "XV",
    comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
},
{
    region: "Tarapacá",
    region_numero: "I",
    comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
},
{
    region: "Antofagasta",
    region_numero: "II",
    comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
},
{
    region: "Atacama",
    region_numero: "III",
    comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
},
{
    region: "Coquimbo",
    region_numero: "IV",
    comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
},
{
    region: "Valparaíso",
    region_numero: "V",
    comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
},
{
    region: "Región del Libertador Gral. Bernardo O’Higgins",
    region_numero: "VI",
    comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
},
{
    region: "Región del Maule",
    region_numero: "VII",
    comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
},
{
    region: "Región del Biobío",
    region_numero: "VIII",
    comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío", "Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"]
},
{
    region: "Región de la Araucanía",
    region_numero: "IX",
    comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
},
{
    region: "Región de Los Ríos",
    region_numero: "XIV",
    comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
},
{
    region: "Región de Los Lagos",
    region_numero: "X",
    comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
},
{
    region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
    region_numero: "XI",
    comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
},
{
    region: "Región de Magallanes y de la Antártica Chilena",
    region_numero: "XII",
    comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "AntárVca", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
},
{
    region: "Región Metropolitana",
    region_numero: "Metropolitana",
    comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor", "Santiago"]
}]


export const COMUNAS: Comuna[] = [
    {
      "name": "Arica",
      "region": "Arica y Parinacota",
      "regiones_numero": "XV"
    },
    {
      "name": "Camarones",
      "region": "Arica y Parinacota",
      "regiones_numero": "XV"
    },
    {
      "name": "Putre",
      "region": "Arica y Parinacota",
      "regiones_numero": "XV"
    },
    {
      "name": "General Lagos",
      "region": "Arica y Parinacota",
      "regiones_numero": "XV"
    },
    {
      "name": "Iquique",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Alto Hospicio",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Pozo Almonte",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Camiña",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Colchane",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Huara",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Pica",
      "region": "Tarapacá",
      "regiones_numero": "I"
    },
    {
      "name": "Antofagasta",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Mejillones",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Sierra Gorda",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Taltal",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Calama",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Ollagüe",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "San Pedro de Atacama",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Tocopilla",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "María Elena",
      "region": "Antofagasta",
      "regiones_numero": "II"
    },
    {
      "name": "Copiapó",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Caldera",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Tierra Amarilla",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Chañaral",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Diego de Almagro",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Vallenar",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Alto del Carmen",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Freirina",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "Huasco",
      "region": "Atacama",
      "regiones_numero": "III"
    },
    {
      "name": "La Serena",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Coquimbo",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Andacollo",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "La Higuera",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Paiguano",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Vicuña",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Illapel",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Canela",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Los Vilos",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Salamanca",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Ovalle",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Combarbalá",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Monte Patria",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Punitaqui",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Río Hurtado",
      "region": "Coquimbo",
      "regiones_numero": "IV"
    },
    {
      "name": "Valparaíso",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Casablanca",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Concón",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Juan Fernández",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Puchuncaví",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Quintero",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Viña del Mar",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Isla de Pascua",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Los Andes",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Calle Larga",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Rinconada",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "San Esteban",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "La Ligua",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Cabildo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Papudo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Petorca",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Zapallar",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Quillota",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Calera",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Hijuelas",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "La Cruz",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Nogales",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "San Antonio",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Algarrobo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Cartagena",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "El Quisco",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "El Tabo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Santo Domingo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "San Felipe",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Catemu",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Llaillay",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Panquehue",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Putaendo",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Santa María",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Quilpué",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Limache",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Olmué",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Villa Alemana",
      "region": "Valparaíso",
      "regiones_numero": "V"
    },
    {
      "name": "Rancagua",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Codegua",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Coinco",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Coltauco",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Doñihue",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Graneros",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Las Cabras",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Machalí",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Malloa",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Mostazal",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Olivar",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Peumo",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Pichidegua",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Quinta de Tilcoco",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Rengo",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Requínoa",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "San Vicente",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Pichilemu",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "La Estrella",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Litueche",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Marchihue",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Navidad",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Paredones",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "San Fernando",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Chépica",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Chimbarongo",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Lolol",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Nancagua",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Palmilla",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Peralillo",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Placilla",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Pumanque",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Santa Cruz",
      "region": "Región del Libertador Gral. Bernardo O’Higgins",
      "regiones_numero": "VI"
    },
    {
      "name": "Talca",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Constitución",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Curepto",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Empedrado",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Maule",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Pelarco",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Pencahue",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Río Claro",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "San Clemente",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "San Rafael",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Cauquenes",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Chanco",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Pelluhue",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Curicó",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Hualañé",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Licantén",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Molina",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Rauco",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Romeral",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Sagrada Familia",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Teno",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Vichuquén",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Linares",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Colbún",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Longaví",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Parral",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Retiro",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "San Javier",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Villa Alegre",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Yerbas Buenas",
      "region": "Región del Maule",
      "regiones_numero": "VII"
    },
    {
      "name": "Concepción",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Coronel",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Chiguayante",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Florida",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Hualqui",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Lota",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Penco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Pedro de la Paz",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Santa Juana",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Talcahuano",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Tomé",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Hualpén",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Lebu",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Arauco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Cañete",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Contulmo",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Curanilahue",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Los Álamos",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Tirúa",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Los Ángeles",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Antuco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Cabrero",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Laja",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Mulchén",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Nacimiento",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Negrete",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Quilaco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Quilleco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Rosendo",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Santa Bárbara",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Tucapel",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Yumbel",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Alto Biobío",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Chillán",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Bulnes",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Cobquecura",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Coelemu",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Coihueco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Chillán Viejo",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "El Carmen",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Ninhue",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Ñiquén",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Pemuco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Pinto",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Portezuelo",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Quillón",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Quirihue",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Ránquil",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Carlos",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Fabián",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Ignacio",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "San Nicolás",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Treguaco",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Yungay",
      "region": "Región del Biobío",
      "regiones_numero": "VIII"
    },
    {
      "name": "Temuco",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Carahue",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Cunco",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Curarrehue",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Freire",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Galvarino",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Gorbea",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Lautaro",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Loncoche",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Melipeuco",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Nueva Imperial",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Padre las Casas",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Perquenco",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Pitrufquén",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Pucón",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Saavedra",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Teodoro Schmidt",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Toltén",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Vilcún",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Villarrica",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Cholchol",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Angol",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Collipulli",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Curacautín",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Ercilla",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Lonquimay",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Los Sauces",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Lumaco",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Purén",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Renaico",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Traiguén",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Victoria",
      "region": "Región de la Araucanía",
      "regiones_numero": "IX"
    },
    {
      "name": "Valdivia",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Corral",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Lanco",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Los Lagos",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Máfil",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Mariquina",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Paillaco",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Panguipulli",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "La Unión",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Futrono",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Lago Ranco",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Río Bueno",
      "region": "Región de Los Ríos",
      "regiones_numero": "XIV"
    },
    {
      "name": "Puerto Montt",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Calbuco",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Cochamó",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Fresia",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Frutillar",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Los Muermos",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Llanquihue",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Maullín",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Puerto Varas",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Castro",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Ancud",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Chonchi",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Curaco de Vélez",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Dalcahue",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Puqueldón",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Queilén",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Quellón",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Quemchi",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Quinchao",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Osorno",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Puerto Octay",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Purranque",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Puyehue",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Río Negro",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "San Juan de la Costa",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "San Pablo",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Chaitén",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Futaleufú",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Hualaihué",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Palena",
      "region": "Región de Los Lagos",
      "regiones_numero": "X"
    },
    {
      "name": "Coihaique",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Lago Verde",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Aisén",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Cisnes",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Guaitecas",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Cochrane",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "O’Higgins",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Tortel",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Chile Chico",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Río Ibáñez",
      "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
      "regiones_numero": "XI"
    },
    {
      "name": "Punta Arenas",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Laguna Blanca",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Río Verde",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "San Gregorio",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Cabo de Hornos",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Antártica",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Porvenir",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Primavera",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Timaukel",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Natales",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Torres del Paine",
      "region": "Región de Magallanes y de la Antártica Chilena",
      "regiones_numero": "XII"
    },
    {
      "name": "Cerrillos",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Santiago",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Cerro Navia",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Conchalí",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "El Bosque",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Estación Central",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Huechuraba",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Independencia",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "La Cisterna",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "La Florida",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "La Granja",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "La Pintana",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "La Reina",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Las Condes",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Lo Barnechea",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Lo Espejo",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Lo Prado",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Macul",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Maipú",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Ñuñoa",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Pedro Aguirre Cerda",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Peñalolén",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Providencia",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Pudahuel",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Quilicura",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Quinta Normal",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Recoleta",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Renca",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San Joaquín",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San Miguel",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San Ramón",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Vitacura",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Puente Alto",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Pirque",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San José de Maipo",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Colina",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Lampa",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Tiltil",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San Bernardo",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Buin",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Calera de Tango",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Paine",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Melipilla",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Alhué",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Curacaví",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "María Pinto",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "San Pedro",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Talagante",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "El Monte",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Isla de Maipo",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Padre Hurtado",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    },
    {
      "name": "Peñaflor",
      "region": "Región Metropolitana",
      "regiones_numero": "Metropolitana"
    }
  ]