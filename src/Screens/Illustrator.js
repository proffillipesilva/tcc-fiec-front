import React from 'react'
import logo from "../images/Logo.svg"
import './ilustrador.css'
import upload from "../images/upload.jpg"


const Illustrator = () => {
    return (
        <>
            <header>
                <input type="checkbox" name="" id="chk1"/>
                    <div class="logo"><a href="user.html" rel="noopener noreferrer"><img src={logo}/></a></div>
                    <div class="search-box">

                    </div>
                    <ul>
                        <li><a href="user.html">Revise causos</a></li>
                        <li><a href="ilustrador.html">Poste sua ilustração</a></li>
                    </ul>
                    <div class="menu">
                        <label for="chk1">
                            <i class="fa fa-bars"></i>
                        </label>
                    </div>
            </header>
            <section>

                <div class="container">


                    <div class="card">
                        <img class="upload" src={upload} />

                        <p class="tituloo"><b>Traga arquivos para upload</b></p>
                        <form class="box" method="post" action="" enctype="multipart/form-data">
                            <div class="box__input">
                                <input class="arquivo" type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" multiple />
                                <button class="botao_upload" type="submit">Upload</button>
                            </div>
                            <div class="box__uploading">Uploading…</div>
                            <div class="box__success">Done!</div>
                            <div class="box__error">Error! <span></span>.</div>
                        </form>
                    </div>

            </section>
        </>
    )
}

export default Illustrator;