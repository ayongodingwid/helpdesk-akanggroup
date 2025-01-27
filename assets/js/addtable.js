$(document).ready(function() {
      // Add a new row to the table
      $("#add-menu-category").on("click", function() {
        const newRow = `
          <tr>
            <td><input type="text" class="form-control" placeholder="Enter Name"></td>
            <td><input type="text" class="form-control" placeholder="Enter Detail on ESO"></td>
            <td><input type="text" class="form-control" placeholder="Enter Code"></td>
            <td><input type="text" class="form-control" placeholder="Enter Description"></td>
            <td><input type="number" class="form-control" value="0"></td>
            <td>
              <input type="color" class="form-control form-control-color">
            </td>
            <td>
              <input type="file" class="form-control">
            </td>
            <td>
              <button class="btn btn-danger btn-sm remove-row">Remove</button>
            </td>
          </tr>`;
        $("#menu-category-table tbody").append(newRow);
      });

      $("#add-table-asset").on("click", function() {
        const newRow = `
        <tr>
            <td><input type="text" class="form-control"></td>                        
            <td><input type="number" class="form-control" value="0"></td>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td><input type="text" class="form-control"></td>
            <td>
                <button class="btn btn-danger btn-sm remove-row"><i class="bi bi-x-circle"></i></button>
            </td>
        </tr>`;
        $("#asset-table tbody").append(newRow);
      });

      // Remove a row from the table
      $(document).on("click", ".remove-row", function() {
        $(this).closest("tr").remove();
      });
    });
