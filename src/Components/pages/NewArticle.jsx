import { useState } from "react";


function NewArticle () {
    
    const [details, setDetails] = useState({
        title:"",
        brief:"",
        date:"2023-02-01",
        url:""
    })

    const change = (target, value) => {


        if (target === "title") setDetails(prev => ({...prev, title: value}));
        else if (target === "brief") setDetails(prev => ({...prev, brief: value}));
        else if (target === "date") setDetails(prev => ({...prev, date: value}));
        else if (target === "url") setDetails(prev => ({...prev, url: value}));
        else return;

        console.log(details.title);
        // console.log(value);
        console.log(details);
    }


    return (
        <div className="w-mainSize bg-white flex flex-col m-auto p-4">
            <h1 className="text-3xl mb-4 text-center">مقال جديد</h1>
            <form className="block">

                {/********** Title **********/}

                <lable htmlFor="title" className="mb-2 block">عنوان المقال :</lable>
                <input value={details.title} onChange={(event) => change(event.target.id, event.target.value)} type="text" id="title" name="articleTitle" required placeholder="أضف عنواناً للمقال" className="border-fontColor border-2 px-2 w-1/2"/>

                {/********** Brief **********/}

                <lable htmlFor="brief" className="mb-2 mt-4 block">نبذة عن المقال :</lable>
                <input value={details.brief}  onChange={(event) => change(event.target.id, event.target.value)} type="text" id="brief" name="articleBrief" required placeholder="أضف نبذة عن المقال" className="border-gray border-2 px-2 w-2/3 h-24"/>

                {/********** Date **********/}

                <div className="flex mb-2 mt-4 ">
                    <lable htmlFor="date" className="ml-4">تاريخ النشر :</lable>
                    <input onChange={(event) => change(event.target.id, event.target.value)} type="date" id="day" name="date" value={details.date} required className="border-2 border-grey px-2"/>
                </div>

                {/********** URL **********/}

                <lable htmlFor="url" className="mb-2 mt-4 block">رابط المقال | URL :</lable>
                <input value={details.url}  onChange={(event) => change(event.target.id, event.target.value)} type="text" id="url" name="articleUrl"  required placeholder="url" className="border-gray border-2 px-2 text-left"/>

                {/********** Content **********/}

                <lable htmlFor="content" className="mb-2 mt-4 block">محتوى المقال :</lable>
                <div className="h-h">

                    <input type="text" id="content" name="articleContent" required placeholder="" className="border-gray border-2 px-2 w-full"/>
                </div>
                
            </form>
        </div>

    )
}

export default NewArticle;