import Marquee from "react-fast-marquee";


const BrakingNews = () => {
    return (
        <div>
      <div className="flex">
      <button className="btn btn-warning">Breaking News</button>
            <Marquee>
 <p> I can be a React component, multiple React components, or just some text.</p>
 <p> I can be a React component, multiple React components, or just some text.</p>
 <p> I can be a React component, multiple React components, or just some text.</p>
    </Marquee>
      </div>
               </div>
        
    );
};

export default BrakingNews;