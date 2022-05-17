$(() => {
    let filterAll = $("#filter-position-all");
    let filterManager = $("#filter-position-manager");

    $(".author-filter").click(function() {
        $("#authors-table tbody tr").hide();

        const position = this.id.split("-")[2];

        if(position === "All") {
            $("#authors-table tbody tr").show()
        } else {
            $("#authors-table tbody tr").each(function(tr) {
                $(this).has(`td:contains(${position})`).show();
            });
        }

        $("#authors-table tbody tr").each(function(tr) {
            $(this).has(`td:contains(${position})`).show();
        });
    });
});