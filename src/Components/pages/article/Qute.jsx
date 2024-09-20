
function Qute ({qute}) {
    if (qute.link.url){
        return (
            <p className="bg-[#eee] text-[1.2rem] leading-8 mb-4 p-4 border-dashed border-[2px] border-fontColor">{qute.t1} <a href={qute.link.url} target="blank" className="text-blue-400 hover:border-dashed  border-blue-400 hover:border-b-[2px]">{qute.link.name}</a> {qute.t2}</p>
        )
    }
    else {
        return <p className="bg-[#eee] text-[1.2rem] leading-8 mb-4 p-4 border-dashed border-[2px] border-fontColor">{qute.t1}</p>
    }

}

export default Qute;