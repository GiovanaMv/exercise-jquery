$(document).ready(function(){
    $('button').click(function(e){
        e.preventDefault();

        const tarefaPendentes =$('#tarefas').val();
        const dataInicio = $('#data-inicio').val();

        if(tarefaPendentes.trim() !== '') {
            // Cria uma nova tarefa (<li>) com o texto do input
             const novaTarefa = $('<li class="Itens d-flex justify-content-between align-items-center">')
                .html(`<span>${tarefaPendentes}</span> <span class="text-muted">${dataInicio}</span>`); 

            // Adiciona a nova tarefa na lista
            $('#lista-tarefas').append(novaTarefa);

            // Limpa os campos após adicionar
            $('#tarefas').val('');
            $('#data-inicio').val('');

            // Alterna a classe "feito" ao clicar na tarefa
            $(novaTarefa).click(function() {
                $(this).toggleClass('feito');
            });
        }
    });
})

   
    