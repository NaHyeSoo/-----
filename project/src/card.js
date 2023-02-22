
function Card({$target,initState}){
    const $container = document.createElement('div')
    $target.appendChild($container)
    $container.setAttribute("id","card_container")

    this.state = initState;
  

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }
    
    this.render = () => {
        $container.innerHTML =
                this.state.map(({attribute,name,logo,explain,}) =>`
                <div id='card'>
                    <ul>
                        <div id = 'attribute'>${attribute}</div>
                        
                        <button id="btn-modal">${name}</button>
                    
                            <div id="modal" class="modal-overlay">
                                <div class="modal-window">
                                    <div class="title">
                                        <h2>${name}</h2>
                                    </div>
                                    <div class="close-area">X</div>
                                    <div class="content">
                                        <p>${explain}</p>
                                    </div>    
                                    <div class = "detail">자세히 확인하기</div>
                                </div>
                            </div>

                        <div id = 'logo'>${logo}</div>
                    </ul>
                </div>`).join('')          
    }
    this.render()

    const modal = document.querySelectorAll("#modal")
    const btnModal = document.querySelectorAll("#btn-modal")
    const closeBtn = document.querySelectorAll(".close-area")


    for(let i=0;i<modal.length;i++){
        btnModal[i].addEventListener("click", e => {
            modal[i].style.display = "flex"
        })
        closeBtn[i].addEventListener("click", e => {
            modal[i].style.display = "none"
        })    
    }     
}
