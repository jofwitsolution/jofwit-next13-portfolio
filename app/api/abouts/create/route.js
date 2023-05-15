import { NextResponse, NextRequest } from "next/server";
import cloudinary from "cloudinary";
import formidable from 'formidable';
import multer from "multer"
import { createEdgeRouter, createRouter, expressWrapper } from "next-connect";
import parser from "body-parser";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const storage = multer.memoryStorage()
// const upload = multer({storage: storage});

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads', // replace with your desired folder path
    filename: (req, file, callback) => {
      console.log(file)
      console.log("Fired")
      callback(null, Date.now() + '-' + file.originalname);
    },
  }),
});

const uploader = cloudinary.uploader;

const router = createRouter()

// router.use(expressWrapper(parser.json()));
// router.use(upload.single('file'));
router.post(async (req, event, next) => {
  // const body = await req.formData()
  // console.log(req.file)
  // console.log(body)
  const date = Date.now()
  console.log(date)

  const form = formidable();
  return form.parse(req, (err, fields, files) => {
    console.log(files)

    return new Response(JSON.stringify({message: "Done"}), {status: 200})
  })
  
});

export const config = {
  api: { bodyParser: false },
};

export async function POST(req, context) {
  // NextResponse.json({message: "Done"})
  return router.run(req, context)
}

// export const POST = async (req) => {
//   const body = await req.json()
//   console.log(body)

//   return NextResponse.json({message: "Good"})
// }