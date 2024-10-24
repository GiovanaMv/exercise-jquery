$(document).ready(function(){
    $('button').click(function(e){
        e.preventDefault();
        const tarefaPendentes =$('#tarefas').val();

        if(tarefaPendentes.trim() !== '') {
            const novaTarefa =$('<li class="Itens">Fazer...</li>').text(tarefaPendentes);

            $('ul').append(novaTarefa);
            $('#tarefa').val('');

            $(novaTarefa).click(function(){
                $(this).toggleClass('feito')
            })
        }
    })
})
   
    