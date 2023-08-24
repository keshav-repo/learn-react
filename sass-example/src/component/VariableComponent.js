import React from "react";
import '../scss/VariableComponent.scss';

function VariableComponent() {
    return (
        <>
            <h1>Hello World</h1>
            <p>This is a paragraph.</p>
            <div id="container">This is some text inside a container.</div>

            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">SASS</a></li>
                </ul>
            </nav>

            <p class="danger">Warning! This is some text.</p>


            <p class="myArticle">This is some text in my article.</p>
            <p class="myNotes">This is some text in my notes.</p>

        </>
    )
}

export default VariableComponent;
