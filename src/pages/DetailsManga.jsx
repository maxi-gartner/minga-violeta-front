import axios from "axios"
//import apiUrl from "../../api"


const resManga =  await axios.get(`http://localhost:8000/mangas`) || [];
const manga = resManga.data.mangas[1]
console.log(manga);
const resChapter =  await axios.get(`http://localhost:8000/chapters`) || [];
const chapters = resChapter.data.chapters
//console.log(chapters);
const mangaChapters = chapters.find(chapter => chapter.manga_id === manga._id)
console.log("mangaChapters", mangaChapters);

export default function DetailsManga(){

    return (
        <>
            <div className="h-screen pt-[12vh] px-2">
                <img className="max-h-[60vh] w-full object-cover object-top" src={manga.cover_photo} alt={"https://blogs.unsw.edu.au/nowideas/files/2018/11/error-no-es-fracaso.jpg"}></img>
                <div>
                    <p className="text-5xl">{manga.title}{` #${mangaChapters.pages.length}`}</p>
                </div>
            </div>
        </>
    )
}