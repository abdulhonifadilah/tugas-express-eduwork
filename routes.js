const res = require("express/lib/response");
const { process_params } = require("express/lib/router");

const router = require("express").Router();
let mahasiswa = [
  {
    id: "1",
    nama: "abdul",
    prodi: "teknik informatika",
  },
  {
    id: "2",
    nama: "honi",
    prodi: "teknik mesin",
  },
  {
    id: "3",
    nama: "fadilah",
    prodi: "teknik industri",
  },
];

let makanan=[
    {
        id:"1",
        nama: "kebab",
        category:"fastfood"
    },
    {
        id:"2",
        nama: "permen",
        category:"junkfood"
    },
    {
        id:"3",
        nama: "es krim",
        category:"junkfood"
    },
    {
        id:"4",
        nama: "sandwich",
        category:"fashfood"
    }
]



router.get("/", (req, res) => {
  res.json(mahasiswa);
});

router.get("/user/:id", (req, res) => {
  let data = mahasiswa.filter((e) => e.id === req.params.id);
  if (data.length === 0) {
    data = { status: "not found", message: `data id ${req.params.id} tidak ada` };
  }
  res.json(data)
});

router.get("/makanan",(req,res)=>{
    res.json(makanan)
})

router.get("/makanan/:nama",(req,res)=>{
    let data = makanan.filter((e)=> e.nama.includes(req.params.nama));
    if(data.length === 0){
        data= {
            status: "not found",
            message: "makanan tidak ditemukan"
        }
    }
    res.json(data)
})



module.exports = router;
