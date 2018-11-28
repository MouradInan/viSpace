function init() {
    // Toast Materialize
    M.toast({html: 'Fichiers correctement importés !'});

    // Modal Materialize
    $(document).ready(function () {
        $('.modal').modal();
    });

    // Select Materialize
    $(document).ready(function () {
        $('select').formSelect();
    });


    $('.modal-trigger').click(function () {
        $.ajax({
            url: '/models',
            type: 'GET',
            dataType: 'json',
            success: function (models, status) {
                var data = {};
                for (var i = 0; i < models.length; i++) {
                    data[models[i]] = null;
                }
                $('.model_name').autocomplete({
                    data: data,
                    limit: 5
                });
            }
        });
    });

    $(".model_name").change(function () {
        var model = $(this).val();
        var axeElement = $(this).parent().parent().find('.axe_name');
        $.ajax({
            url: '/models/' + model,
            type: 'GET',
            dataType: 'json',
            success: function (params, status) {
                var data = {};
                for (var i = 0; i < params.length; i++) {
                    data[params[i]] = null;
                }
                axeElement.autocomplete({
                    data: data,
                    limit: 5
                });
            }
        });
    });


}