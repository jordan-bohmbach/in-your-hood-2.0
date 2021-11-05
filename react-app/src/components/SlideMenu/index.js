

import './SlideMenu.css'

function SlideMenu(){

    const menuButton = document.getElementById('opener')
    
    menuButton.addEventListener('click', function() {
        const menu = document.getElementById('menu')
        if(menu.classList.contains('hidden')){
            document.getElementById('menu').classList.remove('hidden')
        }else{
            document.getElementById('menu').classList.add('hidden')
        }
        
    })

    

    return(
        <>
        <main>
            <aside id='menu' className='hidden' >
                <ul class="asideList">
                <li><a href="" class="asideAnchor">Link</a></li>
                <li><a href="" class="asideAnchor">Link</a></li>
                <li><a href="" class="asideAnchor">Link</a></li>
                <li><a href="" class="asideAnchor">Link</a></li>
                </ul>
            </aside>
            <section>
                <input type="checkbox" id='opener' />
                <label for="myInput">
                <span class="bar top"></span>
                <span class="bar middle"></span>
                <span class="bar bottom"></span>
                </label>

                <div class="content">
                <h1>Pure CSS side reveal effect</h1>
                </div>
            </section>
        </main>
        </>
    )
}

export default SlideMenu
