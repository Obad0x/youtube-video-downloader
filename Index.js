
const express = require ('express');
const app = express();
const ytdl = require("ytdl-core");
const PORT = process.env.PORT || 3000;
const engine = require('ejs-locals')


app.engine('ejs', engine);

app.set('view engine', 'ejs');


app.use('/public', express.static('public'));
app.set('views', 'views');


app.get('/', (req,res)=>{
  res.render('index.ejs');
})

app.get("/download", async (req, res) => {
	const v_id = req.query.url.split('v=')[1];
    const info = await ytdl.getInfo(req.query.url);
  

	return res.render("download", {
		url: "https://www.youtube.com/embed/" + v_id,
        info: info.formats.sort((a, b) => {
            return a.mimeType < b.mimeType;
        }),
	});
});



app.listen(PORT, ()=>{
  console.log(`Server Started, lets start downloading `);
});

