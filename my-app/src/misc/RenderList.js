import React from "react";

function RenderList(){
    const list = [
        {
          title: "React",
          url: "https://reactjs.org/",
          author: "Jordan Walke",
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: "Redux",
          url: "https://redux.js.org/",
          author: "Dan Abramov, Andrew Clark",
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
      ];

    console.log(list);

      return (
        <div>
            {list.map(l=>{
                return (
                    <div key={l.objectID} >
                        <span>title: {l.author}</span>
                    </div>
                );
            })}
        </div>
      );
}

export default RenderList;
