let botoes = document.querySelectorAll(".botao");
let sistema = document.querySelector(".sistema-gradus");
let oquefaz = document.querySelector(".o-que-faz");
let comofunciona = document.querySelector(".como-funciona");
let publico = document.querySelector(".publico-alvo");
let onde = document.querySelector(".onde");
let itens_sistema = document.querySelectorAll(".o-sistema > .itens > .item");
let overlay_sistema = document.querySelector(".o-sistema > .overlay");
let itens = document.querySelectorAll(".item");
let overlay = document.querySelectorAll(".overlay");
let titles = document.querySelectorAll(".title");
let manual_marcar = false;

window.addEventListener("load", function() {
    console.log("Todos os recursos terminaram o carregamento!");
});

console.log(botoes);
console.log(titles);

console.log(overlay);

function show_oqfaz(indice, title){
    setTimeout(function(){
        overlay[(indice - 2)].classList.toggle("opacity");
        setTimeout(function(){
            titles[title].classList.toggle("opacity");
            setTimeout(function(){
                itens[indice].classList.toggle("opacity");
                setTimeout(function(){
                    itens[(indice + 1)].classList.toggle("opacity");
                    setTimeout(function(){
                        itens[(indice + 2)].classList.toggle("opacity");
                    }, 1000);   
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

function show_cmfunfa(){
    let video_conceitual = document.querySelector(".video-conceitual");
    setTimeout(function(){
        overlay[2].classList.toggle("opacity");
        setTimeout(function(){
            titles[1].classList.toggle("opacity");
            setTimeout(function(){
                video_conceitual.classList.toggle("opacity");
            }, 1000);
        }, 1000);
    }, 1000);
}

function show_ambiente(){
    setTimeout(function(){
        overlay[4].classList.toggle("opacity");
        setTimeout(function(){
            titles[3].classList.toggle("opacity");
            setTimeout(function(){
                itens[10].classList.toggle("opacity");
            }, 1000);
        }, 1000);
    }, 1000);
}

function show_publico(){
    let desc = document.querySelector(".desc");
    setTimeout(function(){
        overlay[3].classList.toggle("opacity");
        setTimeout(function(){
            titles[2].classList.toggle("opacity");
            desc.classList.toggle("opacity");
            setTimeout(function(){
                itens[6].classList.toggle("opacity");
                setTimeout(function(){
                    itens[7].classList.toggle("opacity");
                    setTimeout(function(){
                        itens[8].classList.toggle("opacity");
                        setTimeout(function(){
                            itens[9].classList.toggle("opacity");
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

setTimeout(function(){
    overlay_sistema.classList.toggle("opacity");
    setTimeout(function(){
        itens_sistema[0].classList.toggle("opacity");
        setTimeout(function(){
            itens_sistema[1].classList.toggle("opacity");
            setTimeout(function(){
                itens_sistema[2].classList.toggle("opacity");
            }, 1000);
        }, 1000);
    }, 1000);
}, 2000);

function saber_onde_ta(indice){
    let img = document.createElement("div");
    img.classList.add("select");  
    
    // Anterior a Ele
    if(indice > 0){
        if(botoes[(indice - 1)].childElementCount >= 1){
            botoes[(indice - 1)].removeChild(botoes[(indice - 1)].childNodes[1]);
            botoes[(indice - 1)].classList.toggle("botao-select");
        }
    }
    
    // Ele Mesmo
    if(botoes[indice].childElementCount == 0){
        botoes[indice].appendChild(img);
        botoes[indice].classList.toggle("botao-select");
    }

    // Depois Dele
    if(botoes[(indice + 1)].childElementCount == 1){
        botoes[(indice + 1)].removeChild(botoes[(indice + 1)].childNodes[1]);
        botoes[(indice + 1)].classList.toggle("botao-select");
    }
}
let executed0 = false;
let executed1 = false;
let executed2 = false;
let executed3 = false;

window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset);
    if(window.pageYOffset <= 409){ // O SISTEMA
        saber_onde_ta(0);
        if(manual_marcar == true){ // APRESENTAÇÃO
            saber_onde_ta(6);
        }
    } else if(window.pageYOffset > 409 && this.window.pageYOffset <= 1011){ // O QUE FAZ
        saber_onde_ta(1);
        if(manual_marcar == true){ // PERSONALIDADE
            saber_onde_ta(7);
        }
        if(executed0 == false){
            executed0 = true;
            show_oqfaz(3,0);
        }
    } else if(window.pageYOffset > 1011 && this.window.pageYOffset <= 1507){ // COMO FUNCIONA
        saber_onde_ta(2);
        if(executed1 == false){
            executed1 = true;
            show_cmfunfa();
        }
    } else if(window.pageYOffset > 1507 && this.window.pageYOffset <= 2240){ // PÚBLICO-ALVO
        saber_onde_ta(3);
        if(executed2 == false){
            executed2 = true;
            show_publico();
        }
    } else if(window.pageYOffset > 2240 && this.window.pageYOffset <= 2833){ // AMBIENTE HOSPITALAR
        saber_onde_ta(4);
        if(executed3 == false){
            executed3 = true;
            show_ambiente();
        }
    } else if(window.pageYOffset > 2240 && this.window.pageYOffset <= 2833){ // AMBIENTE HOSPITALAR
        saber_onde_ta(4);
    }
    if(window.pageYOffset > 1011 && this.window.pageYOffset <= 5191){
        if(manual_marcar == true){ // MARCA
            saber_onde_ta(8);
        }    
    } else if(window.pageYOffset > 5191 && this.window.pageYOffset <= 5936){
        if(manual_marcar == true){ // CORES
            saber_onde_ta(9);
        }    
    } else if(window.pageYOffset > 5936 && this.window.pageYOffset <= 6555){
        if(manual_marcar == true){ // TIPOGRAFIA
            saber_onde_ta(10);
        }    
    } else if(window.pageYOffset > 6555){
        if(manual_marcar == true){ // APLICAÇÕES
            saber_onde_ta(11);
        }    
    } 
    
});

console.log(comofunciona.offsetTop - 65);

function show_window(div){
    window.scroll({
        top: div.offsetTop - 65,
        behavior: "smooth"
    });  
}

let rolar_baixo = null;

function mine_descer(){
    let zona_exclusao = document.querySelector(".zona-de-exclusao");
    let largura_minima = document.querySelector(".largura-minima");
    let fundo_colorido = document.querySelector(".fundo-colorido");
    let regras_convivencia = document.querySelector(".regras-convivencia");
    let indicacoes_proibidas = document.querySelector(".indicacoes-proibidas");
    let monocromatica = document.querySelector(".monocromatica");
    console.log(rolar_baixo);
    for(let indc = 0; indc < 7; indc ++){
        if(indc == 0){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(zona_exclusao);
            })
        } else if(indc == 1){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(largura_minima);
            })
        } else if(indc == 2){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(fundo_colorido);
            })
        } else if(indc == 3){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(regras_convivencia);
            })
        } else if(indc == 4){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(indicacoes_proibidas);
            })
        } else if(indc == 5){
            rolar_baixo[indc].addEventListener("click", function(){
                show_window(monocromatica);
            })
        }
    }

    console.log(rolar_baixo);
    

}

function show_manual(){
    // Troca da Página Inicial Para o Manual
    if(manual_marcar == false){
        manual_marcar = true;
    } else{
        manual_marcar = false;
    }

    let paginas = document.querySelector(".paginas");
    paginas.children[1].classList.toggle("pagina-transition2");
    paginas.classList.toggle("pagina-transition"); 

    rolar_baixo = document.querySelectorAll(".rolar-baixo");
    mine_descer();

    for(let botao of botoes){
        if(botao.innerHTML != "MANUAL DE MARCA"){
            botao.classList.toggle("botao-hide")
            show_window(botao);
        }else{
            let apresentacao = document.querySelector(".apresentacao");
            let personalidade = document.querySelector(".personalidade");
            let marca = document.querySelector(".marca-guide");
            let cores = document.querySelector(".cores");
            let tipografia = document.querySelector(".tipografia");
            let aplicacoes = document.querySelector(".aplicacoes");
            let download = document.querySelector(".download");
            
            botoes[6].addEventListener("click", function(){
                show_window(apresentacao);
            });
            botoes[7].addEventListener("click", function(){
                show_window(personalidade);
            });
            botoes[8].addEventListener("click", function(){
                show_window(marca);
            });
            botoes[9].addEventListener("click", function(){
                show_window(cores);
            });
            botoes[10].addEventListener("click", function(){
                show_window(tipografia);
            });
            botoes[11].addEventListener("click", function(){
                show_window(aplicacoes);
            });

            return
        }
    }
}

botoes[5].addEventListener("click", show_manual);

botoes[0].addEventListener("click", function(){
    show_window(sistema);
});
botoes[1].addEventListener("click", function(){
    show_window(oquefaz);
});
botoes[2].addEventListener("click", function(){
    show_window(comofunciona);
});
botoes[3].addEventListener("click", function(){
    show_window(publico);
});
botoes[4].addEventListener("click", function(){
    show_window(onde);
});