function insert(url1) {
    $(document).ready(function () {
        $("#insert").click(function (e) {
            e.preventDefault()
            var name = $('#name').val()
            var adresse = $('#adresse').val()
            
            $.ajax({
                url: url1,
                method: "POST",
                data: { nom:name,contact:adresse},
                success: function (data) {
                    //console.log(data);
                    // $('#quickForm')[0].reset()
                    $('.table').load(location.href+' .table')
                    $('#message').html(data.message)
                    if (data.icon=="success") {
                        $('#message').css("color","green")
                    }
                    if (data.icon=="error"){

                        $('#message').css("color","red")
                    }
                    //swal("Good job!", data.message, data.icon)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus)
                }
    
            })
    
        })
    
    })
}

function update(url1,url2) {
    $(document).ready(function () {
        $("#update").click(function (e) {
            e.preventDefault()
            var id = $('#idc').val()
            var name = $('#nom').val()
            var adresse = $('#contact').val()
            
            $.ajax({
                url: url1,
                method: "POST",
                data: {id:id, nom:name,contact:adresse },
                success: function (data) {
                    //console.log(data);
                    // $('#quickForm')[0].reset()
                    $('.message').html(data.message)
                    $('.table').load(location.href+' .table-bordered')
                    location.href=url2
                    if (data.icon=="success") {
                        $('.message').css("color","green")
                    }
                    if (data.icon=="error"){

                        $('.message').css("color","red")
                    }
                    //swal("Good job!", data.message, data.icon)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus)
                }
    
            })
    
        })
    
    })
}

function remove(url1) {
    $(document).ready(function () {
        $("#remove").click(function (e) {
            e.preventDefault()
            $.ajax({
                url: url1,
                method: "POST",
                success: function (data) {
                    //console.log(data);
                    // $('#quickForm')[0].reset()
                    $('.table').load(location.href+' .table')
                    alert(data.message)
                    //swal("Good job!", data.message, data.icon)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus)
                }
    
            })
    
        })
    
    })
}

function removeOne(url1) {
    $(document).ready(function () {
        $("#removeOne").click(function (e) {
            e.preventDefault()
            var id = $('#id').val()
            $.ajax({
                url: url1,
                method: "POST",
                data:{id:id},
                success: function (data) {
                    //console.log(data);
                    // $('#quickForm')[0].reset()
                    $('.table').load(location.href+' .table')
                    $('#message').html(data.message)
                    if (data.icon=="success") {
                        $('#message').css("color","green")
                    }
                    if (data.icon=="error"){

                        $('#message').css("color","red")
                    }
                    //swal("Good job!", data.message, data.icon)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus)
                }
    
            })
    
        })
    
    })
}

function client() {
    $(document).ready(function () {
        $(".btn_idclient").click(function (e) {
            e.preventDefault()
            link=$(this).attr("href")
            console.log(id);
            $.ajax({
                url: link,
                method: "GET",
                success: function (data) {
                    //console.log(data.id);
                    $('#exampleModalLong').modal()
                    $('.modal-title').html('Mise à jour du client n°'+data.id)
                    $('#idc').val(data.id)
                    $('#nom').val(data.nom)
                    $('#contact').val(data.contact)
                    //swal("Good job!", data.message, data.icon)
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    console.log(textStatus)
                }
    
            })
    
        })
    
    })
}